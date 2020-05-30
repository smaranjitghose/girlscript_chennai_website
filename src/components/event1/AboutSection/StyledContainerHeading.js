import styled from 'styled-components';

export const StyledContainerHeading = styled.div`
  font-size: 50px;
  font-family: 'Comfortaa', sans-serif;
  font-weight: 400;
  color: #f46621;
  opacity: 0.8;
  text-align: left;
  border-bottom: 1px solid rgba(100, 100, 100, 0.3);
  width: 17rem;
  letter-spacing: -2px;

  > span {
    font-size: 80px;
    color: #111111;
  }

  @media screen and (max-width: 700px) {
    font-size: 30px;
    > span {
      font-size: 50px;
    }
  }

  @media screen and (max-width: 450px) {
    font-size: 35px;
  }
`;
