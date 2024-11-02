import styled from 'styled-components';

import { spacePadding } from '../../styles/stylesLib';

const LoadingContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 ${spacePadding.extraLarge};
    margin: ${spacePadding.extraLarge} 0;
`;

const LoadingText = styled.p`
    width: 100%;
    height: 100vh; 
    display: flex; 
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0.2rem 0.2rem 1rem ${({ theme }) => theme.boxShadowColor};
    background-color: ${({ theme }) => theme.backgroundComponent};
    color: ${({ theme }) => theme.color};
`;

const Loading = ({ children }) => {
    return (
        <LoadingContainer>
            <LoadingText>{children}</LoadingText>
        </LoadingContainer>
    );
};

export default Loading;