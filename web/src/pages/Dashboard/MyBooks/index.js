import React, { useEffect, useState } from 'react';

import api from '../../../services/api';

import List from '../../../components/List';

import { Container } from '../styles';

function MyBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getMyBooks() {
      const response = await api.get('books');

      setBooks(response.data);
    }

    getMyBooks();
  }, []);

  return (
    <Container>
      <h1>My Books</h1>

      <List data={books} />
    </Container>
  );
}

export default MyBooks;
