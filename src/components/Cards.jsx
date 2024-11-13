import { useState } from 'react';
import styled from 'styled-components';
import { MdClose } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

import { breakpoints, topSpace, spacePadding } from '../styles/stylesLib.js';

import { LABEL_LOADING, LABEL_BUTTON } from '../constants.js';
import { useHttp } from '../hooks/useHttp.js';


import Loading from './UI/Loading.jsx';
import Modal from './UI/Modal.jsx';
import Button from './UI/Button';
import DetailedCountry from './DetailedCountry.jsx';
import CardItem from './CardItem.jsx';

const List = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: ${topSpace.regular};

    @media screen and (max-width: ${breakpoints.sm_md}) {
    margin-top: ${topSpace.small};
  }
`;

const CloseButton = styled(Button)`
    align-self: flex-start;
    margin-bottom: ${spacePadding.extraLarge};
    @media screen and (max-width: ${breakpoints.md}) {
        padding: ${spacePadding.small};
        align-self: flex-end;

        .button-icon {
            margin-right: 0;
        }

        span {
            display: none;
        }
    }
`;

const Cards = ({ countries }) => {
    const [ isOpenModal, setIsOpenModal ] = useState(false);
    const [ url, setUrl ] = useState(null);

    const { isLoading, error, fetchedData: detailedCountry } = useHttp(url, []);

    const handleOnSelect = (name) =>{
        const updatedUrl = `https://restcountries.com/v3.1/name/${name.toLowerCase().trim()}?fields=name,tld,capital,region,subregion,languages,borders,population,flags,currencies`
        setUrl(updatedUrl);
        setIsOpenModal(true);
    };

    const handleCloseModal = () => {
        setIsOpenModal(false);
    };

    if(countries.length === 0) {
        return <Loading>{LABEL_LOADING.EMPTY}</Loading>
    }

    return (
        <>
            <Modal open={isOpenModal}>
                <CloseButton onClick={handleCloseModal} icon={MdClose}>{LABEL_BUTTON.CLOSE}</CloseButton>
                {isLoading && <Loading load />}
                {error && <Loading>{LABEL_LOADING.ERROR}</Loading>}
                {detailedCountry.length !== 0 && <DetailedCountry country={detailedCountry} onClose={handleCloseModal}/>} 
            </Modal>
            <List>
                {countries.map((country) => <CardItem key={uuidv4()} country={country} onSelect={handleOnSelect}/>)}
            </List>
        </>

    );
};

export default Cards;