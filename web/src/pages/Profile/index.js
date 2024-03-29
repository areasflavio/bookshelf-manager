import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Content } from '../_layouts/Auth/styles';
import history from '../../services/history';

import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

import Input from '../../components/SimpleInput';
import FileInput from '../../components/FileInput';

import { StyledForm } from '../../styles/form';
import { Container, ButtonGroup } from './styles';

function Profile() {
  const formRef = useRef(null);

  const profile = useSelector((state) => state.user.profile);

  const dispatch = useDispatch();

  const [changePassword, setChangePassword] = useState(false);

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email().required('Email is required'),
        oldPassword: Yup.string(),
        password: Yup.string()
          .min(6)
          .when('oldPassword', (oldPassword, field) =>
            oldPassword ? field.required() : field
          ),
        confirmPassword: Yup.string().when('password', (password, field) =>
          password ? field.required().oneOf([Yup.ref('password')]) : field
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed

      dispatch(updateProfileRequest(data));
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

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <StyledForm ref={formRef} onSubmit={handleSubmit} initialData={profile}>
          <FileInput name="avatar_id" fieldName="avatar" />

          <Input name="name" label="Name" type="text" placeholder="Your name" />
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="Your email"
            readOnly
          />

          <span
            role="button"
            tabIndex={0}
            onKeyPress={() => {}}
            onClick={() => setChangePassword(!changePassword)}
          >
            Change password
          </span>

          {changePassword && (
            <>
              <Input
                name="oldPassword"
                label="Old Password"
                type="password"
                placeholder="Your old password"
              />
              <Input
                name="password"
                label="Password"
                type="password"
                placeholder="Your new password"
              />
              <Input
                name="confirmPassword"
                label="Confirm password"
                type="password"
                placeholder="Confirm your new password"
              />
            </>
          )}

          <ButtonGroup>
            <button type="submit">Update</button>
            <button
              type="button"
              className="cancel"
              onClick={() => history.goBack()}
            >
              Cancel
            </button>
          </ButtonGroup>
          <button type="button" className="logout" onClick={handleLogout}>
            Logout
          </button>
        </StyledForm>
      </Content>
    </Container>
  );
}

export default Profile;
