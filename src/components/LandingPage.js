import styled from "styled-components";
import {pallete, spacing} from "../utils/styles";
import React from "react";
import {MdMailOutline} from "react-icons/md";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/all";

const LandingPage = styled.div`
  height: 100vh;
  background: ${pallete.background02};
  
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: center;
  
`;

const MobileTitle = styled.h1`
  color: ${pallete.inverse};
  text-align: center;
`;

const Separator = styled.div`
  @keyframes grow {
    0% { width: 0; border-width: 0px; }
    10% { width: 0; border-width: 1px; }
    100% { width: 100%; border-width: 10px; }
  }
  
  animation-name: grow;
  animation-delay: 0s;
  animation-duration: 4s;

  border-bottom: 10px solid ${pallete.inverse};
  width: 100%;
  height: 10px;
  
  transition: width 2s ease-out;
`;

const MobileSubTitle = styled.h2`
  color: ${pallete.inverse};  
  text-align: center;
`;

const EmailLink = styled.a`
  color: ${pallete.grey};
  text-decoration: none;
    
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  
  margin: ${spacing.sm} 0;
`;

const EmailIcon = styled(MdMailOutline)`
  font-size: 18px;
  color: ${pallete.grey};
  
  margin-right: ${spacing.sm};
`;

const LinkedInIcon = styled(AiOutlineLinkedin)`
  font-size: 18px;
  color: ${pallete.grey};
  
  margin-right: ${spacing.sm};
`;

const GitHubIcon = styled(AiFillGithub)`
  font-size: 18px;
  color: ${pallete.grey};
  
  margin-right: ${spacing.sm};
`;

const SeeMore = styled.button`
  @keyframes buttongrow {
    0% { opacity: 0%; }
    90% { opacity: 0%; }
    100% {   }
  }
  
  animation-name: buttongrow;
  animation-duration: 4s;
  
  font-size: 16px;
  font-weight: 700;
  color: ${pallete.inverse};
  background: ${pallete.background02};
  
  margin-top: 20vh;
  padding: ${spacing.md};
  border: 5px solid ${pallete.inverse};
`;

const NameSpan = styled.span`
  color: ${pallete.highlight};
`;

export default ({ onSeeMore }) => (
  <LandingPage>
        <MobileTitle>Hello, I'm <NameSpan>Joshua Sommerfeld</NameSpan></MobileTitle>
    <Separator/>
    <MobileSubTitle>I'm a full-stack software developer</MobileSubTitle>
    <EmailLink href="mailto:joshua.sommerfeld91@gmail.com"><EmailIcon/>joshua.sommerfeld91@gmail.com</EmailLink>
    <EmailLink href="https://www.linkedin.com/in/joshuasommerfeld/"><LinkedInIcon />www.linkedin.com/in/joshuasommerfeld</EmailLink>
    <EmailLink href="https://github.com/joshuasommerfeld/joshua-sommerfeld-personal-site"><GitHubIcon />View the source for this site on GitHub</EmailLink>
    <SeeMore onClick={onSeeMore}>Come on down</SeeMore>
  </LandingPage>
)