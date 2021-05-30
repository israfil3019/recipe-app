import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./aboutStyle";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} alt="coding" />
      <InfoContainer>
        <HeaderContainer>
          <h1>
            About Software Developer <span>İSRAFİL</span>
          </h1>
        </HeaderContainer>
        <h1>I'm İsrafil.</h1>
        <h2>I’m currently learning Full-Stack Development Languages.</h2>
        <h2>I've already known JS, ReactJS,SQL, Python, Html, CSS.</h2>
        <h2>
          <a href="mailto:israfil3019@gmail.com">Send email</a> :
          israfil3019@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
