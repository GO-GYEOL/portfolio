import React, { useState } from "react";
import styled from "styled-components";
import { ProjectData } from "../../ProjectsData";

const ProjectBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
`;
const ProjectPhoto = styled.div`
  width: 45%;
  height: 250px;
  background-image: url(${(props) => props.photoURL});
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  margin-bottom: 30px;
`;
const ProjectIntro = styled.div`
  width: 45%;
`;
const Text = styled.div`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
`;
const Skills = styled.div`
  display: flex;
`;
const SkillsIcon = styled.div`
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 4px 8px;
  margin: 10px 10px 0px 0px;
  font-size: 13px;
`;
const Projects = (props) => {
  const [data, setData] = useState(ProjectData);
  return (
    <>
      <Text fontSize="20px" padding="20px 0px">
        Projects
      </Text>
      {!data
        ? null
        : data.map((item) => {
            if (item.id % 2 === 1) {
              return (
                <ProjectBox key={item.id}>
                  <ProjectPhoto photoURL={item.photoURL} />
                  <ProjectIntro>
                    <Text>{item.title}</Text>
                    <Text>{item.intro}</Text>
                    <Skills>
                      {item.skills &&
                        item.skills.map((item) => (
                          <SkillsIcon>{item}</SkillsIcon>
                        ))}
                    </Skills>
                  </ProjectIntro>
                </ProjectBox>
              );
            } else {
              return (
                <ProjectBox key={item.id}>
                  <ProjectIntro>
                    <Text>{item.title}</Text>
                    <Text>{item.intro}</Text>
                    <Skills>
                      {item.skills &&
                        item.skills.map((item) => (
                          <SkillsIcon>{item}</SkillsIcon>
                        ))}
                    </Skills>
                  </ProjectIntro>
                  <ProjectPhoto photoURL={item.photoURL} />
                </ProjectBox>
              );
            }
          })}
    </>
  );
};

export default Projects;
