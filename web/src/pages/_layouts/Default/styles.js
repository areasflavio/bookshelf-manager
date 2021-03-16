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

    padding: 8px 16px;
    border-radius: 4px;

    color: ${(props) => props.theme.colors.backgroundSecondary};
    font-weight: bold;
    text-transform: uppercase;

    transition: background 0.2s;

    &[type='submit'] {
      background: ${(props) => props.theme.colors.highlight};

      &:hover {
        background: ${(props) =>
          darken(0.05, `${props.theme.colors.highlight}`)};
      }
    }

    &.cancel {
      background: ${(props) => props.theme.colors.error};

      &:hover {
        background: ${(props) => darken(0.05, `${props.theme.colors.error}`)};
      }
    }

    &.logout {
      background: ${(props) => props.theme.colors.backgroundPrimary};

      &:hover {
        background: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;

  max-width: 88%;
  margin: 32px auto;
`;
