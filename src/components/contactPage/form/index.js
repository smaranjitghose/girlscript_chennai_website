const ContactForm = () => {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 contact-form p-4">
      <h2 className="font-weight-bold mb-1 form-heading">
        Contact <span className="clr-theme"> Us</span>
      </h2>
      <form
        className="form-horizontal"
        name="myForm"
        action="https://formspree.io/xyz@gmail.com"
        method="post"
      >
        <div className="form-group pb-3">
          <span className="error-message" id="error-name">
            <i className="fa fa-exclamation-triangle"></i> <span> Error</span>
          </span>

          <input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            className="form-control no-border"
          />
          <label className="form-control-placeholder" htmlFor="name">
            Name
          </label>
        </div>
        <div className="form-group pb-3">
          <span className="error-message" id="error-email">
            <i className="fa fa-exclamation-triangle"></i> <span> Error</span>
          </span>

          <input
            type="email"
            id="email_id"
            name="email"
            placeholder=" "
            className="form-control no-border"
          />
          <label className="form-control-placeholder" htmlFor="email">
            Email Address
          </label>
        </div>
        <div className="form-group pb-3">
          <span className="error-message" id="error-subject">
            <i className="fa fa-exclamation-triangle"></i> <span> Error</span>
          </span>

          <input
            type="text"
            id="subject"
            name="subject"
            placeholder=" "
            className="form-control no-border"
          />
          <label className="form-control-placeholder" htmlFor="subject">
            Subject
          </label>
        </div>
        <div className="form-group">
          <span className="error-message" id="error-message">
            <i className="fa fa-exclamation-triangle"></i> <span> Error</span>
          </span>

          <textarea
            name="message"
            id="message"
            placeholder=" "
            rows="4"
            onInput="return validateForm('message')"
            className="form-control no-border"
          ></textarea>
          <label className="form-control-placeholder" htmlFor="message">
            Your Message
          </label>
        </div>
        <div className="capbox">
          <span className="error-message" id="error-captcha">
            <i className="fa fa-exclamation-triangle"></i> <span> Error</span>
          </span>

          <input type="text" readOnly id="CaptchaDiv" />
          <div className="form-group">
            <input
              type="number"
              className="form-control no-border"
              placeholder=" "
              name="captchaInput"
              id="CaptchaInput"
            />

            <label className="form-control-placeholder" htmlFor="CaptchaInput">
              Enter the Captcha
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-lg mt-2 center-btn-settings center-btn-settings2 mb-3"
          id="submit-button"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
