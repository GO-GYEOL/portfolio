import React, { useRef } from "react";

const ScrollFn = (props) => {
  const element = useRef(null);
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { element, onMoveToElement };
};

export default ScrollFn;
