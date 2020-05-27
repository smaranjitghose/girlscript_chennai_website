import styled from 'styled-components';

export const StyledTimelineContent = styled.div`
  padding: 20px 30px;
  background-color: var(--bg2-color);
  position: relative;
  border-radius: 6px;
  -webkit-box-shadow: var(--box-shadow);
  box-shadow: var(--box-shadow);

  > p,
  h3,
  h5 {
    font-family: 'Quicksand', sans-serif;
  }

  @media screen and (max-width: 395px) {
    padding: 7px 12px;
    position: relative;
  }

  @media only screen and (max-width: 1199px) {
    > h3 {
      font-size: 20px;
      text-align: center;
    }
  }

  @media screen and (max-width: 395px) {
    > h3 {
      font-size: 25px;
    }
    > p {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 991px) {
    > h3 {
      font-size: 20px;
    }
  }
`;
