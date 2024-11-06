import { LABEL_CARD } from "../constants";
import ISO3166 from 'iso-3166-1';

export const formattedPopulation = (num) => {
    return new Intl.NumberFormat().format(num);
};

const getFirstValue = (objectKey, property) => {
    const firstKey = Object.keys(objectKey)[0];
    return firstKey ? objectKey[firstKey][property] : null;
};

const convertCountryCodesToNames = (codesCountries) => {
    return codesCountries.map(codeCountry => ISO3166.whereAlpha3(codeCountry).country || codeCountry);
};

export const formattedDetailsCountry = (detailsCountry) => {
    const country = detailsCountry[0];

    const flagInfo = {
        url: country.flags?.svg,
        alt: country.flags?.alt
    };

    const nameInfo = {
        name: country.name?.common
    };

    const firstInfo = [
        {
            label: LABEL_CARD.NATIVE_NAME,
            text: getFirstValue(country.name?.nativeName, 'common'),
        },
        {
            label: LABEL_CARD.POPULATION,
            text: formattedPopulation(country.population),
        },
        {
            label: LABEL_CARD.REGION,
            text: country.region,
        },
        {
            label: LABEL_CARD.SUB_REGION,
            text: country.subregion,
        },
        {
            label: LABEL_CARD.CAPITAL,
            text: country.capital[0],
        },
        {
            label: LABEL_CARD.TOP_LEVEL_DOMAIN,
            text: country.tld[0],
        },
        {
            label: LABEL_CARD.CURRENCIES,
            text: getFirstValue(country.currencies, 'name'),
        },
        {
            label: LABEL_CARD.LANGUAGES,
            text: Object.values(country.languages).join(', '),
        }
    ];

    const borders = {
        label: LABEL_CARD.BORDER_COUNTRIES,
        text: convertCountryCodesToNames(country.borders),
    };

    const data = {
        flagInfo,
        nameInfo,
        firstInfo,
        borders
    };


    return data;
};
