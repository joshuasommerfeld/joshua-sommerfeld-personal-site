import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

import {spacing, pallete} from "../utils/styles";
import EmploymentEvent from "./EmploymentEvent";

const EmploymentTitle = styled.h3`
  margin-left: ${spacing.lg};
  border-bottom: 5px solid ${pallete.highlight};
  width: 320px;
`;

const EmploymentInner = styled.div`
  background: ${pallete.background02};
  padding: ${spacing.sm} ${spacing.xl};
  max-width: 700px;
  margin: auto;
`;

const EmploymentOuter = styled.div`
  background: ${pallete.background02};
  width: 100%;
`;

export default ({ history }) => {
  return (
      <Fragment>
        <EmploymentTitle>Employment and Education History</EmploymentTitle>
        <EmploymentOuter>
          <EmploymentInner>
            {history.map(event => (
                <EmploymentEvent key={`event-${event.title}`} {...event} />
            ))}
          </EmploymentInner>
        </EmploymentOuter>
      </Fragment>

  )
}