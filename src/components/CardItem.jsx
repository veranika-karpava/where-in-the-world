
import styled from 'styled-components';

import { spacePadding, fontWeight } from '../styles/stylesLib.js';
import { LABEL_CARD } from '../constants.js';
import { formattedPopulation } from '../utils/utils.js';

const ListItem = styled.li`
    width: 15%;
    height: 300px;
    min-width: 300px;
    list-style: none;
    background-color: ${({ theme }) => theme.backgroundComponent};
    border-radius: 4px;
    box-shadow: 0.2rem 0.2rem 1rem ${({ theme }) => theme.boxShadowColor};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: transform 0.3s ease;
    margin: ${spacePadding.extraLarge};

    &:hover {
        transform: translateY(-5px);
    }
`;

const Image = styled.img`
    height: 150px;
    width: 100%;
    object-fit: fill;
`;

const ContentContainer = styled.div`
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:flex-start;
    flex-direction: column;
    padding: ${spacePadding.medium} ${spacePadding.extraLarge};
`;

const StyledTitle = styled.h2`
    margin-bottom: ${spacePadding.medium};
`;

const StyledContentWrapper = styled.p`
    width: 100%;
`;

const StyledTitleParam = styled.span`
   font-weight: ${fontWeight.extraBold};
`;

const CardItem = ({ country }) => {

    const handleOpenModal = () =>{
        console.log("It's open modal")
    };
    
    return (
        <ListItem onClick={handleOpenModal}>
            <Image src={country.flags?.png} alt={country.flags?.alt}/>
            <ContentContainer>
                <StyledTitle>{country.name?.common}</StyledTitle>
                <StyledContentWrapper>
                    <StyledTitleParam>{LABEL_CARD.POPULATION} </StyledTitleParam>
                    {formattedPopulation(country?.population)}
                </StyledContentWrapper>
                <StyledContentWrapper>
                    <StyledTitleParam>{LABEL_CARD.REGION} </StyledTitleParam>
                    {country.region}
                </StyledContentWrapper>
                <StyledContentWrapper>
                    <StyledTitleParam>{LABEL_CARD.CAPITAL} </StyledTitleParam>
                    {country.capital[0]}
                </StyledContentWrapper>
            </ContentContainer>
        </ListItem> 
    );
};

export default CardItem;