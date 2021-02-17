import React from 'react';

import SideNav from '../../components/SideNav';

import AllBooks from './AllBooks';

function Dashboard() {
  return (
    <>
      <SideNav />

      <main style={{ flex: 1 }}>
        <AllBooks />
      </main>
    </>
  );
}

export default Dashboard;
