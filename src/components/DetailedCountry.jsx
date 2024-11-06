import styled from 'styled-components';

import { spacePadding, breakpoints, fontWeight } from '../styles/stylesLib.js';
import { LABEL_BUTTON, LABEL_CARD } from '../constants.js';
import { formattedDetailsCountry } from '../utils/utils.js';

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
    align-items: flex-start;
    gap: ${spacePadding.small};
    width: 100%;
    height: 85%;

    @media screen and (max-width: ${breakpoints.md}) {
        flex-direction: column;
        justify-content: flex-start;
        gap: ${spacePadding.extraLarge};
    }
`
const DetailedContainer = styled.div`
    width: 45%;

    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: 80%;
    object-fit: cover;
    display: block;
`;

const CountryName = styled.h1`
    width: 100%;
    margin-bottom: ${spacePadding.medium};
`;

const DetailedCountry = ({country, onClose}) => {
    const {flagInfo, nameInfo, firstInfo, secondInfo, borders} = formattedDetailsCountry(country)

console.log(flagInfo);
console.log(nameInfo);
console.log(firstInfo);
console.log(secondInfo);

console.log(borders)

    return (
        <MainCoontainer>
            <CloseButton onClick={onClose}>{LABEL_BUTTON.CLOSE}</CloseButton>
            <ContentContainer>
                <DetailedContainer>
                    <StyledImage 
                        src={flagInfo.url} 
                        alt={flagInfo.alt !== "" ? flagInfo.alt: nameInfo.name}
                    />
                </DetailedContainer>
                <DetailedContainer>
                    <CountryName>{nameInfo.name}</CountryName>

                </DetailedContainer>
            </ContentContainer>

        </MainCoontainer>
    );
};

export default DetailedCountry;