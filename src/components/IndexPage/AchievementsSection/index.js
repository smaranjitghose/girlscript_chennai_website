import { SectionContainer } from '../SectionContainer';
import Link from 'next/link';

const AchievementsSection = () => {
  return (
    <SectionContainer className="pt-5 pb-5 bg-lgt-grey">
      <div className="container myDiv1">
        <canvas id="my-canvas"></canvas>
        <h2 className="pt-5 pb-5 text-center fw-bold heading">
          OUR <span className="clr-theme fw-100">ACHIEVEMENTS</span>
        </h2>
        <div className="row for-Scroll-Achievements">
          <div className="col-lg-5">
            <h3 className="text-center p-4 pb-4 achieve-content">
              Our Achievements Speak For Themselves
            </h3>
            <Link href="/achievements">
              <a className="center-btn-settings btn btn-lg mt-2">Read More</a>
            </Link>

            <br />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6 pt-3">
            <div className="counter-item">
              <div className="ci-number count">100+</div>
              <div className="ci-text">
                <h4>PROJECTS</h4>
                <p className="dark-mode">
                  There are many innovative projects which are a part of
                  GirlScript and many students are contributing towards it with
                  full enthusiasm.
                </p>
              </div>
            </div>
            <div className="counter-item">
              <div className="ci-number count">60+</div>
              <div className="ci-text">
                <h4>EVENTS</h4>
                <p className="dark-mode">
                  Many interactive and online events happens time to time in
                  order to connect better with people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default AchievementsSection;
