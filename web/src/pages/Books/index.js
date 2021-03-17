/* eslint-disable react/prop-types */
import React from 'react';
import { useParams } from 'react-router-dom';

import SideNav from '../../components/SideNav';

import BookForm from './BookForm';

function Books() {
  const { bookId } = useParams();

  // eslint-disable-next-line no-console
  console.log(bookId);

  return (
    <>
      <SideNav />

      <main style={{ flex: 1 }}>
        <BookForm />
      </main>
    </>
  );
}

export default Books;
