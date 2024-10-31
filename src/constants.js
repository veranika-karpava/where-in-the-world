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
        LABEL: 'America'
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