import React from 'react'
import {useNavigate} from 'react-router-dom'

import * as ROUTES from '../constants/routes'
import {useAppContext} from '../context/AppContext'
import data from '../fixtures/data'

function Results() {
	const {score, name} = useAppContext()

	const navigate = useNavigate()

	const handleRestart = e => {
		e.preventDefault()
		navigate(ROUTES.QUESTIONS)
	}

	return (
		<>
			<img src='' alt='results graphic' />
			<p>{name && `${name}, `}You’re a Trivia master!</p>
			<p>
				You got {score} out of {data.length} questions right!
			</p>
			<button onClick={handleRestart}>Play again!</button>
		</>
	)
}

export default Results
