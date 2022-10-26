import React from "react";

const Skill = () => {
  const skills = [
    {
      name: "Programming Language",
      data: ["C", "C++", "Python", "JavaScript"],
    },
    {
      name: "Web Development Frontend",
      data: ["React.js", "Tailwind css", "Material UI", "CSS", "HTML"],
    },
    {
      name: "Android App Development",
      data: ["React Native"],
    },
    {
      name: "React Libary",
      data: ["Redux"],
    },
    {
      name: "Web Development Backend",
      data: ["PHP", "node.js", "Express.js", "Rest API"],
    },
    {
      name: "Database",
      data: ["MySQL", "MongoBD"],
    },
    {
      name: "Tools",
      data: ["GitHub", "GitHub desktop", "git", "Postman", "Trello"],
    },
    {
      name: "Framework",
      data: ["Flask", "Django"],
    },
  ];
  return (
    <div className="m-10">
      <p className="text-center text-4xl transform hover:scale-110 duration-300 cursor-pointer text-red-600">
        My Skills
      </p>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mt-10 ">
        {skills.map((skill) => {
          return (
            <div
              key={skill.name}
              className=" p-3 overflow-hidden shadow-lg h-72 cursor-pointer hover:shadow-red-600 border border-red-500 transform hover:scale-110 duration-300 rounded-lg hover:bg-gradient-to-br from-red-100 to-red-500 hover:text-white"
            >
              <div>
                <div>
                  <p className="text-center text-2xl ">{skill.name}</p>
                </div>
                <div>{
                  skill.data.map((s)=>{
                    return<p key={s} className='text-xl text-center font-mono mt-3'>{s}</p>

                  })
                  }</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
