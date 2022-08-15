import React from "react";
import styled from "styled-components";
import Projects from "./Projects";
import SkillsAndTools from "./Skills&Tools";
const Wrapper = styled.div`
  width: 100%;
  padding: 0 50px;
  margin-top: 100px;
  color: white;
`;

const MoreBtn = styled.button`
  padding: 5px 70px;
  background-color: #1c1c1c;
  border: 1px solid gray;
  color: lightgray;
  display: block;
  margin: 48px auto;
  border-radius: 8px;
`;

const ContentsComponent = (props) => {
  return (
    <Wrapper>
      <Projects />
      <MoreBtn>
        <a href="#">SEE MORE ON GITHUB</a>
      </MoreBtn>
      <SkillsAndTools />
    </Wrapper>
  );
};

export default ContentsComponent;
