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
