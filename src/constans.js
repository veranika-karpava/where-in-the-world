import { getRandomNumber } from "./utils/utils";

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

export const REGIONS = [
    {
        ID: getRandomNumber(100),
        LABEL: 'All'
    },
    {
        ID: getRandomNumber(100),
        LABEL: 'Africa'
    },
    {
        ID: getRandomNumber(100),
        LABEL: 'America'
    },
    {
        ID: getRandomNumber(100),
        LABEL: 'Asia'
    },
    {
        ID: getRandomNumber(100),
        LABEL: 'Europe'
    },
    {
        ID: getRandomNumber(100),
        LABEL: 'Oceania'
    },
]