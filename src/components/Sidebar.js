import React from 'react';
import styled from 'styled-components';

import {breakpoint, pallete, spacing} from '../utils/styles';
import Text from "./Text";

const BarContainer =  styled.div`
  display: none;
  background: ${pallete.background02};
  
  height: 100vh;
  width: 15vw;
  max-width: 200px;
  
  padding: ${spacing.sm} ${spacing.sm};
  
  ${breakpoint.md`
    display: block;
  `}
`;

const BarHeading = styled.h1`
  color: ${pallete.inverse}; 
`;

const BarSubHeading = styled.h2`
  color: ${pallete.grey}; 
`;

export default () => (
  <BarContainer>
    <BarHeading>Joshua Sommerfeld</BarHeading>
    <BarSubHeading>Full Stack Developer</BarSubHeading>
  </BarContainer>
)