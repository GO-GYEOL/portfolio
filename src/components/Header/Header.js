import React from "react";
import styled from "styled-components";
import Cover from "./Cover";
import Introduction from "./Introduction";

const Header = styled.div`
  width: 100%;
  background-image: url("https://www.theelipan.com/static/media/bg-effects.2715491b.png");
  /* background-position: center; */
  background-repeat: no-repeat;
  background-size: contain;
  padding: 0px 50px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

const Navbar = styled.div`
  width: 100%;
  background-color: rgba(18, 18, 18, 1);
  color: white;
  display: flex;
  justify-content: end;
  padding: 20px;
  li:nth-child(n) {
    margin-right: 30px;
    padding: 15px;
  }
`;

const HeaderComponent = (props) => {
  return (
    <Header>
      <Navbar>
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
