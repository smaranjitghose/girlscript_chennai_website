import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: relative;
  background-repeat: no-repeat;
  height: 500px;
  background: url('/assets/images/event/bg-1.png');
  text-align: left;
  background-size: 100% 500px;

  @media screen and (max-width: 1048px) {
    background: url('/assets/images/event/bg-resize.png');
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 1000px) {
    background: url('/assets/images/event/post-bg-1.png');
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 900px) {
    background: url('/assets/images/event/prepost-bg-1.png');
    height: 400px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;
