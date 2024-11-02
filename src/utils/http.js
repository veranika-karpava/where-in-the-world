export const fetchCountries = async () => {
    const response  = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags');
    const resData = await response.json();

    if(!response.ok){ 
        throw new Error('Failed to fetch countries');
    }; 
    
    return resData;
};

export const fetchCountry = async (name) => {
    const response  = await fetch(`https://restcountries.com/v3.1/name/${name}?fields=fields=name,tld,capital,region,subregion,languages,borders,populaton,flags,currencies`);
    const resData = await response.json();

    if(!response.ok){ 
        throw new Error('Failed to fetch country');
    }; 

    return resData;
};