import React, { useRef } from "react";
import ContainerBlock from "./components/ContainerBlock";
import Hero from "./components/Hero";

const Homepage = () => {

  return (
    <ContainerBlock
      title="Git Me"
      description=""
    >
      <Hero />
    </ContainerBlock>
  )
};

export default Homepage;