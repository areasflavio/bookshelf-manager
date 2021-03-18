import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex: 1;
  flex-wrap: wrap;

  li {
    display: flex;
    flex-direction: column;

    max-width: 7.5rem;
    margin: 0.5rem;

    img {
      height: 11.25rem;
      width: 7.5rem;
      border-radius: 0.5rem;

      transition: all 0.2s;

      &:hover {
        cursor: pointer;
        filter: opacity(0.7);
      }
    }

    strong {
      color: ${(props) => props.theme.colors.secondary};
      margin: 0.5rem 0 0.125rem;

      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1rem;
      max-height: 2rem;
    }

    small {
      color: ${(props) => props.theme.colors.primary};

      margin-top: auto;
    }
  }
`;
