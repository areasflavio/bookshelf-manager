import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex: 1;
  flex-wrap: wrap;

  li {
    display: flex;
    flex-direction: column;

    max-width: 120px;
    margin: 8px;

    img {
      height: 180px;
      width: 120px;
      border-radius: 8px;
    }

    strong {
      color: ${(props) => props.theme.colors.secondary};
      margin: 8px 0 2px;

      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 16px;
      max-height: 32px;
    }

    small {
      color: ${(props) => props.theme.colors.primary};

      margin-top: auto;
    }
  }
`;
