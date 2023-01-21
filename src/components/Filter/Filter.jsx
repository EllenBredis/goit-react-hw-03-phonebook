import PropTypes from 'prop-types';
import {FilterWrapper,FilterLabel, FilterInput} from './Filter.styled'

const Filter=({ filter, onChange })=> {
  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filterInput" >
        Find contacts by name
        <FilterInput
          type="text"
          id="filterInput"
          onChange={onChange}
          value={filter}
        />
      </FilterLabel>
    </FilterWrapper>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;