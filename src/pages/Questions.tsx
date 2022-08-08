import React, {useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import {
	AnswerContainer,
	AnswerItemLabel,
	Button,
	ButtonWrapper,
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
	const [errorMessage, setErrorMessage] = useState(false)
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
	const formRef = useRef(null)
	const questionRef = useRef(null)

	useEffect(() => {
		document.title = `Question ${data[step].id} of ${data.length}`
		questionRef.current.focus()
	}, [step])

	useEffect(() => {
		setScore(0)
	}, [])

	const handleUncheckAll = e => {
		e.preventDefault()
		const selectedAnswer = formRef.current

		for (let index = 0; index < selectedAnswer.length; index++) {
			// @ts-ignore
			console.log(selectedAnswer[index].checked)
			// @ts-ignore
			selectedAnswer[index].checked = false
		}
	}

	const handleCheckAnswer = e => {
		e.preventDefault()

		setErrorMessage(false)
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

		if (selectedAnswerArr.length === 0) return setErrorMessage(true)

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
				<h2 tabIndex={1}>
					Question {data[step].id} of {data.length}
				</h2>
				<h2>Score: {score}</h2>
			</QuestionsHeader>

			<QuestionsForm ref={formRef}>
				{
					data.map(item => (
						<QuestionsContainer key={item.id}>
							<QuestionItem tabIndex={2} ref={questionRef}>
								{item.question}
							</QuestionItem>

							<AnswerContainer>
								{item.answers.map((answer, index) => (
									<AnswerItemLabel
										key={index}
										correctAnswer={
											answerChecked &&
											item.correctAnswerIndex.includes(index)
										}
										tabIndex={index + 3}
									>
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
											tabIndex={index + 3}
										/>
										{answer}{' '}
										{answerChecked &&
											item.correctAnswerIndex.includes(index) &&
											'(correct)'}
									</AnswerItemLabel>
								))}
							</AnswerContainer>
						</QuestionsContainer>
					))[step]
				}
			</QuestionsForm>

			<QuestionFooter>
				{errorMessage && (
					<InfoMessage type={'error'}>
						Please select an answer
					</InfoMessage>
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
					<ButtonWrapper>
						<Button tabIndex={0} onClick={handleNextQuestion}>
							Next Question
						</Button>
					</ButtonWrapper>
				) : (
					<ButtonWrapper>
						<Button tabIndex={0} outline onClick={handleCheckAnswer}>
							Check Answer
						</Button>
						<Button tabIndex={0} link onClick={handleUncheckAll}>
							Unselect All
						</Button>
					</ButtonWrapper>
				)}
			</QuestionFooter>
		</PageContainer>
	)
}

export default Questions
