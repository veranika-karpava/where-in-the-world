import styled from 'styled-components';

import { FaHeart } from "react-icons/fa";
import { LABEL_FOOTER } from '../constants.js';
import { spacePadding } from '../styles/stylesLib.js';

const FooterContainer = styled.footer`
    width: 100%;
    padding: ${spacePadding.medium} ${spacePadding.extraLarge};
    background-color: ${({ theme }) => theme.backgroundComponent};
    box-shadow: 0.2rem 0.2rem 1rem ${({ theme }) => theme.boxShadowColor};
`
const FooterLabel = styled.p`
    width: 100%;
    text-align: center;
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLabel>
                {LABEL_FOOTER.LABEL_RIGHT}
                <FaHeart/>
                {LABEL_FOOTER.LABEL_LEFT}
            </FooterLabel>
        </FooterContainer>
    );
};

export default Footer;