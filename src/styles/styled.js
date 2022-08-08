import styled, {createGlobalStyle, css} from 'styled-components'
import * as BREAK from '../constants/breakpoints'

export const PageContainer = styled.article`
	align-items: center;
	background-color: var(--COLOR_WHITE);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin: auto;
	max-width: 820px;
	padding: 60px 20px 20px 20px;
`

export const Logo = styled.img`
	margin-bottom: 20px;
	max-width: 200px;
	width: 100%;
`

export const Badge = styled.img`
	margin-bottom: 20px;
	max-width: 200px;
	width: 100%;
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	margin-bottom: 20px;
	text-align: center;
`

export const HomepageForm = styled.form`
	display: flex;
	gap: 10px;
	width: 100%;
	justify-content: center;

	@media (max-width: ${BREAK._379}) {
		align-items: center;
		flex-direction: column;
	}
`

export const QuestionsHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 16px;
	width: 100%;
`

export const QuestionsForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 20px;
	width: 100%;
`

export const QuestionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

export const QuestionItem = styled.p`
	min-height: 50px;
`

export const QuestionFooter = styled.div`
	align-self: flex-start;
	position: relative;
	width: 100%;
`

export const InfoMessage = styled.p`
	align-self: flex-start;
	bottom: 25px;
	font-size: var(--TYPE_LABEL);
	font-weight: 500;
	margin-bottom: 24px;
	position: absolute;

	${({type}) => {
		switch (type) {
			case 'error':
				return `color: var(--COLOR_RED);`
			case 'success':
				return `color: var(--COLOR_GREEN);`
			default:
				return `color: var(--COLOR_BLACK);`
		}
	}}
`

export const AnswerContainer = styled.div`
	align-items: center;
	display: grid;
	gap: 16px;
	grid-template-columns: 1fr 1fr;
	justify-content: center;
	margin-bottom: 24px;

	@media (max-width: ${BREAK._768}) {
		grid-template-columns: 1fr;
	}
`

export const AnswerItem = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	gap: 12px;
	height: max-content;
	min-height: 30px;

	& [type='radio'] {
		align-items: center;
		appearance: none;
		background-color: #fff;
		border-radius: 50%;
		border: 1px solid var(--COLOR_GREY_LIGHT);
		cursor: pointer;
		display: flex;
		flex-shrink: 0;
		height: 24px;
		justify-content: center;
		margin: 0;
		width: 24px;

		:checked {
			border: 1px solid var(--COLOR_PRIMARY);
			&::before {
				background-color: var(--COLOR_PRIMARY);
				border-radius: 50%;
				content: '';
				display: block;
				flex-shrink: 0;
				height: 16px;
				width: 16px;
			}
		}
	}

	& [type='checkbox'] {
		align-items: center;
		appearance: none;
		background-color: #fff;
		border-radius: 20%;
		border: 1px solid var(--COLOR_GREY_LIGHT);
		cursor: pointer;
		display: flex;
		flex-shrink: 0;
		height: 24px;
		justify-content: center;
		margin: 0;
		width: 24px;

		:checked {
			border: 1px solid var(--COLOR_PRIMARY);
			&::before {
				background-color: var(--COLOR_PRIMARY);
				border-radius: 20%;
				content: '';
				display: block;
				flex-shrink: 0;
				height: 16px;
				width: 16px;
			}
		}
	}
`

export const AnswerItemLabel = styled.label`
	${({correctAnswer}) =>
		correctAnswer && `color: var(--COLOR_GREEN);`}
`

export const InputField = styled.input`
	background-color: var(--COLOR_GREY_LIGHTER);
	border-radius: 8px;
	border: 1px var(--COLOR_GREY_LIGHT) solid;
	font-size: var(--TYPE_BODY);
	height: 44px;
	max-width: 220px;
	outline: 0;
	padding: 0px 20px;
	width: 100%;

	::placeholder {
		color: var(--COLOR_GREY);
	}
`

export const Button = styled.button`
	align-items: center;
	background-color: var(--COLOR_PRIMARY);
	border-radius: 8px;
	color: var(--COLOR_WHITE);
	display: flex;
	font-size: var(--TYPE_LABEL);
	font-weight: 500;
	justify-content: center;
	min-height: 44px;
	opacity: 1;
	padding: 10px 24px;

	&:hover {
		background-color: var(--COLOR_PRIMARY_DARK);
		color: var(--COLOR_PRIMARY_LIGHT);
	}

	&:active {
		background-color: var(--COLOR_PRIMARY_DARKER);
		color: var(--COLOR_PRIMARY_LIGHT);
	}

	${({outline}) =>
		outline &&
		`
				background-color: var(--COLOR_WHITE);
				border: 1px solid var(--COLOR_PRIMARY);
				color: var(--COLOR_PRIMARY);

				&:hover {
					opacity: 0.8;
					background-color: var(--COLOR_WHITE);
					color: var(--COLOR_PRIMARY);
				}
			`}
`

const typeSizesBreakpoint1 = css`
	--TYPE_H1: 36px;
	--TYPE_H2: 20px;
	--TYPE_BODY: 16px;
	--TYPE_LABEL: 16px;
`

const typeSizesBreakpoint2 = css`
	--TYPE_H1: 20px;
	--TYPE_H2: 16px;
	--TYPE_BODY: 14px;
	--TYPE_LABEL: 14px;
`

const SystemTheme = createGlobalStyle`
  :root {
	${typeSizesBreakpoint1}

	@media (max-width: 420px) {
		${typeSizesBreakpoint2}
	}

  }`

export default SystemTheme
