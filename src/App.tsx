import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import MainContent from "./components/common/MainContent";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { Home } from "./pages/Home";

const StyledApp = styled.div`
	text-align: center;
	background-color: ${({ theme }) => theme.colors.secondary};
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<StyledApp>
				<Home />
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
