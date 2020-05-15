import WavesSvg from './WavesSvg';
import SocialLinks from './SocialLinks';
import styled from 'styled-components';
import NewsletterForm from './NewsletterForm';

const StyledFooter = styled.footer`
  background: #000;
  padding: 20px 0;
  overflow-x: hidden;

  .logo {
    width: 150px;
    display: block;
  }

  @media only screen and (max-width: 770px) {
    .logo {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      margin: auto;
    }
  }
`;

export default function Footer() {
  return (
    <>
      <WavesSvg />
      <StyledFooter>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-4">
              <img
                src="assets/images/Logo/FooterLogo.png"
                alt="Girl Script Chennai Chapter Logo"
                className="logo"
                aria-label="Girl Script Chennai Chapter Logo"
              />
            </div>
            <NewsletterForm />
          </div>
          <SocialLinks />
        </div>
      </StyledFooter>
    </>
  );
}
