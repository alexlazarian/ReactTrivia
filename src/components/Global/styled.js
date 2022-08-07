import styled from 'styled-components'

export const PageContainer = styled.article`
	background-color: var(--COLOR_WHITE);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	height: 100vh;
	padding: 60px 20px 0px 20px;
	max-width: 820px;
	margin: auto;
`

export const Logo = styled.img`
	width: 200px;
	margin-bottom: 20px;
`

export const HomepageContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 20px;
	text-align: center;
`

export const HomepageForm = styled.form`
	gap: 10px;
	display: flex;
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
	width: 100%;
	font-size: var(--TYPE_LABEL);

	&:hover {
		background-color: var(--COLOR_PRIMARY_DARK);
		color: var(--COLOR_PRIMARY_LIGHT);
	}

	&:active {
		background-color: var(--COLOR_PRIMARY_DARKER);
		color: var(--COLOR_PRIMARY_LIGHT);
	}
`
