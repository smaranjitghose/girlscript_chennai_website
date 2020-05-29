const FAQCardDetails = [
  {
    question: `Does it cost anything?`,
    answer: `No - our events are always free of charge.`,
  },
  {
    question: `Does registering mean I am all set to attend?`,
    answer: `Not yet. While your chances of getting a seat are pretty good, we will confirm
				attendees on a case-by -case basis to ensure we attract the right audience.Note that
				your seat is not confirmed until you receive a confirmation code.`,
  },
  {
    question: `When will I hear back if I have a spot?`,
    answer: `We'll try to confirm you at least two days before the event!`,
  },
];

const FAQCard = ({ id }) => {
  const faq = FAQCardDetails[id];

  return (
    <div className="row">
      <div className="col m-3 question-border">
        <h3 className="ques">{faq.question}</h3>
        <p className="ans">{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQCardSection = () => {
  return (
    <div>
      <div className="container p-4">
        <div className="faq-heading" id="faq-heading">
          <h1>
            FAQ
            <span>s</span>
          </h1>
          <div className="faq-subheading">
            Quickly find out if we&apos;ve already adressed your query.
          </div>
        </div>
        <div className="faq-question" id="faq-question">
          <FAQCard id={0} />
          <FAQCard id={1} />
          <FAQCard id={2} />
        </div>
      </div>
    </div>
  );
};

export default FAQCardSection;
