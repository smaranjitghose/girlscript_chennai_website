import Link from 'next/link';
import { SectionContainer } from '../SectionContainer';
import { AchievementsContainer } from './AchievementsContainer';
import { StyledButton } from '../StyledButton';
import AchievementCounter from './AchivementCounter';

const AchievementsSection = () => {
  return (
    <SectionContainer className="pt-5 pb-5 bg-lgt-grey">
      <AchievementsContainer className="container">
        <h2 className="pt-5 pb-5 text-center fw-bold heading">
          OUR <span className="clr-theme fw-100">ACHIEVEMENTS</span>
        </h2>
        <div className="row">
          <div className="col-lg-5">
            <h3 className="text-center p-4 pb-4">
              Our Achievements Speak For Themselves
            </h3>
            <Link href="/achievements">
              <StyledButton className="btn btn-lg mt-2">Read More</StyledButton>
            </Link>

            <br />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6 pt-3">
            <AchievementCounter
              count="100"
              title="PROJECTS"
              text="There are many innovative projects which are a part of
              GirlScript and many students are contributing towards it with
              full enthusiasm."
            />
            <AchievementCounter
              count="60"
              title="EVENTS"
              text="Many interactive and online events happens time to time in
                  order to connect better with people."
            />
          </div>
        </div>
      </AchievementsContainer>
    </SectionContainer>
  );
};

export default AchievementsSection;
