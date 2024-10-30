import { useState } from 'react';
import styled from 'styled-components';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { spacePadding, fontSize } from '../styles/stylesLib.js';

import { REGIONS, LABEL_FILTER } from '../constans';

const DropdownContainer = styled.div `
    position: relative;
    width: 20%;
    min-width: 164px;
    height: 54px;
`
const Selected = styled.div`
    font-family: inherit;
    font-size:  ${fontSize.secondary};
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${spacePadding.medium};
    border: none;
    border-radius: 4px;
    box-shadow: 0.2rem 0.2rem 1rem ${({ theme }) => theme.boxShadowColor};
    background-color: ${({ theme }) => theme.backgroundComponent};
    color: ${({ theme }) => theme.color};
    transition: background-color 0.3s ease;
    cursor: pointer;

    .icon {
        color: ${({ theme }) => theme.color};
        font-size: ${fontSize.secondary};
    }
`
const DropdownList = styled.ul`
    font-family: inherit;
    font-size:  ${fontSize.secondary};
    position: absolute;
    top: 110%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.backgroundComponent};
    border-radius: 4px;
    box-shadow: 0.2rem 0.2rem 1rem ${({ theme }) => theme.boxShadowColor};
    z-index: 1000;
    list-style: none;
    max-height: 200px;
    padding: ${spacePadding.medium};
`;

const DropdownItem = styled.li`
    cursor: pointer;
    margin-bottom: ${spacePadding.small};
    color: ${({ theme }) => theme.color}; // Text color
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ theme }) => theme.hoverBackground}; // Change background on hover
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

const FilterByRegion = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const iconMap = {
        true: <FaChevronUp className="icon" />,
        false: <FaChevronDown className="icon" />,
    };

    return (
        <DropdownContainer>
            <Selected onClick={toggleDropdown}>
                {selectedOption ? selectedOption.LABEL : LABEL_FILTER.TEXT}
                {iconMap[isOpen]}
            </Selected>
            {isOpen && (
                <DropdownList>
                    {REGIONS.map((region) => (
                        <DropdownItem key={region.ID} onClick={() => handleOptionClick(region)}>
                            {region.LABEL}
                        </DropdownItem>
                    ))}
                </DropdownList>
            )}
        </DropdownContainer>
    );
};

export default FilterByRegion;