import React from 'react';
import { FiSearch, FiBell, FiUser } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Form } from '@unform/web';

import Input from '../SimpleInput';

import { Container, Content, Main, User, Info } from './styles';

function Header() {
  const profile = useSelector((state) => state.user.profile);

  function handleSearch(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <Content>
        <Main>
          <h1>bookshelf</h1>
          <Form onSubmit={handleSearch}>
            <FiSearch size={16} />
            <Input name="search" label="" type="text" placeholder="" />
          </Form>
        </Main>

        <User>
          <button type="button">Subscribe</button>
          <Info>
            <strong>{profile.name}</strong>
            <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MVzzVBGqNE35Ksyya4rnsQHaHa%26pid%3DApi&f=1'
              }
              alt={profile.name}
            />
          </Info>
          <FiBell size={16} />
          <FiUser size={16} />
        </User>
      </Content>
    </Container>
  );
}

export default Header;
