import React from 'react';

const DetailedCountry = ({country}) => {
    console.log(country);
    return (
        <div>
            <div>
                <img src={country.flags?.png} alt={country.flags?.png !== "" ? country.flags?.alt : country.name?.common }/>
            </div>
            <div></div>
            
        </div>
    );
};

export default DetailedCountry;