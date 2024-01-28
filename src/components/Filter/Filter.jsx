import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';

const Filter = ({ value, onCangeFilter }) => (
  <FilterLabel>
    Find contacts by name
    <FilterInput type="text" value={value} onChange={onCangeFilter} required />
  </FilterLabel>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onCangeFilter: PropTypes.func,
};

export default Filter;
