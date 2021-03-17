import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(props) =>
    props.type === 'avatar'
      ? css`
          align-self: center;
        `
      : css`
          align-self: flex-start;
        `}

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      ${(props) =>
        props.type === 'avatar'
          ? css`
              height: 20rem;
              width: 20rem;
              border-radius: 50%;
            `
          : css`
              height: 22.5rem;
              width: 15rem;
              border-radius: 0.5rem;
            `}

      border: 0.125rem solid rgba(255, 255, 255, 0.3);
      background: ${(props) => props.theme.colors.backgroundPrimary};
    }

    input {
      display: none;
    }
  }
`;
