import React from 'react';
import styled from 'styled-components';

import {spacing, pallete} from "../utils/styles";

const Hero = styled.div`
  background: url(${props => props.uri});
  background-repeat: no-repeat;
  background-size: cover;
  
  height: 60px;
  width: 60px;
  
  border: 4px solid white;
  border-radius: 100000px;
`;

export default ({ uri }) => (<Hero uri={uri} />)