/** @jsxImportSource @emotion/react */
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import AppContextProvider from './context/AppContext'
import {Home, Questions, Results} from './pages'

export default function App() {
	return (
		<AppContextProvider>
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path={ROUTES.QUESTIONS} element={<Questions />} />
				<Route path={ROUTES.RESULTS} element={<Results />} />
			</Routes>
		</AppContextProvider>
	)
}
