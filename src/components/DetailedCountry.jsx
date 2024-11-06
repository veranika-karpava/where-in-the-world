import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { spacePadding, breakpoints } from '../styles/stylesLib.js';
import { LABEL_BUTTON } from '../constants.js';
import { formattedDetailsCountry } from '../utils/utils.js';

import Button from './UI/Button';
import CountryContent from './UI/CountryContent.jsx';
import Borders from './UI/Borders.jsx';

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
    object-fit: cover;
    display: block;
`;

const CountryName = styled.h1`
    width: 100%;
    margin-bottom: ${spacePadding.medium};
`;

const DetailedContainerContent = styled.div`
    width: 100%;
`;

const DetailedCountry = ({country, onClose}) => {

    if (country.length === 0) return;

    const {flagInfo, nameInfo, firstInfo, borders} = formattedDetailsCountry(country)

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
                    <DetailedContainerContent>
                        {firstInfo.map((item) => <CountryContent key={uuidv4()} label={item.label} value={item.text}/>)}
                    </DetailedContainerContent>
                    {borders.text.length > 0 && <Borders label={borders.label} value={borders.text}/>}
                </DetailedContainer>
            </ContentContainer>

        </MainCoontainer>
    );
};

export default DetailedCountry;