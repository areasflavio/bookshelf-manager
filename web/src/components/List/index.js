import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function List({ children }) {
  return <Container>{children}</Container>;
}

List.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default List;
