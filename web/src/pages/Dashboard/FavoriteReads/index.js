import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import List from '../../../components/List';

import { Container } from '../styles';

function FavoriteBooks({ books, genres }) {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [currentGenre, setCurrentGenre] = useState('All');

  useEffect(() => {
    if (currentGenre === 'All') {
      setFilteredBooks(books);
      return;
    }

    const filtered = books.filter((book) => book.genre.includes(currentGenre));
    setFilteredBooks(filtered);
  }, [books, currentGenre]);

  async function handleFilterByGenre(genre) {
    setCurrentGenre(genre);
  }

  return (
    <Container>
      <h1>Favorite Books</h1>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>
            <button
              className={currentGenre === genre ? '' : 'outline'}
              type="button"
              onClick={() => handleFilterByGenre(genre)}
            >
              {genre}
            </button>
          </li>
        ))}
      </ul>

      <List data={filteredBooks} />
    </Container>
  );
}

FavoriteBooks.propTypes = {
  books: PropTypes.arrayOf.isRequired,
  genres: PropTypes.arrayOf.isRequired,
};

export default FavoriteBooks;
