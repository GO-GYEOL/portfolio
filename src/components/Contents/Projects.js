import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ProjectData } from "../../ProjectsData";

const ProjectBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #ffffffde;
  margin-top: 15px;
  margin-bottom: 50px;
`;
const ProjectPhoto = styled.div`
  width: 50%;
  height: 350px;
  background-image: url(${(props) => props.photoURL});
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  margin-bottom: 30px;
  border-radius: 20px;
`;
const ProjectIntro = styled.div`
  width: 45%;
  font-size:15px;
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};
  font-weight: ${(props) => props.fontWeight};
  ${(props) => {
    if (props.gradient) {
      return css`
        font-size: 20px;
        font-weight: bold;
        background-color: #8e9ffa;
        background-image: linear-gradient(43deg, #a162e8, #f7ce68 30%, #85ffbd);
        color: transparent;
        -webkit-background-clip: text;
        margin-bottom: 10px;
      `;
    }
  }}
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
const Image = styled.img`
  margin-top: 15px;
  margin-right: 18px;
`;

const Projects = (props) => {
  const [data, setData] = useState(ProjectData);
  return (
    <>
      <Text fontSize="24px" padding="20px 0px" fontWeight="bold">
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
                    <div>
                      <Text gradient>{item.title}</Text>
                      <Text>{item.intro}</Text>
                      <Skills>
                        {item.skills &&
                          item.skills.map((skill) => (
                            <SkillsIcon>{skill}</SkillsIcon>
                          ))}
                      </Skills>
                      <a href={item.githubURL} target="_blank">
                        <Image src="./images/github.svg"></Image>
                      </a>
                      <a href={item.link} target="_blank">
                        <Image src="./images/external-link.svg"></Image>
                      </a>
                    </div>
                  </ProjectIntro>
                </ProjectBox>
              );
            } else {
              return (
                <ProjectBox key={item.id}>
                  <ProjectIntro>
                    <div>
                      <Text gradient>{item.title}</Text>
                      <Text>{item.intro}</Text>
                      <Skills>
                        {item.skills &&
                          item.skills.map((item) => (
                            <SkillsIcon>{item}</SkillsIcon>
                          ))}
                      </Skills>
                      <a href={item.githubURL} target="_blank">
                        <Image src="./images/github.svg"></Image>
                      </a>
                      <a href={item.link} target="_blank">
                        <Image src="./images/external-link.svg"></Image>
                      </a>
                    </div>
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
