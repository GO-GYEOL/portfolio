import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.div`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  margin-bottom: ${(props) => props.marginBottom};
  font-weight: ${(props) => props.fontWeight};
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const ImageAndText = styled.div`
  display: flex;
  flex-direction: column;
  ${Text} {
    margin: 0 auto;
  }
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
`;

const SkillsAndTools = (props) => {
  return (
    <Wrapper>
      <Text fontSize="24px" marginBottom="30px" fontWeight="bold">
        Skills & Tools
      </Text>
      <ImageWrapper>
        <ImageAndText>
          <Image src="./images/javascript-original.svg"></Image>
          <Text>Javascript</Text>
        </ImageAndText>
        <ImageAndText>
          <Image src="./images/react-original.svg"></Image>
          <Text>REACT</Text>
        </ImageAndText>
        <ImageAndText>
          <Image src="./images/firebase.svg"></Image>
          <Text>FIREBASE</Text>
        </ImageAndText>
        <ImageAndText>
          <Image src="./images/html5-original.svg"></Image>
          <Text>HTML5</Text>
        </ImageAndText>
        <ImageAndText>
          <Image src="./images/css3-original.svg"></Image>
          <Text>CSS3</Text>
        </ImageAndText>
      </ImageWrapper>
    </Wrapper>
  );
};

export default SkillsAndTools;
