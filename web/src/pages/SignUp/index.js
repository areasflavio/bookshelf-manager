import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { StyledForm } from '../../styles/form';

import { signUpRequest } from '../../store/modules/auth/actions';

import Input from '../../components/SimpleInput';

function SignIn() {
  const formRef = useRef(null);

  const dispatch = useDispatch();

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().min(6).required('Password is required'),
        confirm_password: Yup.string().oneOf(
          [Yup.ref('password'), null],
          'Passwords must match'
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed
      const { name, email, password, confirm_password } = data;

      dispatch(signUpRequest(name, email, password, confirm_password));
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

      <StyledForm ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" label="Name" type="text" placeholder="Your name" />
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
        <Input
          name="confirm_password"
          label="Confirm password"
          type="password"
          placeholder="Confirm your password"
        />

        <button type="submit">Sign up</button>
      </StyledForm>

      <footer>
        <strong>Already have a account?</strong>
        <Link to="/sign-in">Sign in</Link>
      </footer>
    </>
  );
}

export default SignIn;
