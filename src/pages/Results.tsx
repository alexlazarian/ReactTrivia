import React from 'react'
import {useNavigate} from 'react-router-dom'

import * as ROUTES from '../constants/routes'
import * as STORAGE_KEYS from '../constants/storageKeys'
import {useAppContext} from '../context/AppContext'
import data from '../fixtures/data'

function Results() {
	const {score, name, highestScore, highestScoreDate} =
		useAppContext()

	const navigate = useNavigate()

	const handleRestart = e => {
		e.preventDefault()
		sessionStorage.removeItem(STORAGE_KEYS.CURRENT_SCORE)

		navigate(ROUTES.QUESTIONS)
	}

	const displayName = (): string => (name ? `${name}, ` : ``)
	const displayScore = (): string =>
		`You got ${score} out of ${data.length} questions right!`

	const displayScoreMessage = (): string =>
		score < 5 ? 'Better luck next time!' : 'You’re a Trivia master!!'

	const displayHighestScoreMessage = (): string =>
		highestScore
			? `Your best score so far was ${highestScore} out of ${data.length} questions which you got on ${highestScoreDate}.`
			: `You don't have a high score yet, play to get a score`

	return (
		<>
			<img src='' alt='results graphic' />
			<p>
				{displayName()}
				{displayScoreMessage()}
			</p>
			<p>{displayScore()}</p>
			<p>{displayHighestScoreMessage()}</p>

			<button onClick={handleRestart}>Play again!</button>
		</>
	)
}

export default Results
