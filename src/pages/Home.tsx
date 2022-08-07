import React from 'react'
import {useNavigate} from 'react-router-dom'

import * as ROUTES from '../constants/routes'
import {useAppContext} from '../context/AppContext'

function Home() {
	const {name, setName} = useAppContext()

	const navigate = useNavigate()

	const handleStart = e => {
		e.preventDefault()
		navigate(ROUTES.QUESTIONS)
	}
	return (
		<>
			<h1>FunTrivia</h1>
			<p>Fun trivia game to test your IQ</p>
			<form>
				<input
					type='text'
					name='name'
					placeholder="What's your name?"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<button onClick={handleStart}>start</button>
			</form>
		</>
	)
}

export default Home
