import React from 'react';
import { FiSearch, FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Input from '../SimpleInput';

import history from '../../services/history';

import { Container, Content, Main, User, Info } from './styles';
import { filterBooksRequest } from '../../store/modules/books/actions';

function Header() {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.user.profile);

  function handleSearch(data) {
    console.tron.log(data);
    dispatch(filterBooksRequest(data.search));
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
            <Input name="search" label="" type="text" placeholder="Search" />
          </Form>
        </Main>

        <User>
          <Info>
            <strong>{profile.name}</strong>
            <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : 'https://via.placeholder.com/150/F2ECFF/394B40/?text=No%20Avatar'
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
