import React, {Fragment} from "react";
import styled from "styled-components";
import {pallete, spacing} from "../utils/styles";

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

export default ({ capabilities }) => (
    <Fragment>
      <CapabilityContainer>
        {capabilities.map(capability => <Capability>{capability}</Capability>)}
      </CapabilityContainer>
    </Fragment>
)
