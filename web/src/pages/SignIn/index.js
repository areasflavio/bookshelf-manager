import React from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import Input from '../../components/SimpleInput';

function SignIn() {
  function handleSubmit(data) {
    // eslint-disable-next-line no-console
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <>
      <h1>Bookshelf Manager</h1>

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Your email" />
        <Input name="password" type="password" placeholder="Your password" />

        <button type="submit">Sign in</button>
      </Form>

      <footer>
        <strong>Don&#39;t have a account?</strong>
        <Link to="/sign-up">Sign up now</Link>
      </footer>
    </>
  );
}

export default SignIn;
