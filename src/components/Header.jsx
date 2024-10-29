import { useContext } from 'react';
import styled from 'styled-components';

import { spacePadding } from '../styles/stylesLib.js';

import { ModeContext } from '../store/mode-context.jsx';

const StyledHeader = styled.header`
    padding: ${spacePadding.medium} ${spacePadding.extraLarge};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundHeader};



`



const Header = () => {
    const modeCtx = useContext(ModeContext);

    return (
        <StyledHeader>
            <h1>Where in the world</h1>
            <button onClick={modeCtx.toggleMode}>{modeCtx.mode === 'light' ? 'Light mode' : 'Dark mode'}</button>
        </StyledHeader>
    );
};

export default Header;