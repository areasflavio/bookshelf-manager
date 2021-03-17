import React from 'react';

import SideNav from '../../components/SideNav';

import BookForm from './BookForm';

function Dashboard() {
  return (
    <>
      <SideNav />

      <main style={{ flex: 1 }}>
        <BookForm />
      </main>
    </>
  );
}

export default Dashboard;
