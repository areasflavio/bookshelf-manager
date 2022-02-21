import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { Container } from './styles';
import BookModal from '../BookModal';

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
      <BookModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        bookId={bookModalId}
      />

      {data.map((book) => (
        <motion.li
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          exit={{ opacity: 0, scale: 0.8 }}
          layout
          key={book.id}
        >
          <img
            onClick={() => openModal(book.id)}
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
        </motion.li>
      ))}
    </Container>
  );
}

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      isbn: PropTypes.string,
      title: PropTypes.string,
      synopsis: PropTypes.string,
      genre: PropTypes.string,
      publishing_company: PropTypes.string,
      pages: PropTypes.string,
      authors: PropTypes.arrayOf(PropTypes.string),
      cover: PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
        path: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default List;
