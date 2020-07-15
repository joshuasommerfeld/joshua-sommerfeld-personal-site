import React from "react";
import styled from "styled-components";

import Text from "./Text";
import EmploymentHistory from "./EmploymentHistory";
import LandingPage from "./LandingPage";
import {breakpoint, pallete, spacing} from "../utils/styles";

import history from "../history";
import About from "./About";

const ContentWrapper = styled.div``;
const Body = styled.div`
  padding: ${spacing.sm}
`;

const EmploymentColumn = styled.div`
  background: ${pallete.background02};
  width: 100%;
`;


export default () => (
    <ContentWrapper>
      <LandingPage />
      <About />
      <EmploymentColumn>
        <EmploymentHistory history={history}/>
      </EmploymentColumn>
    </ContentWrapper>
)