import { StyledHeading } from '../StyledHeading';
import { StyledButton } from '../StyledButton';
import Link from 'next/link';

const timelineCardsDetails = [
  {
    eventName: 'Girlscript Contributors Week',
    eventDescription:
      'It is a meetup where everyone who are a part of Girlscript will gather and share their experience.',
    eventDate: 'June 20, 2020',
    eventPageLink: '/event1',
  },
  {
    eventName: 'Code Camp',
    eventDescription:
      'It is a coding camp where everyone can participate and learn about different technologie',
    eventDate: 'May 20, 2020',
    eventPageLink: '/event1',
  },
];

const TimelineCard = ({ id }) => {
  const timeline = timelineCardsDetails[id];
  const position = id % 2 === 0 ? 'left' : 'right';
  const dateType = position === 'right' ? 'time-2' : 'time-1';

  return (
    <div className={`timeline-container ${position}`}>
      <div className="timeline-content">
        <h3>{timeline.eventName}</h3>
        <hr className="mw-100 line1" />
        <p className="description">{timeline.eventDescription}</p>
        <div className={`time ${dateType}`}>
          <h5>{timeline.eventDate}</h5>
        </div>
        <div className="card-stats">
          <StyledButton>
            <Link href={timeline.eventPageLink}>
              <a className="btn" target="__blank">
                Read More
              </a>
            </Link>
          </StyledButton>
        </div>
      </div>
    </div>
  );
};

const TimelineCardSection = () => {
  return (
    <section className="upcoming-events">
      <div className="container pt-5 pb-5">
        <StyledHeading>
          <div>
            Upcoming <span className="clr-theme"> Events</span>
          </div>
          <hr className="mw-100 line" />
        </StyledHeading>

        <div className="timeline pt-5" id="timeline">
          <TimelineCard id={0} />
          <TimelineCard id={1} />
        </div>
      </div>
    </section>
  );
};

export default TimelineCardSection;
