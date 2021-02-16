import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  flex: 1;

  max-width: 100%;
  margin: 0 auto;

  button[type='button'] {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme.colors.highlight};
    padding: 8px 16px;
    border-radius: 4px;

    color: ${(props) => props.theme.colors.backgroundSecondary};
    font-weight: bold;

    transition: background 0.2s;

    &:hover {
      background: ${(props) => darken(0.05, `${props.theme.colors.highlight}`)};
    }
  }
`;

export const Content = styled.div`
  display: flex;

  max-width: 88%;
  margin: 32px auto;

  nav {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;

      & + div {
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid ${(props) => props.theme.colors.primary};
      }

      span {
        font-weight: bold;
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.primary};

        margin-bottom: 8px;
      }

      strong {
        color: ${(props) => props.theme.colors.secondary};

        & + strong {
          margin-top: 12px;
        }

        & + button {
          margin-top: 12px;
        }
      }
    }
  }
`;
