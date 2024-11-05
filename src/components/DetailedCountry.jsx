import styled from 'styled-components';

import { spacePadding, breakpoints } from '../styles/stylesLib.js';
import { LABEL_BUTTON } from '../constants.js';

import Button from './UI/Button';

const MainCoontainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${spacePadding.extraLarge};
    width: 100%;
    height: 100%;
    padding: ${spacePadding.large};
`
const CloseButton = styled(Button)`
    align-self: flex-start;

        @media screen and (max-width: ${breakpoints.sm}) {
        span {
            display: unset;
        }
    }
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: ${spacePadding.small};
    width: 100%;
    height: 85%;
`
const DetailedContainer = styled.div`
    width: 45%;

    img {

    
    }

`


const DetailedCountry = ({country, onClose}) => {
    const coutryDetails = country[0];
    console.log(coutryDetails);
    return (
        <MainCoontainer>
            <CloseButton onClick={onClose}>{LABEL_BUTTON.CLOSE}</CloseButton>
            <ContentContainer>
                <DetailedContainer>
                    <img src={coutryDetails.flags?.png} alt={coutryDetails.flags?.png !== "" ? coutryDetails.flags?.alt : coutryDetails.name?.common }/>
                </DetailedContainer>
                <DetailedContainer>
                    Text
                </DetailedContainer>
            </ContentContainer>

        </MainCoontainer>
    );
};

export default DetailedCountry;