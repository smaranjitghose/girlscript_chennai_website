import Link from 'next/link';

const EventHeader = () => {
  return (
    <header>
      <div className="color-overlay-1 content-1"></div>
      <div className="container">
        <div className="row d-block">
          <div className="col-lg-6">
            <div className="heading1">
              Code <span id="heading-plus">Camp</span>
            </div>
            <br />
            <p className="heading-caption caption-1">It is Time to Code</p>
            <p className="heading-caption">
              <span className="caption-2"> Presented by </span>
              <span className="font-change"> Game Foundation</span>
            </p>
          </div>
          <div className="col get-info">
            <Link href="/scheduled">Get Scheduled</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EventHeader;
