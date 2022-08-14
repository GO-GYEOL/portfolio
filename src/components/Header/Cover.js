import lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import astronaout from "./astronaout.json";

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
`;
const Animation = styled.div`
  width: 400px;
  margin-right: 30px;
  margin-top: 100px;
`;

const Cover = (props) => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: astronaout,
    });
  }, []);

  return (
    <Wrapper>
      <Animation ref={container} />
    </Wrapper>
  );
};

export default Cover;
