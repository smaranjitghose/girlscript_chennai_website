import Link from 'next/link';

const EventRegisterSection = () => {
  return (
    <div className="mb-5 register-section">
      <div className="color-overlay-3"></div>
      <br />
      <br />
      <div className="container container-fluid">
        <h1 className="register-heading" id="register-heading">
          R<span>egister</span>
        </h1>
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
            <a className="register-btn" id="register-btn">
              Register
            </a>
          </Link>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default EventRegisterSection;
