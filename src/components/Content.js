import React, { useRef } from "react";
import styled from "styled-components";

import EmploymentHistory from "./EmploymentHistory";
import LandingPage from "./LandingPage";

import history from "../history";
import capabilities from "../capabilities";
import About from "./About";

const ContentWrapper = styled.div``;

const scrollToRef = (ref) => window.scrollTo({
  top: ref.current.offsetTop,
  left: 0,
  behavior: 'smooth'
});

export default () => {

  const aboutRef = useRef(null);

  const scrollToAbout = () => scrollToRef(aboutRef);

  return (
      <ContentWrapper>
        <LandingPage onSeeMore={scrollToAbout}/>
        <div ref={aboutRef}>
          <About capabilities={capabilities}/>
        </div>
        <EmploymentHistory history={history}/>
      </ContentWrapper>
  )
};