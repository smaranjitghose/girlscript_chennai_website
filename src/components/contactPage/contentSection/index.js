const ContentSection = () => {
  return (
    <section className="main-section">
      <div className="container container-contact pt-5 pb-5">
        <div className="side-sec" data-aos="fade-right">
          <div className="def">
            <h4>Get in Touch</h4>
            <div className="def-sec mb-4">
              Have a doubt in mind? <br />
              Want to share something with us?
            </div>
          </div>
          <div className="def">
            <h4>
              <i className="fa fa-map-marker"></i> Find us at the office
            </h4>
            <div className="def-sec mb-4">Chennai,India</div>
          </div>
          <div className="def">
            <h4>
              <i className="fa fa-phone"></i> Give us a ring
            </h4>
            <div className="def-sec">Jordan +91 762321762</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
