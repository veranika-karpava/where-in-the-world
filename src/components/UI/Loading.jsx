import styled, { keyframes } from 'styled-components';

import { fontSize } from '../../styles/stylesLib';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 20rem;
    position: relative;
`;

const LoadingText = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${fontSize.logo};
    color: ${({ theme }) => theme.color};
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  border: 8px solid ${({ theme }) => theme.color};
  border-top: 8px solid ${({ theme }) => theme.boxShadowColor};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 2s linear infinite;
`;

const Loading = ({ children, load }) => {
    return (
        <LoadingContainer>
            {load && <Loader />}
            {children && <LoadingText>{children}</LoadingText>}
        </LoadingContainer>
    );
};

export default Loading;