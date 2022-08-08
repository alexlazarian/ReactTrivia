import styled from 'styled-components'

export const PageContainer = styled.article`
	background-color: var(--COLOR_WHITE);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 60px 20px 20px 20px;
	max-width: 820px;
	margin: auto;
`

export const Logo = styled.img`
	width: 200px;
	margin-bottom: 20px;
`

export const Badge = styled.img`
	width: 200px;
	margin-bottom: 20px;
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	margin-bottom: 20px;
	text-align: center;
`

export const HomepageForm = styled.form`
	gap: 10px;
	display: flex;
`

export const QuestionsHeader = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 16px;
`

export const QuestionsForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-between;
	margin-bottom: 20px;
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
	position: relative;
	align-self: flex-start;
	width: 100%;
`

export const InfoMessage = styled.p`
	position: absolute;
	bottom: 25px;
	font-size: var(--TYPE_LABEL);
	font-weight: 500;
	align-self: flex-start;
	margin-bottom: 24px;

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
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
	align-items: center;
	justify-content: center;
	margin-bottom: 24px;
`

export const AnswerItem = styled.div`
	display: flex;
	flex-direction: row;
	height: max-content;
	min-height: 30px;
	gap: 12px;
	align-items: center;

	& [type='radio'] {
		cursor: pointer;
		appearance: none;
		background-color: #fff;
		margin: 0;
		width: 24px;
		height: 24px;
		border: 1px solid var(--COLOR_GREY_LIGHT);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;

		:checked {
			border: 1px solid var(--COLOR_PRIMARY);
			&::before {
				flex-shrink: 0;
				content: '';
				display: block;
				width: 16px;
				height: 16px;
				border-radius: 50%;
				background-color: var(--COLOR_PRIMARY);
			}
		}
	}

	& [type='checkbox'] {
		cursor: pointer;
		appearance: none;
		background-color: #fff;
		margin: 0;
		width: 24px;
		height: 24px;
		border: 1px solid var(--COLOR_GREY_LIGHT);
		border-radius: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;

		:checked {
			border: 1px solid var(--COLOR_PRIMARY);
			&::before {
				flex-shrink: 0;
				content: '';
				display: block;
				width: 16px;
				height: 16px;
				border-radius: 20%;
				background-color: var(--COLOR_PRIMARY);
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
	border: 1px var(--COLOR_GREY_LIGHT) solid;
	outline: 0;
	border-radius: 8px;
	height: 44px;
	padding: 0px 20px;
	font-size: var(--TYPE_BODY);
	min-width: 220px;

	::placeholder {
		color: var(--COLOR_GREY);
	}
`

export const Button = styled.button`
	display: flex;
	background-color: var(--COLOR_PRIMARY);
	color: var(--COLOR_WHITE);
	padding: 10px 24px;
	border-radius: 8px;
	min-height: 44px;
	align-items: center;
	font-weight: 500;
	font-size: var(--TYPE_LABEL);
	opacity: 1;

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
