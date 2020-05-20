import { SectionContainer } from '../SectionContainer';
import { openSourceSvg } from './svgs.js';
import { researchWorkSvg } from './svgs.js';
import { publicSpeakingSvg } from './svgs.js';
import { interpersonalSvg } from './svgs.js';

const initiativesDetails = [
  {
    mainHeading: 'Open Source',
    subHeading: 'Projects',
    description: `Open-source software code. Generally, open source refers to a computer program in
					which the source code is available to the general public for use.`,
    svg: openSourceSvg,
  },
  {
    mainHeading: 'Research',
    subHeading: 'Work',
    description: `Research is "creative and systematic work undertaken to increase the stock of
					knowledge, and the use of this stock of knowledge to devise new applications."`,
    svg: researchWorkSvg,
  },
  {
    mainHeading: 'Public',
    subHeading: 'Speaking',
    description: `GirlScript, with it's various conferences and meet- ups, helps its community to
					master the art of public speaking and build the leaders of tomorrow.`,
    svg: publicSpeakingSvg,
  },
  {
    mainHeading: 'Interpersonal',
    subHeading: 'Development',
    description: `Interpersonal skills are the skills we use every day when we communicate and
					interact with other people, both individually and in groups.`,
    svg: interpersonalSvg,
  },
];

const InitiativesCard = ({ id }) => {
  const initiative = initiativesDetails[id];
  return (
    <div className="flip-card">
      <div className="flip-card-content">
        <div className="flip-card-front">
          <h5 className="flip-card-head">
            {initiative.mainHeading}
            <span>{initiative.subHeading}</span>
          </h5>
          <div
            className="flip-card-img"
            dangerouslySetInnerHTML={{ __html: initiative.svg }}
          ></div>
        </div>
        <div className="flip-card-back">
          <p className="flip-card-detail">{initiative.description}</p>
        </div>
      </div>
    </div>
  );
};

const InitiativesSection = () => {
  return (
    <SectionContainer className="p-5" id="initiativesSection">
      <h2 className="pt-2 pb-5 text-center fw-bold heading">
        OUR <span className="clr-theme fw-100">INITIATIVES</span>
      </h2>

      <div className="initiatives-cards forScrollCards">
        <div className="upper" id="initiatives-upper">
          <InitiativesCard id={0} />
          <InitiativesCard id={1} />
        </div>

        <div className="lower" id="initiatives-lower">
          <InitiativesCard id={2} />
          <InitiativesCard id={3} />
        </div>
      </div>
    </SectionContainer>
  );
};

export default InitiativesSection;
