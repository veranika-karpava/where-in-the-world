import { createContext, useState } from 'react';

export const ModeContext = createContext({
    mode: '',
    toggleMode: () => {},
});

export default function ModeContextProvider ({ children }) {
    const [ theme, setTheme ] = useState('light');

    const handleToggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark': 'light'));
    };

    const ctxValue = {
        mode: theme,
        toggleMode: handleToggleTheme,
    };

    return <ModeContext.Provider value={ctxValue}>
            {children}
        </ModeContext.Provider>
};