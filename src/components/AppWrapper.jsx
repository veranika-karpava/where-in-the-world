import { useContext, useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globalStyle.js';
import { lightTheme, darkTheme } from '../styles/themes.js';

import { ModeContext } from '../store/mode-context.jsx';
import { useHttp } from '../hooks/useHttp.js';
import { LABEL_MODE, LABEL_LOADING, REGIONS, URL_ALL } from '../constants.js';

import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import Cards from './Cards.jsx';
import Loading from './UI/Loading.jsx';

const URL = URL_ALL.TEXT;

const AppWrapper = () => {
    const modeCtx = useContext(ModeContext);
    const currentTheme = modeCtx.mode === LABEL_MODE.LIGHT ? lightTheme : darkTheme;

    const { isLoading, error, fetchedData: allCountries } = useHttp(URL, []);
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ filterTerm, setFilterTerm ] = useState(REGIONS[0].LABEL);

    const handleOnSearch = (term) => setSearchTerm(term);
    const handleOnFilter = (term) => setFilterTerm(term);

    const filterCountries = useMemo(() => { 
        if (!allCountries) return [];

        let filtered = [...allCountries];

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(country => country.name?.common?.toLowerCase().includes(searchTerm.toLowerCase().trim())
            );
        };

        // Filter by selected region
        if (filterTerm && filterTerm !== REGIONS[0].LABEL) {
            filtered = filtered.filter(country => 
                country.region?.toLowerCase() === filterTerm.toLowerCase()
            );
        }
        
        return filtered;

    }, [allCountries, searchTerm, filterTerm]);

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyle />
            <Header />
            <Navigation 
                onSearch={handleOnSearch} 
                onFilter={handleOnFilter} 
                searchTerm={searchTerm}
            />
            {isLoading && <Loading>{LABEL_LOADING.LOADING}</Loading>}
            {error && <Loading>{LABEL_LOADING.ERROR}</Loading>}
            <Cards countries={filterCountries}/>
        </ThemeProvider>
    );
};

export default AppWrapper;