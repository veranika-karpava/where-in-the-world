import styled from 'styled-components';

import { fontWeight, spacePadding } from '../../styles/stylesLib.js';

const StyledContentWrapper = styled.p`
    width: 100%;
    padding-bottom: ${spacePadding.small};
`;

const StyledTitleParam = styled.span`
   font-weight: ${fontWeight.extraBold};
`;

const CountryContent = ({label, value}) => {
    return (
        <StyledContentWrapper>
            <StyledTitleParam>{label}</StyledTitleParam>
            {value}
        </StyledContentWrapper>
    );
};

export default CountryContent;