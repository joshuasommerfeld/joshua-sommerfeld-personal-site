import React from 'react';
import styled from 'styled-components';

import {spacing, pallete} from "../utils/styles";
import EmploymentEvent from "./EmploymentEvent";

const HistoryContainer = styled.div`
  background: ${pallete.background02};
  padding: ${spacing.sm} ${spacing.xl};
  max-width: 700px;
  margin: auto;
`;


export default ({ history }) => {
  return (
    <HistoryContainer>
      {history.map(event => (
          <EmploymentEvent key={`event-${event.title}`} {...event} />
      ))}
    </HistoryContainer>
  )
}