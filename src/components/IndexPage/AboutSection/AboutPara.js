import styled from 'styled-components';

export const AboutPara = styled.p`
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 1px;
  font-size: 18px;

  span {
    color: var(--theme-color);
  }
  .italic {
    color: #777;
  }

  & + ul {
    font-family: 'Quicksand', sans-serif;
    letter-spacing: 1px;
    font-size: 18px;
  }

  @media only screen and(max-width:700px) {
    padding: 1rem;
  }
`;
