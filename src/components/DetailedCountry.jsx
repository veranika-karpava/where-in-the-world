import styled from 'styled-components';
import { MdClose } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

import { spacePadding, breakpoints } from '../styles/stylesLib.js';
import { LABEL_BUTTON } from '../constants.js';
import { formattedDetailsCountry } from '../utils/utils.js';

import Button from './UI/Button';
import CountryContent from './UI/CountryContent.jsx';
import Borders from './UI/Borders.jsx';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${spacePadding.medium};
    width: 100%;
    height: 100%;
    padding: ${spacePadding.large};
    color: ${({ theme }) => theme.color};
`;

const CloseButton = styled(Button)`
    align-self: flex-start;
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

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${spacePadding.small};
    width: 100%;
    @media screen and (max-width: ${breakpoints.md}) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: ${spacePadding.extraLarge};
    }
`;

const ChildContainer = styled.div`
    width: 45%;
    @media screen and (max-width: ${breakpoints.md}) {
        width: 100%;
    }
`;

const StyledImage = styled.img`
    width: 100%;
    max-width: 320px;
    max-height: 220px;
    object-fit: cover;
    display: block;
    @media screen and (max-width: ${breakpoints.md}) {
        object-fit: fill;
        margin: 0 auto;
    }
`;

const Title = styled.h1`
    width: 100%;
    margin-bottom: ${spacePadding.medium};
    @media screen and (max-width: ${breakpoints.md}) {
        text-align: center;
    }
`;

const SubChildContainer = styled.ul`
    width: 100%;
`;

const DetailedCountry = ({country, onClose}) => {

    if (country.length === 0) return;

    const { flagCountry, nameCountry, detailsCountry, bordersCountry } = formattedDetailsCountry(country);

    return (
        <MainContainer>
            <CloseButton onClick={onClose} icon={MdClose}>{LABEL_BUTTON.CLOSE}</CloseButton>
            <ContentContainer>
                <ChildContainer >
                    <StyledImage 
                        src={flagCountry.url} 
                        alt={flagCountry.alt !== "" ? flagCountry.alt : nameCountry.name}
                    />
                </ChildContainer>
                <ChildContainer>
                    <Title>{nameCountry.name}</Title>
                    <SubChildContainer>
                        {detailsCountry.map((item) => <CountryContent key={uuidv4()} label={item.label} value={item.text}/>)}
                    </SubChildContainer>
                </ChildContainer>
            </ContentContainer>
            {bordersCountry.text.length > 0 && <Borders label={bordersCountry.label} values={bordersCountry .text}/>}
        </MainContainer>
    );
};

export default DetailedCountry;