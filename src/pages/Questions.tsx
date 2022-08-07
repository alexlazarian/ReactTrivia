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
				<div>Questions</div>
				{
					data.map((question, index) => {
						return (
							<div key={index}>
								<div>{question.question}</div>
								<div>{question.answers}</div>
							</div>
						)
					})[step]
				}
			</form>
			<button onClick={handleNextQuestion}>Next Question</button>
		</>
	)
}

export default Questions
