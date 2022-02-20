import styled from 'styled-components';
import { darken } from 'polished';
import { Form } from '@unform/web';

export const StyledForm = styled(Form)`
  & > main {
    width: 100%;

    margin: 0.25rem 0;
  }

  label {
    font-weight: bold;
    color: ${(props) => props.theme.colors.secondary};

    margin: 1rem 0 0.5rem;
  }

  input,
  textarea {
    margin: 0.125rem 0 0.5rem;
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

  textarea {
    resize: vertical;
    padding: 1rem;
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
      background: ${(props) => darken(0.08, `${props.theme.colors.highlight}`)};
    }
  }
`;
