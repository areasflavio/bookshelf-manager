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
  books: PropTypes.arrayOf(
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
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FavoriteBooks;
