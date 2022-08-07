import React, {useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import * as ROUTES from '../constants/routes'
import {useAppContext} from '../context/AppContext'
import data from '../fixtures/data'

function Questions() {
	const [step, setStep] = useState(0)
	const {score, setScore} = useAppContext()

	const navigate = useNavigate()
	const formRef = useRef()

	useEffect(() => {
		setScore(0)
	}, [])

	const handleNextQuestion = e => {
		e.preventDefault()
		if (step === data.length - 1) return navigate(ROUTES.RESULTS)

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
										type={
											item.correctAnswerIndex.length > 1
												? 'checkbox'
												: 'radio'
										}
										id={answer}
										name='answer'
										value={answer}
									/>

									<label>{answer}</label>
								</div>
							))}
						</li>
					))[step]
				}
			</form>
			<button onClick={handleNextQuestion}>Next Question</button>
		</>
	)
}

export default Questions
