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
