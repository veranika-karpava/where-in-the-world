
import styled from 'styled-components';

import { LABEL_SEARCH } from '../constants.js';

import { spacePadding, breakpoints} from '../styles/stylesLib.js';

import SearchCountry from './SearchCountry.jsx';
import FilterByRegion from "./FilterByRegion.jsx";

const NavContainer = styled.div`
  position: fixed;
  top: 34px;
  left: 0;
  z-index: 999;
  padding: ${spacePadding.medium} ${spacePadding.extraLarge};
  margin-top: ${spacePadding.extraLarge};
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${spacePadding.medium};
  background-color: ${({ theme }) => theme.background};

  @media screen and (max-width: ${breakpoints.sm}) {
    margin-top: ${spacePadding.medium};
    padding: ${spacePadding.medium};
  }
`

const Navigation = ({ onFilter, ...props }) => {
  
    return (
        <NavContainer>
          <SearchCountry type='text' placeholder={LABEL_SEARCH.TEXT} {...props}/>
          <FilterByRegion onFilter={onFilter}/>
        </NavContainer>
    );
};

export default Navigation;