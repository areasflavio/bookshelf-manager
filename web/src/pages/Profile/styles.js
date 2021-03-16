import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  background: ${(props) => props.theme.colors.backgroundSecondary};

  border-radius: 0.25rem;

  img {
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
  }

  div > form > span {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: underline;

    margin-top: 1rem;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.highlight};
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  button + button {
    margin-left: 0.25rem;
  }
`;
