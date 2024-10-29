import { createContext, useState } from 'react';

import { LABEL_MODE } from '../constans.js'

export const ModeContext = createContext({
    mode: '',
    toggleMode: () => {},
});

export default function ModeContextProvider ({ children }) {
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