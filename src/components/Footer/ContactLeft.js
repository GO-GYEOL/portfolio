import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  width: 45%;
  padding: 0px 50px;
`;

const Text = styled.div`
  font-size: 15px;
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  margin-bottom: ${(props) => props.marginBottom};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => {
    if (props.underline) {
      return css`
        border-bottom: 2px solid rgb(107, 114, 128);
      `;
    }
  }}
`;
const IconBoxWrapper = styled.div`
  display: flex;
`;
const IconWrapper = styled.a`
  display: flex;
  border: 1px solid white;
  margin-right: 10px;
  margin-top: 25px;
  padding: 5px 10px;
  border-radius: 10px;
`;

const ContactLeft = (props) => {
  return (
    <Wrapper>
      <Text padding="3px 0px" marginBottom="30px">
        언제든지 연락 바랍니다!
      </Text>
      <Text fontWeight="bold">고결 GO-GYEOL</Text>
      <Text marginBottom="30px">대전광역시, 서구 거주중</Text>
      <Text underline marginBottom="10px" style={{ display: "inline-block" }}>
        rhruf3297@gmail.com
      </Text>
      <br />
      <Text underline style={{ display: "inline" }}>
        Resume
      </Text>
      <IconBoxWrapper>
        <IconWrapper href="https://www.linkedin.com/feed/" target="_blank">
          <img src="./images/linkedin.svg"></img>
          <div style={{ lineHeight: "30px" }}>LinkedIn</div>
        </IconWrapper>
        <IconWrapper href="https://github.com/GO-GYEOL" target="_blank">
          <img src="./images/github.svg"></img>
          <div style={{ lineHeight: "30px" }}>Github</div>
        </IconWrapper>
      </IconBoxWrapper>
      <img style={{ width: "100%" }} src="./images/rocket.png"></img>
    </Wrapper>
  );
};

export default ContactLeft;
