import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globalStyle.js';
import { lightTheme, darkTheme } from '../styles/themes.js';

import { ModeContext } from '../store/mode-context.jsx';

import {LABEL_MODE} from '../constans.js'

import Header from './Header.jsx';

const AppWrapper = () => {
    const modeCtx = useContext(ModeContext);
    const currentTheme = modeCtx.mode === LABEL_MODE.LIGHT ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyle />
            <Header />
        </ThemeProvider>
    );
};

export default AppWrapper;