import React from "react";
import styled from "styled-components";
import Projects from "./Projects";
import SkillsAndTools from "./Skills&Tools";
const Wrapper = styled.div`
  width: 100%;
  padding: 0 50px;
  margin-top: 150px;
  color: #ffffffde;
  font-family: "Roboto", sans-serif;
`;

const MoreBtn = styled.button`
  padding: 10px 70px;
  background-color: #1c1c1c;
  border: 1px solid gray;
  color: lightgray;
  display: block;
  margin: 48px auto;
  border-radius: 8px;
  margin-bottom: 100px;
  font-weight: 400;
`;

const ContentsComponent = React.forwardRef((props, ref) => {
  return (
    <Wrapper>
      <div ref={ref}></div>
      {/* 스타일컴포넌트에 ref 지정하면 작동 안한다.*/}
      <Projects />
      <MoreBtn>
        <a href="https://github.com/GO-GYEOL">SEE MORE ON GITHUB</a>
      </MoreBtn>
      <SkillsAndTools />
    </Wrapper>
  );
});
export default ContentsComponent;
