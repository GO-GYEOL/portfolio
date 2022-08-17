import "./App.css";
import styled from "styled-components";
import HeaderComponent from "./components/Header/Header";
import ContentsComponent from "./components/Contents/Contents";
import FooterComponent from "./components/Footer/Footer";
import React from "react";
import useScroll from "./utils";

const Wrapper = styled.div`
  background-color: rgba(18, 18, 18, 1);
`;
const Container = styled.div`
  max-width: 1024px;
  min-width: 768px;
  margin: 0 auto;
`;
const Navbar = styled.div`
  width: 100%;
  background-color: rgba(18, 18, 18, 1);
  color: #ffffffde;
  font-weight:400;
  display: flex;
  justify-content: end;
  padding: 20px;
  li:nth-child(n) {
    margin-right: 30px;
    padding: 15px;
    cursor: pointer;
  }
`;

function App() {
  // const { element, onMoveToElement } = useScroll();
  const scrollSpot = {
    0: useScroll(),
    1: useScroll(),
    2: useScroll(),
  };
  return (
    <Wrapper>
      <Container>
        <Navbar>
          <li onClick={scrollSpot[0].onMoveToElement}>Projects</li>
          <li onClick={scrollSpot[1].onMoveToElement}>Contact</li>
          <li>Resume</li>
        </Navbar>
        <HeaderComponent />
        <ContentsComponent ref={scrollSpot[0].element} />
        <FooterComponent ref={scrollSpot[1].element} />
      </Container>
    </Wrapper>
  );
}

export default App;
