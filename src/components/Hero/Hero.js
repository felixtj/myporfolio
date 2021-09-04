import React from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];

const Hero = (props) => (
  <Section row nopadding>   
      <LeftSection>
        <RoughNotationGroup show={true}>
          <SectionTitle main center>
            Helo <br />
            I am a <RainbowHighlight color={colors[0]}>Web Application Developer</RainbowHighlight>      
          </SectionTitle>
          
          <SectionText>
            I help companies develop <RainbowHighlight color={colors[1]}>dynamic websites</RainbowHighlight> and other 
            custom <RainbowHighlight color={colors[2]}>web applications</RainbowHighlight> for your business needs
          </SectionText>
          <Button onClick={()=>window.location="https://api.whatsapp.com/send/?phone=62817825500&text=Helo,%20I%20would%20like%20to%20build%20something"}>Lets Discuss</Button>
          </RoughNotationGroup>
      </LeftSection>
          
  </Section>
);

export default Hero;