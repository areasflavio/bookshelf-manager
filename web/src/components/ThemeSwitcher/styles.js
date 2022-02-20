import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  margin: 2rem;

  svg {
    transition: filter 0.2s;

    &:hover {
      cursor: pointer;
      filter: brightness(0.7);
    }
  }
`;
