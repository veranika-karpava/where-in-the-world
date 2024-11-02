
import { useState } from 'react';
import styled from 'styled-components';

import { MdSearch } from "react-icons/md";

import { spacePadding, fontSize, breakpoints } from '../styles/stylesLib.js';

const SearchWrapper = styled.div`
    width: 30%;
    min-width: 275px;
    display: flex;
    flex-wrap: nowrap;
    padding: ${spacePadding.medium};
    border: none;
    border-radius: 4px;
    box-shadow: 0.2rem 0.2rem 1rem ${({ theme }) => theme.boxShadowColor};
    background-color: ${({ theme }) => theme.backgroundComponent};
    color: ${({ theme }) => theme.color};
    transition: background-color 0.3s ease;

    @media screen and (max-width: ${breakpoints.sm}) {
        width: 100%;
    }
`
const SearcIcon = styled(MdSearch)`
    margin: 0 10px;
    color: ${({ theme }) => theme.searchColor};
    font-size: ${fontSize.logo};
`

const SearcInput = styled.input `
    border: none;
    font-size:  ${fontSize.primary};
    outline: none;
    color: ${({ theme }) => theme.color};
    background-color: transparent;
    font-family: inherit;

    &::placeholder {
        color: ${({ theme }) => theme.searchColor};
        font-size:  ${fontSize.secondary};
        font-family: inherit;
    }
`

const SearchCountry = ({ onSearch, searchTerm,  ...props }) => {

    const handleSearchChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <SearchWrapper>
            <SearcIcon/>
            <SearcInput value={searchTerm} onChange={handleSearchChange} {...props} />
        </SearchWrapper>
    );
};

export default SearchCountry;