import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../styles';

function Categories({ genres }) {
  return (
    <Container>
      <h1>Categories</h1>

      <ul>
        {genres.map((genre) => (
          <li key={genre}>
            <button type="button" style={{ cursor: 'default' }}>
              {genre}
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

Categories.propTypes = {
  genres: PropTypes.arrayOf.isRequired,
};

export default Categories;
