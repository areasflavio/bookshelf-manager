import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  flex: 1;

  max-width: 100%;
  margin: 0 auto;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem 1rem;
    border-radius: 0.25rem;

    color: ${(props) => props.theme.colors.backgroundSecondary};
    font-weight: bold;
    text-transform: uppercase;

    transition: background 0.2s;

    &[type='submit'],
    &[type='button'] {
      background: ${(props) => props.theme.colors.highlight};

      border: 1px solid ${(props) => props.theme.colors.highlight};

      &:hover {
        background: ${(props) =>
          darken(0.05, `${props.theme.colors.highlight}`)};
      }
    }

    &.cancel {
      background: ${(props) => props.theme.colors.error};

      border: 1px solid ${(props) => props.theme.colors.error};

      &:hover {
        background: ${(props) => darken(0.05, `${props.theme.colors.error}`)};
      }
    }

    &.logout,
    &.delete {
      background: ${(props) => props.theme.colors.backgroundPrimary};

      border: 1px solid ${(props) => props.theme.colors.primary};

      &:hover {
        background: ${(props) => props.theme.colors.primary};
      }
    }

    &.outline {
      background: transparent;
      color: ${(props) => props.theme.colors.highlight};

      border: 1px solid ${(props) => props.theme.colors.highlight};

      &:hover {
        color: ${(props) => props.theme.colors.backgroundSecondary};
        background: ${(props) => props.theme.colors.highlight};
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;

  max-width: 88%;
  margin: 2rem auto;
`;
