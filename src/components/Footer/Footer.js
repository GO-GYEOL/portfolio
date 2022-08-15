import React from "react";

const FooterComponent = (props) => {
  return (
    <div>
      <form
        className="gform pure-form pure-form-stacked"
        method="POST"
        data-email="rhruf3297@gmail.com"
        action="https://script.google.com/macros/s/AKfycbwBeROAW6XSgd1SH2DypuRRgKuYN1BjwpsdGCse1dlXapZVi8w-xiaCkyJrrinvIXn5/exec"
        target="iframe1"
      >
        <div className="form-elements">
          <fieldset className="pure-group">
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              name="name"
              placeholder="What your Mom calls you"
            />
          </fieldset>

          <fieldset className="pure-group">
            <label htmlFor="message">Message: </label>
            <textarea
              id="message"
              name="message"
              rows="10"
              placeholder="Tell us what's on your mind..."
            ></textarea>
          </fieldset>

          <fieldset className="pure-group">
            <label htmlFor="email">
              <em>Your</em> Email Address:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              // value=""
              required
              placeholder="your.name@email.com"
            />
          </fieldset>

          <fieldset className="pure-group">
            <label htmlFor="color">Favourite Color: </label>
            <input id="color" name="color" placeholder="green" />
          </fieldset>

          <fieldset className="pure-group honeypot-field">
            <label htmlFor="honeypot">
              To help avoid spam, utilize a Honeypot technique with a hidden
              text field; must be empty to submit the form! Otherwise, we assume
              the user is a spam bot.
            </label>
            <input id="honeypot" type="text" name="honeypot" value="" />
          </fieldset>

          <button className="button-success pure-button button-xlarge">
            <i className="fa fa-paper-plane"></i>&nbsp;Send
          </button>
        </div>

        <div className="thankyou_message" style={{ display: "none" }}>
          <h2>
            <em>Thanks</em> for contacting us! We will get back to you soon!
          </h2>
        </div>
        <div style={{ display: "none" }} className="thankyou_message">
          <h2>
            <em>Thanks</em> for contacting us! We will get back to you soon!
          </h2>
        </div>
      </form>
      <iframe id="iframe1" name="iframe1" style={{ display: "none" }}></iframe>
      <script
        data-cfasync="false"
        type="text/javascript"
        src="https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"
      ></script>
    </div>
  );
};

export default FooterComponent;
