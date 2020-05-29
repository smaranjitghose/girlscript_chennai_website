import styled from 'styled-components';

export const StyledHeading = styled.div`
  font-family: 'Baloo Bhaina 2', sans-serif;
  font-size: 70px;
  padding-top: 8rem;
  color: var(--heading-clr);

  @media screen and (max-width: 600px) {
    font-size: 40px;
  }

  @media screen and (max-width: 800px) {
    font-size: 45px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 50px;
  }

  @media screen and (max-width: 900px) {
    padding-top: 20px;
  }
`;
