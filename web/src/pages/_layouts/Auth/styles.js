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

  width: 512px;

  background: ${(props) => props.theme.colors.backgroundSecondary};
  padding: 16px;
  border-radius: 4px;

  h1 {
    font-family: ${(props) => props.theme.fonts.title}, cursive;
    font-weight: normal;
    color: ${(props) => props.theme.colors.highlight};
    margin: 16px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    label {
      font-weight: bold;
      color: ${(props) => props.theme.colors.secondary};

      margin: 16px 0 8px;
    }

    input {
      width: 100%;
      position: relative;
      background: ${(props) => props.theme.colors.backgroundSecondary};

      color: ${(props) => props.theme.colors.primary};
      height: 48px;
      padding: 0 16px;
      border: 1px solid ${(props) => props.theme.colors.primary};
      border-radius: 4px;

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
      background: ${(props) => props.theme.colors.highlight};

      height: 48px;
      padding: 0 16px;
      margin-top: 16px;
      border-radius: 4px;

      color: ${(props) => props.theme.colors.backgroundSecondary};
      font-weight: bold;
      font-size: 16px;

      transition: background 0.2s;

      &:hover {
        background: ${(props) =>
          darken(0.08, `${props.theme.colors.highlight}`)};
      }
    }

    span {
      font-weight: bold;
      font-size: 10px;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.error};

      align-self: flex-start;

      margin-top: 2px;
    }
  }

  footer {
    margin-top: 16px;

    strong {
      color: ${(props) => props.theme.colors.secondary};
      margin-right: 8px;
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
