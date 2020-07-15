import React, {Fragment} from "react";
import styled from "styled-components";
import {breakpoint, pallete, spacing} from "../utils/styles";

import capabilities from "../capabilities";


const CapabilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  padding: ${spacing.sm};
`;


const Capability = styled.span`
  background: ${pallete.highlight};
  color: ${pallete.inverse};
  margin: ${spacing.xs};
  padding: ${spacing.xs};
  
  font-weight: 700;
  line-height: 24px;
`;

export default () => (
    <Fragment>
      <CapabilityContainer>
        {capabilities.map(capability => <Capability>{capability}</Capability>)}
      </CapabilityContainer>
    </Fragment>
)
