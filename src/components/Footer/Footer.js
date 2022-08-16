import React from "react";
import styled from "styled-components";
import ContactMail from "./ContactMail";
import ContactLeft from "./ContactLeft";

const Wrapper = styled.div`
  margin-top: 150px;
`;
const SmallWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 24px;
  padding: 0 50px;
  margin-bottom:5px;
  font-weight: bold;
`;
const FooterComponent = (props) => {
  return (
    <Wrapper>
      <Title>Contact Me</Title>
      <SmallWrapper>
        <ContactLeft />
        <ContactMail />
      </SmallWrapper>
    </Wrapper>
  );
};

export default FooterComponent;
