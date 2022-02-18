import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';

import api from '../../../services/api';

import List from '../../../components/List';

import { Container } from '../styles';

function MyBooks() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentGenre, setCurrentGenre] = useState('All');

  useEffect(() => {
    async function getMyBooks() {
      const response = await api.get('books');

      setBooks(response.data);

      const newGenres = response.data.map((book) => book.genre);

      setGenres(['All', ...new Set(newGenres)]);
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

      <AnimatePresence>
        <motion.div layout>
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
        </motion.div>
      </AnimatePresence>

      <List data={filteredBooks} />
    </Container>
  );
}

export default MyBooks;
