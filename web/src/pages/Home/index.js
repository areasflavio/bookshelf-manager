import React from 'react';

import history from '../../services/history';

function Home() {
  history.push('/sign-in');

  return <h1>Home</h1>;
}

export default Home;
