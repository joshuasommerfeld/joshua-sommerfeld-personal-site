import React from 'react';
import styled from 'styled-components';

import {spacing, pallete, breakpoint} from "../utils/styles";
import Hero from "./Hero";

const EventLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-left: ${spacing.lg};
  
  ${breakpoint.md`
    padding-left: 0;
    grid-template-columns: 110px 1fr;
  `}
`;

const EventContainer = styled.div`
  padding: ${spacing.md};
  
  border-left: 10px solid ${props => props.timelineColor ? props.timelineColor: pallete.background01};
`;

const EventBody = styled.div`
  background: ${props => props.backgroundColor ? props.backgroundColor : pallete.background01};
  
  display: grid;
  grid-template-rows: auto auto 1fr;
  
  padding: 0 ${spacing.md};
`;

const Title = styled.h3`
  color: ${pallete.text};
  margin: ${spacing.sm} 0;
`;

const DesktopDateContainer = styled.div`
  display: none;
  ${breakpoint.md`
    display: block;
  `}
`;

const MobileDateContainer = styled.div`
  display: block;
  ${breakpoint.md`
    display: none;
  `}
`;

const Date = styled.h4`
  color: ${pallete.text};
  font-weight: 600;
  margin: 0 32px 0 0;
  text-align: right;
  ${breakpoint.md`
    color: ${pallete.inverse};
    margin: 38px 32px 0 0;
  `}
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventIcon = styled.div`
  position: absolute;
  width: 60px;
  transform: translateX(-51px);
`;

export default ({
    date,
    title,
    description,
    icon,
    timelineColor
}) => {
  return (
      <EventLayout>
        <DesktopDateContainer>
          <Date>{date}</Date>
        </DesktopDateContainer>
        <EventContainer timelineColor={timelineColor}>
          { icon && <EventIcon><Hero uri={icon} /></EventIcon>}
          <EventBody>
            <Title>{title}</Title>
            <MobileDateContainer>
              <Date>{date}</Date>
            </MobileDateContainer>
            <Body>{description}</Body>
          </EventBody>
        </EventContainer>
      </EventLayout>

  )
}