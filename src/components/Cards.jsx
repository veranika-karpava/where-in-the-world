import { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { LABEL_LOADING } from '../constants.js';
import { fetchCountry } from '../utils/http.js';

import Loading from './UI/Loading.jsx';
import Modal from './UI/Modal.jsx';
import DetailedCountry from './DetailedCountry.jsx';
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
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [detailedCountry, setDetailedCountry] = useState([]);




    const handleOnSelect = async (name) =>{
        setIsOpenModal(true);

        try {
            const response = await fetchCountry(name);
            setDetailedCountry(response);
        } catch(error) {
            console.log(error)
        }
    };

    const handleCloseModal = () => {
        setIsOpenModal(false);
        setDetailedCountry([]);
    }

    if(countries.length === 0) {
        return <Loading>{LABEL_LOADING.EMPTY}</Loading>
    }

    return (
        <>
            <Modal open={isOpenModal}>
               <DetailedCountry country={detailedCountry} onClose={handleCloseModal}/>
            </Modal>
            <List>
                {countries.map((country) => <CardItem key={uuidv4()} country={country} onSelect={handleOnSelect}/>)}
            </List>
        </>

    );
};

export default Cards;