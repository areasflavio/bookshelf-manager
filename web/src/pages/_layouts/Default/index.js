import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';

import { Container, Content } from './styles';

function Default({ children }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
}

Default.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Default;
