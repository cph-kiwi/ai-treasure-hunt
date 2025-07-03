import { ReactNode } from "react";
import styled from "styled-components";

const StyledMainContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 3px solid ${({ theme }) => theme.colors.text};
	border-radius: 1rem;
	padding: 3rem 1rem;
	background-color: ${({ theme }) => theme.colors.background};
	gap: 0.8rem;
`;

interface MainContentProps {
	children: ReactNode;
}

const MainContent = ({ children }: MainContentProps) => {
	return <StyledMainContent>{children}</StyledMainContent>;
};

export default MainContent;
