import styled from 'styled-components';

import { spacePadding, fontSize, breakpoints  } from '../../styles/stylesLib';

const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    padding:  ${spacePadding.small} ${spacePadding.medium};
    font-size: ${fontSize.secondary};
    border: none;
    border-radius: 4px;
    box-shadow: 0.2rem 0.2rem 1rem ${({ theme }) => theme.boxShadowColor};
    background-color: ${({ theme }) => theme.backgroundComponent};
    color: ${({ theme }) => theme.color};
    transition: background-color 0.3s ease;
    outline: none;

    &:hover {
        background-color: ${({ theme }) => theme.background};
    }

    .button-icon {
        margin-right: ${spacePadding.small};
        font-size: ${fontSize.primary};
    }
    
    @media screen and (max-width: ${breakpoints.sm}) {
        padding: ${spacePadding.small};

        .button-icon {
            margin-right: 0;
        }

        span {
            display: none;
        }
    }
`

const Button = ({ icon: Icon, children , type='button', onClick, ...props}) => {
    return (
        <StyledButton type={type} onClick={onClick} {...props}>
            {Icon && <Icon className="button-icon" />}
            <span>{children}</span>
        </StyledButton>
    );
};

export default Button;