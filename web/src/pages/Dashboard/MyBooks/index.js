import React, { useEffect, useState } from 'react';

import api from '../../../services/api';

import List from '../../../components/List';

import { Container, GenreList } from '../styles';

function MyBooks() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentGenre, setCurrentGenre] = useState('All');

  useEffect(() => {
    async function getMyBooks() {
      const response = await api.get('books');

      setBooks(response.data);

      const filteredGenres = response.data.map((book) => book.genre);

      setGenres(['All', ...filteredGenres]);
    }

    getMyBooks();
  }, []);

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
      <h1>My Books</h1>

      <GenreList>
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
      </GenreList>

      <List data={filteredBooks} />
    </Container>
  );
}

export default MyBooks;
