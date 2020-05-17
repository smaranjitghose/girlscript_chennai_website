import { SectionContainer } from '../SectionContainer';
import { AboutContainer } from './AboutContainer';
import { AboutPara } from './AboutPara';

const AboutSection = () => {
  return (
    <SectionContainer className="pb-5">
      <AboutContainer className="container">
        <h2 className="pt-4 text-center fw-bold heading">
          ABOUT <span className="clr-theme fw-400">GIRLSCRIPT</span>
        </h2>
        <div className="row">
          <div className="col-lg-9 col-md-8 col-sm-12 mt-5 dark-mode spacing">
            <AboutPara className="mt-2 mb-3 fs-17px text-justify">
              <b>GirlScript Foundation</b> is a section-8 NON PROFIT company
              registered under the government of India on 2nd June 2017.
              GirlScript started as a project has been selected by Mozilla under
              Open Leadership program out of 51 open-source projects worldwide.
              GirlScript hosts many tech events and coding competition to help
              you get started and learn computer programming. <br />
              <br />
              <span className="italic">
                No matter whether you are a beginner or an experienced
                individual, GirlScript is open for all.
              </span>
              <br />
              <br />
              GirlScript&#39;s mission is to encourage individuals to learn how
              to code and stand out among the crowd. Along with learning,
              GirlScript aims to create opportunities and growth via technical
              education among various groups of people. <br />
              <br />
              <b>Goals</b>:
            </AboutPara>

            <ul style={{ paddingLeft: '15px' }}>
              <li>
                Encourage people to learn to program and make them capable of
                writing a simple computer program to building a complex system.
              </li>
              <li>
                Empower people by providing an opportunity to showcase their
                technical skills.
              </li>
              <li>
                Provide a platform to individuals by hosting coding competition
                and tech events.
              </li>
              <li>
                Share technical knowledge and content for helping individuals in
                the programming world.
              </li>
            </ul>

            <br />
            <AboutPara>
              <a href="#" className="clr-theme fw-bold">
                GirlScript Chennai
              </a>{' '}
              is India&#39;s fastest growing tech community at the heart of
              Chennai. We believe in uplifting beginners in tech while promoting
              diversity.
            </AboutPara>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12 text-center">
            <img
              src="assets/images/Logo/BoilerPlate-Light.png"
              className="mt-5 ml-2 img-logo"
              alt="Girl Script Chennai Chapter Logo"
              aria-label="Girl Script Chennai Chapter Logo"
            />
          </div>
        </div>
      </AboutContainer>
    </SectionContainer>
  );
};

export default AboutSection;
