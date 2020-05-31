import Link from 'next/link';
import { StyledRegisterSection } from './StyledRegisterSection';
import { StyledColorOverlay } from './StyledColorOverlay';
import { StyledRegisterHeading } from './StyledRegisterHeading';
import { StyledButton } from './StyledButton';

const EventRegisterSection = () => {
  return (
    <StyledRegisterSection>
      <StyledColorOverlay />
      <br />
      <br />
      <div className="container container-fluid">
        <StyledRegisterHeading>
          R<span>egister</span>
        </StyledRegisterHeading>
        <br />
        <br />
        <div className="row">
          <div className="col-12 register-para" id="register-para">
            After successful registration your complete information will be
            stored in your profile till the end of this program.
            <br />
            <br />
            <span>
              {' '}
              Click the link below to register yourself for the program
            </span>
          </div>
        </div>
        <div className="row">
          <Link href={''}>
            <StyledButton>Register</StyledButton>
          </Link>
        </div>
        <br />
        <br />
      </div>
    </StyledRegisterSection>
  );
};

export default EventRegisterSection;
