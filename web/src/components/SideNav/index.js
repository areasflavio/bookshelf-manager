import React from 'react';
import {
  FiBarChart2,
  FiCompass,
  FiClock,
  FiTag,
  FiBookOpen,
  FiStar,
  FiAlignLeft,
} from 'react-icons/fi';

import { Container, Item } from './styles';

function SideNav() {
  return (
    <Container>
      <section>
        <span>Browse</span>

        <Item>
          <FiBarChart2 size={16} />
          <strong>Top Books</strong>
        </Item>
        <Item>
          <FiCompass size={16} />
          <strong>Discover</strong>
        </Item>
        <Item>
          <FiTag size={16} />
          <strong>Categories</strong>
        </Item>
      </section>
      <section>
        <span>Your Books</span>

        <Item>
          <FiBookOpen size={16} />
          <strong>Reading</strong>
        </Item>
        <Item>
          <FiStar size={16} />
          <strong>Favorite Reads</strong>
        </Item>
        <Item>
          <FiClock size={16} />
          <strong>History</strong>
        </Item>
      </section>
      <section>
        <span>Shelves</span>

        <Item>
          <FiAlignLeft size={16} />
          <strong>Your Shelves</strong>
        </Item>
        <button type="button">Create a shelf</button>
      </section>
    </Container>
  );
}

export default SideNav;
