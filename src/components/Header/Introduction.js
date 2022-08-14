import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  color: white;
`;
const Text = styled.div`
  font-size: ${(props) => props.fontSize};
`;

const Introduction = (props) => {
  return (
    <Wrapper>
      <Text fontSize="45px">
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
