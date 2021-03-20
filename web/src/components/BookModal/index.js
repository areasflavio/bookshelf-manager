import React, { useEffect, useState } from 'react';
import { ModalProvider } from 'styled-react-modal';

import PropTypes from 'prop-types';

import api from '../../services/api';

import {
  StyledModal,
  SpecialModalBackground,
  Content,
  InfoItem,
} from './styles';

function BookModal({ isOpen, onRequestClose, bookId, ...rest }) {
  const [book, setBook] = useState({});

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    async function getBook() {
      const response = await api.get(`/books/${bookId}`);
      setBook(response.data);
    }

    if (bookId) {
      getBook();
    }
  }, [bookId]);

  function afterOpen() {
    return new Promise((resolve) => {
      setOpacity(1);
      setTimeout(resolve, 100);
    });
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  return (
    <ModalProvider backgroundComponent={SpecialModalBackground}>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={onRequestClose}
        onEscapeKeydown={onRequestClose}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        opacity={opacity}
        backgroundProps={{ opacity }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      >
        <Content>
          <img
            className="modal"
            src={book.cover && book.cover.url}
            alt={book.title}
          />
          <section>
            <h1>{book.title}</h1>
            <span>
              by {/* {book.authors.map((author) => ( */}
              <strong>{book.authors}</strong>
              {/* ))} */}
            </span>

            <InfoItem>
              <strong>ISBN</strong>
              <small>{book.isbn}</small>
            </InfoItem>
            <InfoItem>
              <strong>Genre</strong>
              <small>{book.genre}</small>
            </InfoItem>
            <InfoItem>
              <strong>Synopsis</strong>
              <p>{book.synopsis}</p>
            </InfoItem>
            <InfoItem>
              <strong>Publishing company</strong>
              <small>{book.publishing_company}</small>
            </InfoItem>
            <InfoItem>
              <strong>Total pages</strong>
              <small>{book.pages}</small>
            </InfoItem>
          </section>
        </Content>
      </StyledModal>
    </ModalProvider>
  );
}

BookModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  bookId: PropTypes.number,
};

BookModal.defaultProps = {
  bookId: null,
};

export default BookModal;
