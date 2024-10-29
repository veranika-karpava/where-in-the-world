import { useContext } from 'react';
import styled from 'styled-components';

import { spacePadding, breakpoints, fontSize  } from '../styles/stylesLib.js';


import { ModeContext } from '../store/mode-context.jsx';
import { LOGO_NAME, LABEL_MODE,  LABEL_BUTTON_MODE } from '../constans.js'

const StyledHeader = styled.header`
    padding: ${spacePadding.medium} ${spacePadding.extraLarge};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundComponent};
    box-shadow: 0.2rem 0.2rem 1rem ${({ theme }) => theme.boxShadowColor};

    @media screen and (max-width: ${breakpoints.sm}) {
        padding: ${spacePadding.medium};
        flex-direction: column;
        gap: ${spacePadding.small};
    }
`
const Logo = styled.h1`
    font-size: ${fontSize.logo};
    @media screen and (max-width: ${breakpoints.sm}) {
        font-size: ${fontSize.secondary};
    }
`
const Header = () => {
    const modeCtx = useContext(ModeContext);

    return (
        <StyledHeader>
            <Logo>{LOGO_NAME.TEXT}</Logo>
            <button onClick={modeCtx.toggleMode}>{modeCtx.mode === LABEL_MODE.LIGHT ? LABEL_BUTTON_MODE.LIGHT_MODE : LABEL_BUTTON_MODE.DARK_DARL}</button>
        </StyledHeader>
    );
};

export default Header;