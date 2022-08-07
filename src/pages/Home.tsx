import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {
	Button,
	HomepageContent,
	HomepageForm,
	InputField,
	Logo,
	PageContainer,
} from '../components/Global/styled'

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
		<PageContainer>
			<Logo src='icons/logo.svg' alt='trivia logo' />
			<HomepageContent>
				<h1>Welcome to Trivia</h1>
				<p>Play the ultimate online trivia quiz</p>
			</HomepageContent>
			<HomepageForm>
				<InputField
					type='text'
					name='name'
					placeholder="What's your name?"
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<Button onClick={handleStart}>Play game!</Button>
			</HomepageForm>
		</PageContainer>
	)
}

export default Home
