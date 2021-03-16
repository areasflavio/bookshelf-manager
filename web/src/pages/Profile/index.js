import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form } from '@unform/web';

import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';

import Input from '../../components/SimpleInput';
import AvatarInput from './AvatarInput';

import { Content } from '../_layouts/Auth/styles';
import { Container, ButtonGroup } from './styles';
import history from '../../services/history';

function Profile() {
  const formRef = useRef(null);

  const profile = useSelector((state) => state.user.profile);

  // eslint-disable-next-line no-unused-vars
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
      {/* <img
        src={
          profile.avatar
            ? profile.avatar.url
            : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MVzzVBGqNE35Ksyya4rnsQHaHa%26pid%3DApi&f=1'
        }
        alt={profile.name}
      /> */}

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={profile}>
          <AvatarInput name="avatar_id" />

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
            onClick={() => setChangePassword(!changePassword)}
            onKeyPress={() => {}}
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
        </Form>
      </Content>
    </Container>
  );
}

export default Profile;
