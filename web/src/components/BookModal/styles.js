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

  img.modal {
    height: 22.5rem;
    width: 15rem;
    border-radius: 0.5rem;

    &:hover {
      cursor: default;
      filter: opacity(1);
    }
  }

  section {
    display: flex;
    flex-direction: column;

    padding: 2rem;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;

  flex-wrap: wrap;

  strong {
    margin-right: 0.5rem;
  }

  small {
    margin: 0;
  }
`;
