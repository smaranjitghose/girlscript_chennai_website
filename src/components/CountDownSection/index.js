import CountDownCard from '../../components/CountDownCard';

const countDownDetails = [
  {
    text: 'Events Conducted',
    countFrom: 50,
    iconClasses: 'afab fa fa-laptop fa-3x',
  },
  {
    text: 'Projects Undertaken',
    countFrom: 15,
    iconClasses: 'afab fa fa-trophy fa-3x',
  },
  {
    text: 'People Impacted',
    countFrom: 1500,
    iconClasses: 'afab fa fa-user fa-3x',
  },
];

const CountDownSection = () => {
  return (
    <section className="container space-out">
      <div className="row">
        {countDownDetails.map((detail, index) => (
          <CountDownCard key={index} detail={detail} />
        ))}
      </div>
    </section>
  );
};

export default CountDownSection;
