import React from 'react';
import styled from 'styled-components';

import {spacing, pallete} from "../utils/styles";
import Hero from "./Hero";

const EventContainer = styled.div`
  padding: ${spacing.md};
  
  border-left: 10px solid ${props => props.timelineColor ? props.timelineColor: pallete.background01};
`;

const EventBody = styled.div`
  background: ${props => props.backgroundColor ? props.backgroundColor : pallete.background01};
  
  display: grid;
  grid-template-rows: auto auto 1fr;
`;

const Title = styled.h3`
  color: ${pallete.text};
  
  margin: ${spacing.xxs} ${spacing.md};
`;

const Date = styled.h4`
  color: ${pallete.text};
  
  margin: ${spacing.xxs} ${spacing.lg};
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
    <EventContainer timelineColor={timelineColor}>
      { icon && <EventIcon><Hero uri={icon} /></EventIcon>}
      <EventBody>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Body>{description}</Body>
      </EventBody>
    </EventContainer>
  )
}