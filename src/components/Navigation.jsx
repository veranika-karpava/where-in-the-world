
import styled from 'styled-components';

import { LABEL_SEARCH } from '../constans.js';

import { spacePadding, breakpoints} from '../styles/stylesLib.js';

import SearchCountry from './SearchCountry.jsx';
import FilterByRegion from "./FilterByRegion.jsx";

const NavContainer = styled.div`
  padding: ${spacePadding.medium} ${spacePadding.extraLarge};
  margin-top: ${spacePadding.extraLarge};
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${spacePadding.medium};

  @media screen and (max-width: ${breakpoints.sm}) {
    margin-top: ${spacePadding.medium};
    padding: ${spacePadding.medium};
  }
`

const Navigation = () => {
  
    return (
        <NavContainer>
          <SearchCountry type='text' placeholder={LABEL_SEARCH.TEXT}/>
          <FilterByRegion />
        </NavContainer>
    );
};

export default Navigation;