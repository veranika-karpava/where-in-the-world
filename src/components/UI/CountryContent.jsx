import styled from 'styled-components';

import { fontWeight, spacePadding } from '../../styles/stylesLib.js';

const StyledContentWrapper = styled.li`
    width: 100%;
    padding-bottom: ${spacePadding.small};
    list-style: none;
`;

const StyledTitle= styled.span`
   font-weight: ${fontWeight.extraBold};
`;

const StyledValue = styled.span`
    font-weight: ${fontWeight.textWeigth};
`;

const CountryContent = ({label, value}) => {
    return (
        <StyledContentWrapper>
            <StyledTitle>{label}</StyledTitle>
            <StyledValue>{value}</StyledValue>
        </StyledContentWrapper>
    );
};

export default CountryContent;