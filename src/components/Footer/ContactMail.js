import React, { useRef } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 55%;
  background-color: #1c1c1c;
  border-radius: 10px;
  padding: 32px;
`;

const Input = styled.input`
  background-color: #121212;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #ffffffde;
`;

const TextArea = styled.textarea`
  background-color: #121212;
  color: #ffffffde;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const ContactMail = (props) => {
  const onSubmit = () => window.alert("submitted");
  return (
    <Wrapper>
      <form
        type="reset"
        onSubmit={onSubmit}
        method="POST"
        data-email="example@gmail.com"
        action="https://script.google.com/macros/s/AKfycbwBeROAW6XSgd1SH2DypuRRgKuYN1BjwpsdGCse1dlXapZVi8w-xiaCkyJrrinvIXn5/exec"
        target="iframe1"
      >
        <div>
          <fieldset className="pure-group">
            <label htmlFor="name">Name: </label>
            <br />
            <Input id="name" name="name" placeholder="홍길동" />
          </fieldset>

          <fieldset className="pure-group">
            <label htmlFor="email">
              <em>Your</em> Email Address:
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your.name@email.com"
            />
          </fieldset>

          <fieldset className="pure-group">
            <label htmlFor="message">Message: </label>
            <TextArea
              id="message"
              name="message"
              rows="10"
              placeholder="Tell me what's on your mind..."
            ></TextArea>
          </fieldset>

          <button
            className="button-success pure-button button-xlarge"
            style={{}}
          >
            <i className="fa fa-paper-plane" style={{ color: "#1c1c1c" }}></i>
            &nbsp;Send
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
    </Wrapper>
  );
};

export default ContactMail;
