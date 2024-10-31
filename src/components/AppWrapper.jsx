import React, { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globalStyle.js';
import { lightTheme, darkTheme } from '../styles/themes.js';

import { ModeContext } from '../store/mode-context.jsx';

import { LABEL_MODE } from '../constants.js';
import { DUMMY_DATA } from '../data/data.js';


import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import Cards from './Cards.jsx';

const AppWrapper = () => {
    const modeCtx = useContext(ModeContext);
    const currentTheme = modeCtx.mode === LABEL_MODE.LIGHT ? lightTheme : darkTheme;

    const [countries, setCountries] = useState(DUMMY_DATA);
    console.log("It render")

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyle />
            <Header />
            <Navigation />
            <Cards countries={countries}/>
        </ThemeProvider>
    );
};

export default AppWrapper;