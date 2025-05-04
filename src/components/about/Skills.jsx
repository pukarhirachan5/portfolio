import React from 'react';

const skillsList = [
  {
   name: 'JavaScript',
   icons:'bx bxl-javascript'
  },
  {
   name: 'Java',
   icons:'bx bxl-java'
  },
  {
   name: 'Python',
   icons:'bx bxl-python'
  },
  {
   name: 'Html',
   icons:'bx bxl-html5'
  },
  {
   name: 'Sql',
   icons:'bx bxl-postgresql'
  },
  {
   name: 'Css',
   icons:'bx bxl-css3'
  },
  {
   name: 'React',
   icons:'bx bxl-react'
  },
  {
   name: 'Figma',
   icons:'bx bxl-figma'
  },
];

const Skills = () => {
  return (
    <div className="skill_box about_container grid" id="skills">
      <div className="skill_title">
        <h1>Skills</h1>
      </div>

      <div className="about_boxes grid">
        {skillsList.map((skill, index) => (
          <div className="about_box" key={index}>
            <i class={skill.icons}></i>
            <div>
              <h3 className="about_title">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
