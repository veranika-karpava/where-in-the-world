import { createContext, useState } from 'react';

import { LABEL_MODE } from '../constants.js';

const ModeContext = createContext({
    mode: '',
    toggleMode: () => {},
});

const ModeContextProvider =  ({ children }) => {
    const [ theme, setTheme ] = useState(LABEL_MODE.LIGHT);

    const handleToggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === LABEL_MODE.LIGHT ? LABEL_MODE.DARK : LABEL_MODE.LIGHT));
    };

    const ctxValue = {
        mode: theme,
        toggleMode: handleToggleTheme,
    };

    return <ModeContext.Provider value={ctxValue}>
            {children}
        </ModeContext.Provider>
};

export { ModeContext, ModeContextProvider };