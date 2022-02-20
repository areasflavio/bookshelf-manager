import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  margin-left: 2rem;
  margin-bottom: 4rem;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-weight: normal;
  }

  ul {
    display: flex;
    gap: 0.5rem;

    li {
      list-style: none;
    }
  }
`;
