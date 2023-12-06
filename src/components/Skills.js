import React from 'react';
import { Fade } from 'react-awesome-reveal';

// components
import { Heading5Bigger, PinkHighlight, BlueHighlight, DarkBlueHighlight, GreyHighlight, ListItem } from './Typography';
import { SkillsWrapper, ListOuterWrapper, ListWrapper, List } from './SkillsStyles';

// arrays

const CodeSkills = ['HTML5', 'CSS3', 'Javascript ES6', 'React.js', 'Styled components', 'Github', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'];

const ToolboxSkills = ['Midjourney AI', 'ChatGPT', 'Postman', 'Figma', 'Slack', 'Notion'];

const MoreSkills = ['Communication', 'Agile methodology', 'Web accessibility', 'Time management', 'Growth mindset'];

const UpcomingSkills = ['UX design', 'Typescript'];

const Skills = () => {
  return (
    <SkillsWrapper>
      <Fade
        duration={2000}>
        <Heading5Bigger>
            Skills
        </Heading5Bigger>
        <ListOuterWrapper>
          <ListWrapper>
            <PinkHighlight>Code </PinkHighlight>
            <List>
              {CodeSkills.map((item) => <ListItem key={item}>{item}</ListItem>)}
            </List>
          </ListWrapper>
          <ListWrapper>
            <BlueHighlight>Toolbox </BlueHighlight>
            <List>
              {ToolboxSkills.map((item) => <ListItem key={item}>{item}</ListItem>)}
            </List>
          </ListWrapper>
          <ListWrapper>
            <DarkBlueHighlight>More </DarkBlueHighlight>
            <List>
              {MoreSkills.map((item) => <ListItem key={item}>{item}</ListItem>)}
            </List>
          </ListWrapper>
          <ListWrapper>
            <GreyHighlight>Upcoming </GreyHighlight>
            <List>
              {UpcomingSkills.map((item) => <ListItem key={item}>{item}</ListItem>)}
            </List>
          </ListWrapper>
        </ListOuterWrapper>
      </Fade>
    </SkillsWrapper>
  )
};

export default Skills;