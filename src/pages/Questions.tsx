import React, {useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {
	AnswerContainer,
	AnswerItem,
	AnswerItemLabel,
	Button,
	InfoMessage,
	PageContainer,
	QuestionFooter,
	QuestionItem,
	QuestionsContainer,
	QuestionsForm,
	QuestionsHeader,
} from '../styles/styled'

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
		document.title = `Question ${data[step].id} of ${data.length}`

	}, [step])

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
		<PageContainer>
			<QuestionsHeader>
				<h2>
					Question {data[step].id} of {data.length}
				</h2>
				<h2>Score: {score}</h2>
			</QuestionsHeader>

			<QuestionsForm ref={formRef}>
				{
					data.map(item => (
						<QuestionsContainer key={item.id}>
							<QuestionItem>{item.question}</QuestionItem>

							<AnswerContainer>
								{item.answers.map((answer, index) => (
									<AnswerItem key={index}>
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

										<AnswerItemLabel
											correctAnswer={
												answerChecked &&
												item.correctAnswerIndex.includes(index)
											}
										>
											{answer}{' '}
											{answerChecked &&
												item.correctAnswerIndex.includes(index) &&
												'(correct)'}
										</AnswerItemLabel>
									</AnswerItem>
								))}
							</AnswerContainer>
						</QuestionsContainer>
					))[step]
				}
			</QuestionsForm>

			<QuestionFooter>
				{errorMessage && (
					<InfoMessage type={'error'}>{errorMessage}</InfoMessage>
				)}
				{answerChecked && (
					<>
						{
							{
								null: '',
								true: (
									<InfoMessage type={'success'}>Correct!</InfoMessage>
								),
								false: (
									<InfoMessage type={'error'}>Wrong!</InfoMessage>
								),
							}[answerMatched]
						}
					</>
				)}

				{answerChecked ? (
					<Button onClick={handleNextQuestion}>Next Question</Button>
				) : (
					<Button outline onClick={handleCheckAnswer}>
						Check Answer
					</Button>
				)}
			</QuestionFooter>
		</PageContainer>
	)
}

export default Questions
