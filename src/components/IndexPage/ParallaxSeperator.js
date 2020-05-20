import styled from 'styled-components';

export const ParallaxDiv = styled.div`
  background-image: url('https://www.gssoc.tech/images/0.jpg');
  width: 100%;
  height: 40px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ParallaxShadow = styled.div`
  background: #fff;
  position: relative;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  opacity: 0.4;
  height: 40px;
  width: 100%;
`;

const ParallaxSeperator = () => {
  return (
    <ParallaxDiv>
      <ParallaxShadow />
    </ParallaxDiv>
  );
};

export default ParallaxSeperator;
