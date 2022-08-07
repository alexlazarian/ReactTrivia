import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './App'

import './styles/normalize.css'
import './styles/global.css'

const rootElement = document.getElementById('root')
render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	rootElement
)
