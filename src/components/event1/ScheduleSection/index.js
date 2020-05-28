const EventSchedule = [
  {
    stageName: 'Registration',
    stageDetails: `On-site registration for the qualified teams, attendance will be marked here.`,
    timings: '11:30 a.m - 12:30 p.m',
    favClasses: 'fa fa-users',
  },
  {
    stageName: 'Event-Opening',
    stageDetails: `Introduction to the organisers, mentors, judges and discussing event details.`,
    timings: '1:30 p.m - 3:30 p.m',
    favClasses: 'fa fa-handshake-o',
  },
  {
    stageName: 'Event-Begins',
    stageDetails: `Participants will be required to submit the idea they’ve finalised and
						will be working on for the rest of the hackathon.`,
    timings: '5:30 p.m - 7:30 p.m',
    favClasses: 'fa fa-bug',
  },
  {
    stageName: 'Dinner',
    stageDetails: `Dinner by catering services/campus mess.`,
    timings: '8:30 p.m - 10:00 p.m',
    favClasses: 'fa fa-birthday-cake',
  },
  {
    stageName: 'Evaluation',
    stageDetails: `Participants will be required to present the progress on their final
						application.`,
    timings: '9:30 p.m -11:00 p.m',
    favClasses: 'fa fa-asl-interpreting',
  },
];

const EventScheduleCard = ({ id }) => {
  const schedule = EventSchedule[id];
  let position = id % 2 == 0 ? 'left' : 'right';
  let classFix = position === 'left' ? 'time-1' : 'time-2';

  return (
    <div className="col-sm-12 links">
      <div className="featured-schedule">
        <div className="col pb-3 text-center">
          <i className={schedule.favClasses}></i>

          <h2>
            <span>{schedule.stageName}</span>
          </h2>
          <br />
          <p>{schedule.stageDetails}</p>
        </div>
        <div className={`time ${classFix}`}>
          <h3>{schedule.timings}</h3>
        </div>
      </div>
    </div>
  );
};

const EventScheduleSection = () => {
  return (
    <div>
      <a id="schedule"></a>
      <div className="schedule-heading">
        <h2 className="schedule">
          <span>S</span>Chedule
        </h2>
      </div>
      <div className="row">
        <div className="schedule-box col-sm-12">
          <div className="featured-schedule-collection container-schedule">
            <div className="row">
              <div className="schedule-box" id="schedule-box">
                <EventScheduleCard id={0} />
                <EventScheduleCard id={1} />
                <EventScheduleCard id={2} />
                <EventScheduleCard id={3} />
                <EventScheduleCard id={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventScheduleSection;
