const trendCardsDetails = [
  {
    backgroundCover: 'assets/images/Index/ml.jpg',
    displayName: 'Machine Learning',
  },
  {
    backgroundCover: 'assets/images/Index/IoT1.jpg',
    displayName: 'Internet of Things',
  },
  {
    backgroundCover: 'assets/images/Index/program.jpg',
    displayName: 'Web Development',
  },
  {
    backgroundCover: 'assets/images/Index/cloud1.jpg',
    displayName: 'Cloud Computing',
  },
  {
    backgroundCover: 'assets/images/Index/cs3.jpg',
    displayName: 'Cyber Security',
  },
  {
    backgroundCover: 'assets/images/Index/robot1.jpg',
    displayName: 'Robotics',
  },
];

const TrendsCard = ({ id }) => {
  const trend = trendCardsDetails[id];
  return (
    <div className="ih-item circle effect">
      <a>
        <div className="img">
          <img
            src={trend.backgroundCover}
            alt={trend.displayName}
            aria-label={trend.displayName}
          />
        </div>
        <div className="info">
          <div className="info-back">
            <h3>{trend.displayName}</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

const TrendsSection = () => {
  return (
    <section className="newsection p-5" id="newsSection">
      <h2 className="pt-5 pb-2 text-center fw-bold heading">
        WE CREATE TRENDS{' '}
        <span className="clr-theme fw-100">FOR THE WORLD </span>
      </h2>
      <h3 className="mb-5 text-center join-us">
        Join us and get a chance to learn
      </h3>

      <div className="feature-cards scroll-feature-cards" id="trends-top">
        <TrendsCard id={0} />
        <TrendsCard id={1} />
        <TrendsCard id={2} />
      </div>

      <div className="feature-cards scroll-feature-cards" id="trends-bottom">
        <TrendsCard id={3} />
        <TrendsCard id={4} />
        <TrendsCard id={5} />
      </div>

      <a href="contactUs.html" className="center-btn-settings btn btn-lg mt-5">
        Get In Touch
      </a>
    </section>
  );
};

export default TrendsSection;
