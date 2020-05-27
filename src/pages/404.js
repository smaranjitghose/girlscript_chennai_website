import styled from 'styled-components';
import Link from 'next/link';

const StyledContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  color: #000000;

  > img {
    width: 45rem;
  }

  > h2 {
    font-size: 50px;
    letter-spacing: 3px;
    margin-block-end: 5px;
  }

  > p {
    font-size: 17px;
    color: #000000;
  }

  > a {
    text-decoration: none;
    background: rgb(131, 180, 240);
    color: #fff;
    padding: 12px 24px;
    display: inline-block;
    border-radius: 25px;
    font-size: 14px;
    text-transform: uppercase;
    transition: 0.4s;

    &:hover {
      background: rgb(85, 160, 252);
    }
  }

  @media only screen and (max-width: 500px) {
    top: 90%;
    width: auto;
  }
`;

const Custom404 = () => {
  return (
    <StyledContainer>
      <h2>OOPS! Page not found</h2>
      <img src="assets/images/image.jpg" />
      <p>The link you followed probably broken or the page has been removed.</p>
      <Link href="/">Go Home</Link>
    </StyledContainer>
  );
};

export default Custom404;
