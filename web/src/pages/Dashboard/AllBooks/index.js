import React, { useEffect, useState } from 'react';

import api from '../../../services/api';

import List from '../../../components/List';

import { Container } from '../styles';

function AllBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getAllBooks() {
      const response = await api.get('books');

      setBooks(response.data);
    }

    getAllBooks();
  }, []);

  return (
    <Container>
      <h1>All Books</h1>

      <List data={books} />
    </Container>
  );
}

export default AllBooks;
