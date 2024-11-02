import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { LABEL_LOADING } from '../constants.js';

import Loading from './UI/Loading.jsx';
import CardItem from './CardItem.jsx';

const List = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Cards = ({ countries }) => {

    if(countries.length === 0) {
        return <Loading>{LABEL_LOADING.EMPTY}</Loading>
    }

    return (
        <List>
            {countries.map((country) => <CardItem key={uuidv4()} country={country} />)}
        </List>
    );
};

export default Cards;