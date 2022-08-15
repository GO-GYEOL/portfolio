import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.div`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const ImageAndText = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
`;

const SkillsAndTools = (props) => {
  return (
    <Wrapper>
      <Text fontSize="24px">Skills & Tools</Text>
      <ImageWrapper>
        <ImageAndText>
          <Image src="./images/javascript-original.svg"></Image>
          <Text>Javascript</Text>
        </ImageAndText>
        <ImageAndText>
          <Image src="./images/react-original.svg"></Image>
          <Text>Javascript</Text>
        </ImageAndText>
        <ImageAndText>
          <Image src="./images/firebase.svg"></Image>
          <Text>Javascript</Text>
        </ImageAndText>
        <ImageAndText>
          <Image src="./images/html5-original.svg"></Image>
          <Text>Javascript</Text>
        </ImageAndText>
        <ImageAndText>
          <Image src="./images/css3-original.svg"></Image>
          <Text>Javascript</Text>
        </ImageAndText>
      </ImageWrapper>
    </Wrapper>
  );
};

export default SkillsAndTools;
