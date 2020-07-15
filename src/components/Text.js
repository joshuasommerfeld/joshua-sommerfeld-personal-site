import React from 'react';
import styled from 'styled-components';

import {spacing, pallete} from "../utils/styles";

const Text = styled.p`
  padding: ${spacing.xxs} ${spacing.sm};
  color: ${pallete.text};
  li::before {
    content: "• "
  }
`;

export default ({ children }) => (<Text>{children}</Text>)