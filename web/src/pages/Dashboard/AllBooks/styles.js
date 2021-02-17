import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 32px;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    font-weight: normal;
  }

  ul {
    display: flex;
    flex: 1;
    flex-wrap: wrap;

    li {
      display: flex;
      flex-direction: column;

      margin: 8px;

      img {
        height: 180px;
        border-radius: 8px;
      }

      strong {
        color: ${(props) => props.theme.colors.secondary};
        margin: 8px 0 2px;
      }

      small {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;
