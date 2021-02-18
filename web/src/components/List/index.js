import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function List({ data }) {
  return (
    <Container>
      {data.map((book) => (
        <li>
          <img
            src={
              book.cover
                ? book.cover
                : 'https://via.placeholder.com/120x180?text=No+Cover+Available'
            }
            alt={book.title}
          />
          <strong>{book.title}</strong>
          <small>{book.authors.map((author) => author)}</small>
        </li>
      ))}
    </Container>
  );
}

List.propTypes = {
  data: PropTypes.arrayOf({
    cover: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default List;
