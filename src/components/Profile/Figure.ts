import styled from '@emotion/styled';

const Figure = styled.figure`
  figcaption {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #fff;
    opacity: 0;
    transition: 0.3 ease-out;

    &:hover {
      opacity: 1;
    }
  }
`;

export default Figure;
