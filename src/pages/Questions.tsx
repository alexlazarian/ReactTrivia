import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import * as ROUTES from '../constants/routes'
import data from '../fixtures/data'

function Questions() {
	const [step, setStep] = useState(0)

	const navigate = useNavigate()

	const handleNextQuestion = e => {
		e.preventDefault()
		if (step === data.length - 1) navigate(ROUTES.RESULTS)
		setStep(step => step + 1)
	}

	return (
		<>
			<form>
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
