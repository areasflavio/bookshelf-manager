import React from 'react';
import PropTypes from 'prop-types';

import List from '../../../components/List';

import { Container } from '../styles';

function FavoriteReads({ books }) {
  return (
    <Container>
      <h1>Favorite Reads</h1>

      <List data={books} />
    </Container>
  );
}

FavoriteReads.propTypes = {
  books: PropTypes.arrayOf.isRequired,
};

export default FavoriteReads;
