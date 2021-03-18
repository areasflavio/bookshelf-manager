import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import history from '../../services/history';

function List({ data }) {
  return (
    <Container>
      {data.map((book) => (
        <li key={book.id}>
          <img
            // eslint-disable-next-line no-console
            onClick={() => history.push(`/books/form/${book.id}`)}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
            tabIndex={0}
            onKeyPress={() => {}}
            src={
              book.cover
                ? book.cover.url
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
    book: PropTypes.shape({
      id: PropTypes.number,
      cover: PropTypes.shape({
        url: PropTypes.string,
      }),
      title: PropTypes.string,
      author: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};

List.defaultProps = {
  data: {},
};

export default List;
