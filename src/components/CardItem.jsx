
import styled from 'styled-components';

import { spacePadding } from '../styles/stylesLib.js';

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
    object-fit: cover;
`;

const ContentContainer = styled.div`
    height: 150px;
    width: 100%;
    padding: ${spacePadding.medium} ${spacePadding.extraLarge};
`
const StyledTitle = styled.h2`
    margin-bottom: ${spacePadding.medium};
`;

const StyledContentWrapper = styled.p`
    width: 100%;

`
const StyledTitleParam = styled.span`


`




const CardItem = ({ country }) => {

    console.log(country)
    
    return (
        <ListItem>
            <Image src={country.flag} alt={`${country.name} flag`}/>
            <ContentContainer>
                <StyledTitle>{country.name}</StyledTitle>
                <StyledContentWrapper>
                    <StyledTitleParam>Population: </StyledTitleParam>
                    {country.population}
                </StyledContentWrapper>
                <StyledContentWrapper>{`Region: ${country.region}`}</StyledContentWrapper>
                <StyledContentWrapper>{`Capital: ${country.capital}`}</StyledContentWrapper>
            </ContentContainer>
        </ListItem> 
    );
};

export default CardItem;