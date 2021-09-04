import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
      <SectionText>
         I am proficient in an assortment of technologies, including PHP, Javascript, HTML, CSS and MYSQL, and used tools such as
         Wordpress, Shopify and Opencart for some projects.
         I have also some experience in Google Ads, Facebook Ads and some SEO as
         there was a requirements in my previous jobs, as I like to learn new things and I don't mind being multi-hats as most important I can help 
         contribute to the company or projects.
      </SectionText>
      <List>
        <ListItem>
          <ListContainer>
            {/*<DiFirebase size="3em" />*/}
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>Javascript;Reactjs,Nextjs,CSS,HTML</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <ListContainer>
            <ListTitle>Back-end</ListTitle>
            <ListParagraph>PHP, Node, Database</ListParagraph>
          </ListContainer>
        </ListItem>
      </List>

    </Section>
);

export default Technologies;
