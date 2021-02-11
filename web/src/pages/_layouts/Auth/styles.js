import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 500px;

  background: #ffffff;
  padding: 16px;
  border-radius: 4px;

  h1 {
    font-family: 'Pacifico', cursive;
    font-weight: normal;
    color: #32b77a;
    margin: 16px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    input {
      width: 100%;

      color: #6c6c6c;
      height: 48px;
      padding: 0 16px;
      margin: 0 0 16px;
      border: 1px solid #6c6c6c;
      border-radius: 4px;
    }

    button {
      width: 100%;
      background: #32b77a;

      height: 48px;
      padding: 0 16px;
      margin: 0 0 16px;
      border-radius: 4px;

      color: #ffffff;
      font-weight: bold;
      font-size: 16px;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#32b77a')};
      }
    }
  }

  strong {
    color: #686868;
    margin-right: 8px;
  }

  a {
    color: #32b77a;
    font-weight: bold;

    &:hover {
      color: ${darken(0.05, '#32b77a')};
    }
  }
`;
