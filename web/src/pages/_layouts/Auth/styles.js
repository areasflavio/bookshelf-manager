import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 32rem;

  background: ${(props) => props.theme.colors.backgroundSecondary};
  padding: 1rem;
  border-radius: 0.25rem;

  h1 {
    font-family: ${(props) => props.theme.fonts.title}, cursive;
    font-weight: normal;
    color: ${(props) => props.theme.colors.highlight};
    margin: 1rem 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    label {
      font-weight: bold;
      color: ${(props) => props.theme.colors.secondary};

      margin: 1rem 0 0.5rem;
    }

    input {
      width: 100%;
      position: relative;
      background: ${(props) => props.theme.colors.backgroundSecondary};

      color: ${(props) => props.theme.colors.secondary};
      height: 3rem;
      padding: 0 1rem;
      border: 1px solid ${(props) => props.theme.colors.primary};
      border-radius: 0.25rem;

      transition: border 0.2s;

      &:hover,
      &:focus {
        border: 1px solid ${(props) => props.theme.colors.highlight};
      }

      &.has-error {
        border: 1px solid ${(props) => props.theme.colors.error};
      }
    }

    button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      background: ${(props) => props.theme.colors.highlight};

      height: 3rem;
      padding: 0.25rem 1rem;
      margin-top: 1rem;
      border-radius: 0.25rem;

      color: ${(props) => props.theme.colors.backgroundSecondary};
      font-weight: bold;
      font-size: 1rem;

      transition: background 0.2s;

      &:hover {
        background: ${(props) =>
          darken(0.08, `${props.theme.colors.highlight}`)};
      }
    }

    span {
      font-weight: bold;
      font-size: 0.625rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.error};

      align-self: flex-start;

      margin-top: 0.125rem;
    }
  }

  footer {
    margin-top: 1rem;

    strong {
      color: ${(props) => props.theme.colors.secondary};
      margin-right: 0.5rem;
    }

    a {
      color: ${(props) => props.theme.colors.highlight};
      font-weight: bold;

      &:hover {
        color: ${(props) => darken(0.08, `${props.theme.colors.highlight}`)};
      }
    }
  }
`;
