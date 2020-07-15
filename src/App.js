import React from 'react';
import styled from 'styled-components';
import { pallete } from "./utils/styles";

import Content from "./components/Content";

const AppBackground = styled.div`
  * {
    box-sizing: border-box;
    overflow: auto;
      font-family: Arial;
  }
  
  background: ${pallete.background01};
  width: 100%;
`;

const App = () => {
  return (
    <AppBackground>
      <Content />
    </AppBackground>
  );
}

export default App;
