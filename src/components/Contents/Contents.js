import React from "react";
import styled from "styled-components";
import Projects from "./Projects";
const Wrapper = styled.div`
  width: 100%;
  padding: 0 50px;
  margin-top:100px;
  color:white;
`;
const ContentsComponent = (props) => {
  return (
    <Wrapper>
      <Projects />
    </Wrapper>
  );
};

export default ContentsComponent;
