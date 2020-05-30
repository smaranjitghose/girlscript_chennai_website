import { StyledHeading } from '../StyledHeading';
import { StyledButton } from '../StyledButton';
import { StyledImage } from './CardImage';
import { StyledText } from './CardText';
import { CardStats } from './CardStats';
import { StyledCard } from './StyledCard';

const recentEventsDetails = [
  {
    coverImage: 'assets/images/announcement/producthunt.png',
    eventName: 'Product Hunt',
    altName: 'Product Hunt Logo',
    eventDescription: `We are feeling much happy to announce Product Hunt as out official In-Kind partner.
                                Thankyou for being with Girlscript and helping it make a success.`,
    referencePage: '#!',
  },
  {
    coverImage: 'assets/images/announcement/contributors.png',
    eventName: 'Contributions',
    altName: 'Contributors Illustration',
    eventDescription: `We are extremely elated to see so many participants coming up with different skills and
								new ways of approaching solution and contribute to the project.`,
    referencePage: '#!',
  },
  {
    coverImage: 'assets/images/announcement/DU-Express.png',
    eventName: 'DU Express',
    altName: 'DU Express Logo',
    eventDescription: `We would like to thank DU Express (@DuExpress) to be our Media Partner for GirlScript
								Summer Of Code 2020.`,
    referencePage: '#!',
  },
];

const RecentEventsDetailsCard = ({ id }) => {
  const EventCard = recentEventsDetails[id];

  const {
    coverImage,
    altName,
    eventName,
    eventDescription,
    referencePage,
  } = Eventcard;
  return (
    <StyledCard>
      <StyledImage>
        <img src={coverImage} alt={altName} aria-label={altName} />
      </StyledImage>
      <StyledText>
        <h2 className="rh">{eventName}</h2>
        <p className="pt-1 event-body">{eventDescription}</p>
      </StyledText>
      <CardStats>
        <StyledButton>
          <a href={referencePage} className="btn">
            Read More
          </a>
        </StyledButton>
      </CardStats>
    </StyledCard>
  );
};

const AnnouncementCardSection = () => {
  return (
    <section>
      <div className="container pt-5 pb-5">
        <StyledHeading>
          <div>
            Recent <span className="clr-theme"> Events</span>
          </div>
          <hr className="mw-100 line" />
        </StyledHeading>
        <div className="row justify-content-center" id="eventCards">
          <RecentEventsDetailsCard id={0} />
          <RecentEventsDetailsCard id={1} />
          <RecentEventsDetailsCard id={2} />
        </div>
      </div>
    </section>
  );
};

export default AnnouncementCardSection;
