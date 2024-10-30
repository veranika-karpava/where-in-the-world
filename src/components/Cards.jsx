
import styled from 'styled-components';

import { getRandomNumber } from '../utils/utils.js';

import CardItem from './CardItem.jsx'


const List = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`


const Cards = ({ countries }) => {

    if(countries.length === 0){
        return <p>No country found</p>
    }

    return (
        <List>
            {countries.map((country) => <CardItem key={getRandomNumber(100000)} country={country} />)}
        </List>
    );
};

export default Cards;