import React from 'react';

function Dashboard() {
  return (
    <>
      <nav>
        <div>
          <span>Browse</span>

          <strong>Top Books</strong>
          <strong>Discover</strong>
          <strong>Categories</strong>
        </div>
        <div>
          <span>Your Books</span>

          <strong>Reading</strong>
          <strong>Favorite Reads</strong>
          <strong>History</strong>
        </div>
        <div>
          <span>Shelves</span>

          <strong>Your Shelves</strong>
          <button type="button">Create a shelf</button>
        </div>
      </nav>
      <main style={{ flex: 1 }}>main</main>
    </>
  );
}

export default Dashboard;
