import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

export const SpecialModalBackground = styled(BaseModalBackground)`
  background: ${(props) => `${props.theme.colors.backgroundPrimary}55`};

  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

export const StyledModal = Modal.styled`
  max-width: 80%;
  min-width: 20rem;

  display: flex;
  margin: 0 auto;
  border-radius: 0.5rem;

  background: ${(props) => props.theme.colors.backgroundSecondary};
  padding: 2rem;

  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  color: ${(props) => props.theme.colors.secondary};

  header {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    border-bottom: 1px dashed ${(props) => props.theme.colors.highlight};

    h1 {
      font-size: 3rem;

      font-family: ${(props) => props.theme.fonts.text};
      color: ${(props) => props.theme.colors.highlight};
    }

    span {
      display: flex;
      margin-bottom: 1rem;

      h2 {
        font-size: 1.5rem;
      }
    }
  }

  img.modal {
    height: 18.75rem;
    width: 12.5rem;
    border-radius: 0.5rem;

    margin-bottom: 0.5rem;

    &:hover {
      cursor: default;
      filter: opacity(1);
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.backgroundSecondary};
  }

  button + button {
    margin-top: 0.5rem;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;

    section {
      display: flex;
      flex-direction: column;

      margin: 0 1rem;
    }
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  flex-wrap: wrap;
  margin: 0.125rem 0;
  padding: 0.25rem 0.5rem;

  h2 {
    margin-right: 0.5rem;

    font-size: 1.5rem;
    line-height: 1.5;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;

    max-width: 100ch;
  }

  &:last-child {
    p {
      max-height: 100px;
      overflow-y: scroll;
    }
  }
`;
