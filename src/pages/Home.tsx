import React from 'react'
import {useNavigate} from 'react-router-dom'

import * as ROUTES from '../constants/routes'

function Home() {
	const navigate = useNavigate()

	const handleStart = e => {
		e.preventDefault()
		navigate(ROUTES.QUESTIONS)
	}
	return (
		<>
			<div>Home</div>
			<button onClick={handleStart}>start</button>
		</>
	)
}

export default Home
