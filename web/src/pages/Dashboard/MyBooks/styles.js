import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 32px;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-weight: normal;
  }
`;
