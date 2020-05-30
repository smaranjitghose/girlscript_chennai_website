import { StyledHeading } from '../StyledHeading';
import { StyledButton } from '../StyledButton';
import { CardStats } from './CardStats';
import { StyledTimeline } from './StyledTimeline';
import { StyledTimelineContent } from './StyledTimelineContent';
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

  const { eventDescription, eventDate, eventPageLink } = timeline;

  return (
    <div className={`timeline-container ${position}`}>
      <StyledTimelineContent>
        <h3>{timeline.eventName}</h3>
        <hr className="mw-100 line1" />
        <p className="description">{eventDescription}</p>
        <div className={`time ${dateType}`}>
          <h5>{eventDate}</h5>
        </div>
        <CardStats>
          <StyledButton>
            <Link href={eventPageLink}>
              <a className="btn" target="__blank">
                Read More
              </a>
            </Link>
          </StyledButton>
        </CardStats>
      </StyledTimelineContent>
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

        <StyledTimeline>
          <TimelineCard id={0} />
          <TimelineCard id={1} />
        </StyledTimeline>
      </div>
    </section>
  );
};

export default TimelineCardSection;
