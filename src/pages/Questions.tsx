import React, {useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import * as ROUTES from '../constants/routes'
import * as STORAGE_KEYS from '../constants/storageKeys'
import {useAppContext} from '../context/AppContext'
import data from '../fixtures/data'
import {getFormattedDate} from '../utils/formatTodayDate'

function Questions() {
	const [step, setStep] = useState(0)
	const [errorMessage, setErrorMessage] = useState('')
	const [answerChecked, setAnswerChecked] = useState(false)
	const [answerMatched, setAnswerMatched] = useState(null)

	const {
		score,
		setScore,
		setHighestScore,
		highestScore,
		setHighestScoreDate,
	} = useAppContext()

	const navigate = useNavigate()
	const formRef = useRef()

	useEffect(() => {
		setScore(0)
	}, [])

	const handleCheckAnswer = e => {
		e.preventDefault()

		setErrorMessage('')
		setAnswerMatched(null)

		let selectedAnswerArr = []
		const selectedAnswer = formRef.current
		// @ts-ignore
		for (let index = 0; index < selectedAnswer.length; index++) {
			// @ts-ignore
			console.log(selectedAnswer[index].checked)
			// @ts-ignore
			if (selectedAnswer[index].checked) selectedAnswerArr.push(index)
		}

		console.log('selected answer', selectedAnswerArr)
		console.log('correct answer', data[step].correctAnswerIndex)

		const answersMatch =
			selectedAnswerArr.toString() ==
			data[step].correctAnswerIndex.toString()

		if (answersMatch) setScore(score => score + 1)

		if (selectedAnswerArr.length === 0)
			return setErrorMessage('Please select an answer')

		if (answersMatch) setAnswerMatched(true)
		else setAnswerMatched(false)

		setAnswerChecked(true)
	}

	const handleNextQuestion = e => {
		e.preventDefault()

		setAnswerChecked(false)

		if (step === data.length - 1) {
			if (score > highestScore) {
				console.log('highest score', highestScore)
				sessionStorage.setItem(
					STORAGE_KEYS.HIGHEST_SCORE,
					score.toString()
				)
				setHighestScore(score)

				sessionStorage.setItem(
					STORAGE_KEYS.HIGHEST_SCORE_DATE,
					getFormattedDate()
				)
				setHighestScoreDate(getFormattedDate())
			} else {
				console.log('not the highest score')
			}

			sessionStorage.setItem(
				STORAGE_KEYS.CURRENT_SCORE,
				score.toString()
			)
			return navigate(ROUTES.RESULTS)
		}

		setStep(step => step + 1)
	}

	return (
		<>
			<p>Score: {score}</p>

			<form ref={formRef}>
				{
					data.map(item => (
						<li key={item.id}>
							<p>
								Question {item.id} of {data.length}
							</p>
							<p>{item.question}</p>

							{item.answers.map((answer, index) => (
								<div key={index}>
									<input
										disabled={answerChecked}
										type={
											item.correctAnswerIndex.length > 1
												? 'checkbox'
												: 'radio'
										}
										id={answer}
										name='answer'
										value={answer}
									/>

									<label>
										{answer}{' '}
										{answerChecked && item.correctAnswerIndex.includes(index) && ('(correct)')}
									</label>
								</div>
							))}
						</li>
					))[step]
				}
			</form>
			{errorMessage && <p>{errorMessage}</p>}
			{answerChecked && (
				<p>
					{
						{
							null: '',
							true: 'Correct!',
							false: 'Wrong!',
						}[answerMatched]
					}
				</p>
			)}

			{answerChecked ? (
				<button onClick={handleNextQuestion}>Next Question</button>
			) : (
				<button onClick={handleCheckAnswer}>Check Answer</button>
			)}
		</>
	)
}

export default Questions
