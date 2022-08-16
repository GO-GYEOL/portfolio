import React from "react";
import styled, { css } from "styled-components";
const Wrapper = styled.div`
  color: #ffffffde;
`;
const Text = styled.div`
  font-size: ${(props) => props.fontSize};
  ${(props) => {
    if (props.gradient) {
      return css`
        font-size: 45px;
        font-weight: bold;
        background-color: #8e9ffa;
        background-image: linear-gradient(43deg, #a162e8, #f7ce68 30%, #85ffbd);
        color: transparent;
        -webkit-background-clip: text;
        margin-bottom: 10px;
      `;
    }
  }}
`;

const Introduction = (props) => {
  return (
    <Wrapper>
      <Text gradient>
        Hello, I'm Go-gyeol <br />
      </Text>
      <Text fontSize="15px">
        프론트엔드 개발자를 희망하고 있는 고결입니다. <br />
        느려도 꾸준하게, 평생을 배운다는 자세를 가지고 <br />
        맡은바 최선을 다하는 사람이 되겠습니다.
      </Text>
    </Wrapper>
  );
};

export default Introduction;
