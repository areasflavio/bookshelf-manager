import React from 'react';

import SideNav from '../../components/SideNav';

import BookForm from './BookForm';

function Books() {
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
