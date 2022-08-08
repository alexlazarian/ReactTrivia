import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './App'

import './styles/normalize.css'
import './styles/global.css'
import SystemTheme from './styles/styled'

const rootElement = document.getElementById('root')
render(
	<>
		<SystemTheme />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</>,
	rootElement
)
