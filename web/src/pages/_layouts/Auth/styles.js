import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px;
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

    label {
      font-weight: bold;
      color: #686868;

      margin: 16px 0 8px;
    }

    input {
      width: 100%;
      position: relative;

      color: #6c6c6c;
      height: 48px;
      padding: 0 16px;
      border: 1px solid #6c6c6c;
      border-radius: 4px;

      &:hover,
      &:focus {
        border: 1px solid #32b77a;
      }

      &.has-error {
        border: 1px solid #ff7057;
      }
    }

    button {
      width: 100%;
      background: #32b77a;

      height: 48px;
      padding: 0 16px;
      margin-top: 16px;
      border-radius: 4px;

      color: #ffffff;
      font-weight: bold;
      font-size: 16px;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#32b77a')};
      }
    }

    span {
      font-weight: bold;
      font-size: 10px;
      text-transform: uppercase;
      color: #ff7057;

      align-self: flex-start;

      margin-top: 2px;
    }
  }

  footer {
    margin-top: 16px;

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
  }
`;
