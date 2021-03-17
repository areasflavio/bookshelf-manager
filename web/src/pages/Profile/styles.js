import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  background: ${(props) => props.theme.colors.backgroundSecondary};

  border-radius: 0.25rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
  }

  img {
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
  }

  span {
    width: 100%;

    color: ${(props) => props.theme.colors.secondary};
    font-weight: bold;
    font-size: 0.625rem;
    text-transform: uppercase;
    text-decoration: underline;

    margin: 1rem 0 0.5rem;

    align-self: flex-start;

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
