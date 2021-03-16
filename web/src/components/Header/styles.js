import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  background: ${(props) => props.theme.colors.backgroundSecondary};

  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 88%;
  margin: 0 auto;

  padding: 1rem 0;

  h1 {
    font-family: ${(props) => props.theme.fonts.title}, cursive;
    font-weight: normal;
    color: ${(props) => props.theme.colors.highlight};

    border-right: 1px solid ${(props) => props.theme.colors.backgroundPrimary};
    padding-right: 2rem;
    margin-right: 2rem;
  }

  svg {
    color: ${(props) => props.theme.colors.primary};

    & + svg {
      margin-left: 1rem;
    }
  }

  form {
    display: flex;
    align-items: center;
    width: 100%;

    border: 1px solid ${(props) => props.theme.colors.backgroundPrimary};
    padding: 0.5rem;
    border-radius: 1rem;

    input {
      margin-left: 0.25rem;
      border: none;

      color: ${(props) => props.theme.colors.primary};
      background: ${(props) => props.theme.colors.backgroundSecondary};
    }
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  align-self: stretch;

  svg {
    transition: color 0.2s;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.colors.backgroundPrimary};
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  min-height: 100%;

  border-right: 1px solid ${(props) => props.theme.colors.backgroundPrimary};
  padding-right: 2rem;
  margin: 0 2rem;

  strong {
    color: ${(props) => props.theme.colors.primary};
    font-size: 0.75rem;

    margin-right: 0.5rem;
  }

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    object-fit: cover;
  }
`;
