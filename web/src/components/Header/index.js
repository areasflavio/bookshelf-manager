import React from 'react';
import { FiSearch, FiUser } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Form } from '@unform/web';

import { Link } from 'react-router-dom';
import Input from '../SimpleInput';

import history from '../../services/history';

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
          <Link to="/">
            <h1>bookshelf</h1>
          </Link>
          <Form onSubmit={handleSearch}>
            <FiSearch size={16} />
            <Input name="search" label="" type="text" placeholder="" />
          </Form>
        </Main>

        <User>
          <Info>
            <strong>{profile.name}</strong>
            <img
              src={
                profile.avatar.url ||
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MVzzVBGqNE35Ksyya4rnsQHaHa%26pid%3DApi&f=1'
              }
              alt={profile.name}
            />
          </Info>
          <FiUser size={16} onClick={() => history.push('/profile')} />
        </User>
      </Content>
    </Container>
  );
}

export default Header;
