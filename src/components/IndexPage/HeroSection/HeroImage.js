import styled from 'styled-components';

export const HeroImage = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  background-image: -webkit-linear-gradient(
      top left,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.5)
    ),
    url('/assets/images/Hero.jpg');
`;
