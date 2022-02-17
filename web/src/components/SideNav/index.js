/* eslint-disable no-unused-vars */
import React from 'react';
import { FiGrid, FiBook, FiTag, FiBookOpen, FiStar } from 'react-icons/fi';

import { Container, Item } from './styles';

import MyBooks from '../../pages/Dashboard/MyBooks';

function SideNav() {
  return (
    <Container>
      <section>
        <span>Browse</span>

        <Item>
          <FiGrid size={16} />
          <strong>All Books</strong>
        </Item>
        <Item>
          <FiTag size={16} />
          <strong>Categories</strong>
        </Item>
      </section>
      <section>
        <span>Your Books</span>

        <Item>
          <FiBook size={16} />
          <strong>My Books</strong>
        </Item>
        <Item>
          <FiBookOpen size={16} />
          <strong>Reading</strong>
        </Item>
        <Item>
          <FiStar size={16} />
          <strong>Favorite Reads</strong>
        </Item>

        <button type="button">Add book</button>
      </section>
    </Container>
  );
}

export default SideNav;
