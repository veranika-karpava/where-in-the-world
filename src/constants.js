import { v4 as uuidv4 } from 'uuid';

export const LOGO_NAME = {
    TEXT: 'Where in the world',
};

export const LABEL_MODE = {
    LIGHT: 'light',
    DARK: 'dark',
};

export const LABEL_BUTTON_MODE = {
    LIGHT_MODE: 'Light Mode',
    DARK_DARL: 'Dark Mode',
};

export const LABEL_BUTTON = {
    CLOSE: "Close"
}

export const LABEL_SEARCH = {
    TEXT: 'Search for a country...',
};

export const LABEL_FILTER = {
    TEXT: 'Filter by Region',
};

export const LABEL_CARD = {
    POPULATION: 'Population:',
    REGION: 'Region:',
    CAPITAL: 'Capital:'
};

export const REGIONS = [
    {
        ID: uuidv4(),
        LABEL: 'All'
    },
    {
        ID: uuidv4(),
        LABEL: 'Africa'
    },
    {
        ID: uuidv4(),
        LABEL: 'Americas'
    },
    {
        ID: uuidv4(),
        LABEL: 'Asia'
    },
    {
        ID: uuidv4(),
        LABEL: 'Europe'
    },
    {
        ID: uuidv4(),
        LABEL: 'Oceania'
    },
]

export const LABEL_LOADING = {
    LOADING: 'Loading...',
    ERROR:'Oppps... Something went wrong.',
    EMPTY:'Opps... List is empty.'
};

export const URL_ALL = {
    TEXT: 'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags',
}