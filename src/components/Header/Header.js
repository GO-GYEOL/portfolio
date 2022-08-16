import React, { useRef } from "react";
import styled from "styled-components";
import ScrollFn from "../../utils";
import Cover from "./Cover";
import Introduction from "./Introduction";

const Header = styled.div`
  width: 100%;
  background-image: url("https://www.theelipan.com/static/media/bg-effects.2715491b.png");
  background-repeat: no-repeat;
  background-size: contain;
  padding: 0px 50px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

const Navbar = styled.div`
  width: 100%;
  background-color: rgba(18, 18, 18, 1);
  color: #ffffffde;
  display: flex;
  justify-content: end;
  padding: 20px;
  li:nth-child(n) {
    margin-right: 30px;
    padding: 15px;
    cursor: pointer;
  }
`;

const HeaderComponent = (props) => {
  // const { element, onMoveToElement } = ScrollFn();
  return (
    <Header>
      <Navbar>
        {/* <li onClick={onMoveToElement}>Projects</li> */}
        <li>Projects</li>
        <li>Contact</li>
        <li>Resume</li>
      </Navbar>
      <Cover />
      <Introduction />
    </Header>
  );
};

export default HeaderComponent;
