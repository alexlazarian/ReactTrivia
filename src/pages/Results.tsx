import React from 'react'
import {useNavigate} from 'react-router-dom'
import FireworksConfetti from '../components/Confetti/Fireworks'
import RealisticConfetti from '../components/Confetti/Realistic'

import {
	Badge,
	Button,
	Content,
	PageContainer,
} from '../components/Global/styled'
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
		score < 4
			? 'Better luck next time!'
			: score < 5
			? `You're getting there, keep up!`
			: 'You’re a Trivia master!'

	const displayHighestScoreMessage = (): string =>
		highestScore
			? `Your best score so far was ${highestScore} out of ${data.length} questions which you got on ${highestScoreDate}.`
			: `You don't have a high score yet, play to get a score`

	const displayConfetti = () =>
		score < 4 ? (
			<RealisticConfetti />
		) : (
			<FireworksConfetti durationUntilStop={5000} />
		)

	return (
		<PageContainer>
			<Badge src='icons/badge.svg' alt='results graphic' />
			{displayConfetti()}
			<Content>
				<h1>
					{displayName()}
					{displayScoreMessage()}
				</h1>
				<p>{displayScore()}</p>
				<p>{displayHighestScoreMessage()}</p>
			</Content>

			<Button onClick={handleRestart}>Play again!</Button>
		</PageContainer>
	)
}

export default Results
