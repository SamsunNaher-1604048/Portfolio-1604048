import React from "react";

const Skill = () => {
  const skills = [
    {
      name: "c.png",
      N: "C",
    },
    {
      name: "c++.png",
      N: "C++",
    },
    {
      name: "js.png",
      N: "JavaScript",
    },
    {
      name: "python.png",
      N: "Python",
    },
    {
      name: "React.png",
      N: "React",
    },
    {
      name: "tailwind css.png",
      N: "Tailwind css",
    },
    {
      name: "css.png",
      N: "CSS",
    },
    {
      name: "html.png",
      N: "HTML",
    },
    {
      name: "mysql.png",
      N: "MySql",
    },
    {
      name: "mongodb.jpg",
      N: "MongoDB",
    },
    {
      name: "redux.png",
      N: "Redux",
    },
    {
      name: "express.png",
      N: "Express",
    },
    {
      name: "node.png",
      N: "Node",
    },
    {
      name: "github.png",
      N: "Github",
    },
  ];
  return (
    <div className=" mt-16" id="/skill">
      <p className=" mb-6 text-center lg:text-4xl text-5xl transform hover:scale-110 duration-300 cursor-pointer text-cyan-700">
        My Skills
      </p>
      <div
        className="grid  gap-12 grid-cols-3 lg:grid-cols-6 m-3 p-10 border border-cyan-700 rounded-lg "
        
      >
        {skills.map((skill) => {
          return (
            <div
              key={skill.name}
              className=" p-3 overflow-hidden cursor-pointer  transform hover:scale-125 duration-300 rounded-lg "
              data-aos="flip-up"
              data-aos-duration="3000"
            >
              <div className="flex flex-col items-center">
                <img alt="" src={skill.name} className="h-20 w-20" />
                <p className="text-xl">{skill.N}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
