import styled from "styled-components";
import {breakpoint, pallete, spacing} from "../utils/styles";
import React, {Fragment} from "react";
import Capabilities from "./Capabilities";

const About = styled.div`
  color: ${pallete.text};
  background: ${pallete.background02};

  width: 100%;
  padding: ${spacing.lg};
`;

const AboutInner = styled.div`
  margin: auto;
  max-width: 1000px;
`;

const AboutTitle = styled.h3`
  margin-left: ${spacing.lg};
  border-bottom: 5px solid ${pallete.highlight};
  max-width: 60px;
`;

const AboutText = styled.p`
  padding: ${spacing.xxs} ${spacing.sm};
  color: ${pallete.inverse};
`;

const CapabilitiesTitle = styled.h3`
  color: ${pallete.inverse};
  border-bottom: 5px solid ${pallete.highlight};
  padding-left: 12px;
  
  margin: ${spacing.md} 0 ${spacing.xs};
`;

const AboutLayout = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpoint.md`
    flex-direction: row;
    flex-wrap: wrap;
  `}
`;

const HeadshotDescription = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  
  ${breakpoint.md`
      grid-template-columns: auto 1fr;
  `}
`;

const Headshot = styled.div`
  background: url(${props => props.uri});
  background-repeat: no-repeat;
  background-size: cover;
    
  margin: auto;
  
  ${breakpoint.md`
    margin: initial;
  `}
  
  border: 4px solid ${pallete.highlight};
  border-radius: 10000px;
  
  min-width: 300px;
  width: 300px;
  height: 340px;
`

export default ({ capabilities }) => (
    <Fragment>
      <AboutTitle data-testid="about-title">About</AboutTitle>
      <About>
        <AboutInner>
          <AboutLayout>
            <HeadshotDescription>
              <Headshot uri="https://i.imgur.com/6GOMYO7.jpg" />
              <div>
                <AboutText>
                  I'm an energetic, passionate, outcome focused software developer hailing from Melbourne, Australia.
                  I have a diverse set of capabilities in the fields of cloud based application development, web development and data analytics.
                </AboutText>
                <AboutText>
                  I design and run tabletop role playing games, and am a published board game designer as my side hustle. I also make a bunch of music.
                  Hit me up if you want to talk nerdy!
                </AboutText>
                <CapabilitiesTitle>Capabilities</CapabilitiesTitle>
                <Capabilities capabilities={capabilities}/>
              </div>
            </HeadshotDescription>
          </AboutLayout>
        </AboutInner>
      </About>
    </Fragment>
)