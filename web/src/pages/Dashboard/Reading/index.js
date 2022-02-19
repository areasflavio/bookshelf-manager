import React from 'react';
import PropTypes from 'prop-types';

import List from '../../../components/List';

import { Container } from '../styles';

function Reading({ books }) {
  return (
    <Container>
      <h1>Reading</h1>

      <List data={books} />
    </Container>
  );
}

Reading.propTypes = {
  books: PropTypes.arrayOf.isRequired,
};

export default Reading;
