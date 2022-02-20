import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ModalProvider } from 'styled-react-modal';

import PropTypes from 'prop-types';

import api from '../../services/api';
import history from '../../services/history';
import { getBooksRequest } from '../../store/modules/books/actions';

import {
  StyledModal,
  SpecialModalBackground,
  Content,
  InfoItem,
} from './styles';

function BookModal({ isOpen, onRequestClose, bookId, ...rest }) {
  const dispatch = useDispatch();

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

  async function handleSetIsReading(is_reading) {
    const response = await api.put(`/books/${bookId}/reading`, {
      is_reading: !is_reading,
    });

    setBook({
      ...book,
      ...response.data,
    });

    dispatch(getBooksRequest());
  }

  async function handleSetFavoriteRead(favorite_read) {
    const response = await api.put(`/books/${bookId}/favorite`, {
      favorite_read: !favorite_read,
    });

    setBook({
      ...book,
      ...response.data,
    });

    dispatch(getBooksRequest());
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
        {...rest}
      >
        <Content>
          <header>
            <h1>{book.title}</h1>
            <span>
              <h2>{book.authors}</h2>
            </span>
          </header>

          <main>
            <section>
              <img
                className="modal"
                src={book.cover && book.cover.url}
                alt={book.title}
              />

              <button
                type="button"
                onClick={() => history.push(`/books/form/${book.id}`)}
              >
                Edit book
              </button>
              <button
                type="button"
                className={book.is_reading ? '' : 'outline'}
                onClick={() => handleSetIsReading(book.is_reading)}
              >
                Current reading
              </button>
              <button
                type="button"
                className={book.favorite_read ? '' : 'outline'}
                onClick={() => handleSetFavoriteRead(book.favorite_read)}
              >
                Favorite read
              </button>
            </section>

            <section>
              <InfoItem>
                <h2>ISBN</h2>
                <p>{book.isbn}</p>
              </InfoItem>
              <InfoItem>
                <h2>Genre</h2>
                <p>{book.genre}</p>
              </InfoItem>
              <InfoItem>
                <h2>Publishing company</h2>
                <p>{book.publishing_company}</p>
              </InfoItem>
              <InfoItem>
                <h2>Total pages</h2>
                <p>{book.pages}</p>
              </InfoItem>
              <InfoItem>
                <h2>Synopsis</h2>
                <p>{book.synopsis}</p>
              </InfoItem>
            </section>
          </main>
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
