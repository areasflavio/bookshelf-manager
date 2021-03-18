import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Sidebar = styled.nav`
  display: flex;
  flex-direction: column;

  section {
    display: flex;
    flex-direction: column;

    & + section {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid ${(props) => props.theme.colors.primary};
    }

    span {
      font-size: 0.75rem;
      font-weight: bold;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.primary};

      margin-bottom: 0.5rem;
    }
  }
`;

export const Item = styled(Link)`
  display: flex;
  align-items: flex-end;

  color: ${(props) => props.theme.colors.secondary};

  padding: 0.25rem;
  border-radius: 0.25rem;

  strong {
    margin-left: 0.5rem;
    font-size: 0.75rem;
  }

  & + button,
  & + div {
    margin-top: 0.5rem;
  }

  transition: background 0.2s;

  &:hover {
    cursor: pointer;
    background: ${(props) =>
      darken(0.05, `${props.theme.colors.backgroundPrimary}`)};
  }
`;
