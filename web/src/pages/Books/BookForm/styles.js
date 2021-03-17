import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  margin: 0 2rem 2rem;

  form {
    display: flex;

    width: 100%;

    section {
      display: flex;
      flex-direction: column;

      width: 100%;
      margin: 0 1rem;
    }
  }
`;

export const LineGroup = styled.div`
  display: grid;

  /* grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr)); */
  grid-template-columns: ${(props) => props.template};
  grid-gap: 1rem;
`;
