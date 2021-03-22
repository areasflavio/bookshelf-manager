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

  // max-height: 80%;
  // min-height: 20rem;

  display: flex;
  margin: 0 auto;
  border-radius: 0.5rem;

  background: ${(props) => props.theme.colors.backgroundSecondary};
  padding: 2rem;

  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.colors.secondary};

  img.modal {
    height: 22.5rem;
    width: 15rem;
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

  section {
    display: flex;
    flex-direction: column;

    margin: 0 1rem;

    h1 {
      font-size: 3rem;

      font-family: ${(props) => props.theme.fonts.title};
      color: ${(props) => props.theme.colors.highlight};
    }

    span {
      display: flex;
      margin-bottom: 1rem;

      h2 {
        margin-left: 0.5rem;
        font-size: 1.5rem;
      }
    }
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: baseline;

  flex-wrap: wrap;
  margin: 0.125rem 0;

  h2 {
    margin-right: 0.5rem;

    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
`;
