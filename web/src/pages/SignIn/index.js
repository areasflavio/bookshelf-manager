/* eslint-disable no-console */
import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Input from '../../components/SimpleInput';

function SignIn() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().min(6).required('Password is required'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed
      console.log(data);
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <>
      <h1>Bookshelf Manager</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="Your email"
        />
        <Input
          name="password"
          label="Password"
          type="password"
          placeholder="Your password"
        />

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
