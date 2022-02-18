import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import PropTypes from 'prop-types';

import List from '../../../components/List';

import { Container } from '../styles';

function MyBooks({ books, genres }) {
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
      <h1>My Books</h1>

      <AnimatePresence>
        <motion.ul layout>
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
        </motion.ul>
      </AnimatePresence>

      <List data={filteredBooks} />
    </Container>
  );
}

MyBooks.propTypes = {
  books: PropTypes.arrayOf.isRequired,
  genres: PropTypes.arrayOf.isRequired,
};

export default MyBooks;
