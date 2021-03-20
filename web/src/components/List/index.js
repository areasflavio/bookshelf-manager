import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import BookModal from '../BookModal';
// import history from '../../services/history';

function List({ data }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [bookModalId, setBookModalId] = useState(null);

  function openModal(bookId) {
    setBookModalId(bookId);

    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      {data.map((book) => (
        <li key={book.id}>
          <BookModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            bookId={bookModalId}
          />
          <img
            // onClick={() => history.push(`/books/form/${book.id}`)}
            onClick={() => openModal(book.id)}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
            tabIndex={0}
            onKeyPress={() => {}}
            src={
              book.cover
                ? book.cover.url
                : 'https://plchldr.co/i/120x180?bg=666666&text=No+Cover'
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
  data: [],
};

export default List;
