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

  padding: 16px 0;

  h1 {
    font-family: ${(props) => props.theme.fonts.title}, cursive;
    font-weight: normal;
    color: ${(props) => props.theme.colors.highlight};

    border-right: 1px solid ${(props) => props.theme.colors.backgroundPrimary};
    padding-right: 32px;
    margin-right: 32px;
  }

  svg {
    color: ${(props) => props.theme.colors.primary};

    & + svg {
      margin-left: 16px;
    }
  }

  form {
    display: flex;
    align-items: center;
    width: 100%;

    border: 1px solid ${(props) => props.theme.colors.backgroundPrimary};
    padding: 8px;
    border-radius: 16px;

    input {
      margin-left: 4px;
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
  padding-right: 32px;
  margin: 0 32px;

  strong {
    color: ${(props) => props.theme.colors.primary};
    font-size: 12px;

    margin-right: 8px;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;

    object-fit: cover;
  }
`;
