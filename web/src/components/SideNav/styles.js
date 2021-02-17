import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    flex-direction: column;

    & + section {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid ${(props) => props.theme.colors.primary};
    }

    span {
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.primary};

      margin-bottom: 8px;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-end;

  color: ${(props) => props.theme.colors.secondary};

  padding: 4px;
  border-radius: 4px;

  strong {
    margin-left: 8px;
    font-size: 12px;
  }

  & + button,
  & + div {
    margin-top: 8px;
  }

  transition: background 0.2s;

  &:hover {
    cursor: pointer;
    background: ${(props) =>
      darken(0.05, `${props.theme.colors.backgroundPrimary}`)};
  }
`;
