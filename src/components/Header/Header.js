import React from "react";
import styled from "styled-components";
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

const HeaderComponent = (props) => {
  return (
    <Header>
      <Cover />
      <Introduction />
    </Header>
  );
};

export default HeaderComponent;
