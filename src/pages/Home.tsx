import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import * as ROUTES from '../constants/routes'
import {useAppContext} from '../context/AppContext'

function Home() {
	const [errorMessage, setErrorMessage] = useState('')

	const {name, setName} = useAppContext()

	const navigate = useNavigate()

	const handleStart = e => {
		e.preventDefault()
		setErrorMessage('')
		
		navigate(ROUTES.QUESTIONS)
	}
	return (
		<>

			<img src="icons/logo.svg" alt="trivia logo" />
			<h1>Welcome to Trivia</h1>
			<p>Play the ultimate online trivia quiz</p>
			{errorMessage && <p>{errorMessage}</p>}

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
