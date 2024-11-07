import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { fontWeight, spacePadding, fontSize } from '../../styles/stylesLib.js';

const BordersContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${spacePadding.small};
`;

const StyledTitle = styled.p`
   font-weight: ${fontWeight.extraBold};
   font-size: ${fontSize.primary};
   width: 20%;
`;

const BordersList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
     gap: ${spacePadding.small};
     width: 80%;
`;

const BorderItem = styled.li`
    list-style: none;
    padding:  ${spacePadding.small} ${spacePadding.medium};
    border: none;
    border-radius: 4px;
    box-shadow: 0.2rem 0.2rem 1rem ${({ theme }) => theme.boxShadowColor};
`;

const Borders = ({label, values}) => {
    return (
        <BordersContainer>
            <StyledTitle>{label}</StyledTitle>
            <BordersList>
                {values.map(value => <BorderItem key={uuidv4()}>{value}</BorderItem>)}
            </BordersList>
        </BordersContainer>
    );
};

export default Borders;