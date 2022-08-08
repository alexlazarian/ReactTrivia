import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {
	Button,
	Content,
	HomepageForm,
	InputField,
	Logo,
	PageContainer,
} from '../styles/styled'

import * as ROUTES from '../constants/routes'
import * as STORAGE_KEYS from '../constants/storageKeys'
import {useAppContext} from '../context/AppContext'

function Home() {
	const {name, setName} = useAppContext()

	const navigate = useNavigate()

	const handleStart = e => {
		e.preventDefault()

		sessionStorage.setItem(STORAGE_KEYS.NAME, name)
		navigate(ROUTES.QUESTIONS)
	}

	useEffect(() => {
		document.title = `Home - Trivia`
	}, [])

	return (
		<PageContainer>
			<Logo src='icons/logo.svg' alt='trivia logo' />
			<Content>
				<h1>Welcome to Trivia</h1>
				<p>Play the ultimate online trivia quiz</p>
			</Content>
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
