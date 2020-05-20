import styled from 'styled-components';

const StyledContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: 200;
  overflow-x: hidden;

  @media only screen and (max-width: 1274px) {
    h2 {
      font-size: 3.5rem;
    }
  }

  @media only screen and (max-width: 1070px) {
    h2 {
      font-size: 3rem;
    }
  }
  @media only screen and (max-width: 838px) {
    h2 {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 504px) {
    h2 {
      font-size: 2.7rem;
      margin-top: -90px;
    }
  }
`;

const FrameOne = styled.h2`
  -webkit-animation: blurFadeInOut 3s ease-in backwards;
  animation: blurFadeInOut 3s ease-in backwards;
  animation-delay: 0s;
  -webkit-animation-delay: 0s;
`;

const FrameTwo = styled.h2`
  -webkit-animation: blurFadeInOut 3s ease-in backwards;
  animation: blurFadeInOut 3s ease-in backwards;
  animation-delay: 3s;
  -webkit-animation-delay: 3s;
`;

const FrameThree = styled.h2`
  animation: none;
  color: transparent;
  text-shadow: 0px 0px 1px #000;

  span {
    animation: blurFadeIn 3s ease-in 6s backwards;
    -webkit-animation: blurFadeIn 3s ease-in 6s backwards;
    text-shadow: 0px 0px 1px #000;
    color: #f47621 !important;
    text-transform: uppercase;
    font-size: 4.5rem;
    &:nth-child(2) {
      animation-delay: 7s;
      -webkit-animation-delay: 7s;
    }

    &:nth-child(3) {
      animation-delay: 8s;
      -webkit-animation-delay: 8s;
    }
  }

  @media only screen and (max-width: 1274px) {
    span {
      font-size: 4rem;
    }
  }

  @media only screen and (max-width: 1070px) {
    span {
      font-size: 3.5rem;
    }
  }

  @media only screen and (max-width: 838px) {
    span {
      font-size: 3.2rem;
    }
  }

  @media only screen and (max-width: 504px) {
    span {
      font-size: 3rem;
    }
  }
`;

const HeroContent = () => {
  return (
    <StyledContent>
      <FrameOne>Welcome to</FrameOne>
      <FrameTwo>India&#39;s Largest Tech Community</FrameTwo>
      <FrameThree>
        <span> GirlScript </span>
        <span> Website </span>
        <span> Boilerplate </span>
      </FrameThree>
    </StyledContent>
  );
};

export default HeroContent;
