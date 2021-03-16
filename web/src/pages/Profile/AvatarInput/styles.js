import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 20rem;
      width: 20rem;
      border-radius: 50%;

      border: 0.125rem solid rgba(255, 255, 255, 0.3);
      background: ${(props) => props.theme.colors.backgroundPrimary};
    }

    input {
      display: none;
    }
  }
`;
