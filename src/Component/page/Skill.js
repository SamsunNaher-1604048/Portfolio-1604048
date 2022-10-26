import React from "react";

const Skill = () => {
  const skills = [
    {
      name: "c.png",
    },
    {
      name: "c++.png",
    },
    {
      name: "js.png",
    },
    {
      name: "python.png",
    },
    {
      name: "React.png",
    },
    {
      name: "tailwind css.png",
    },
    {
      name: "css.png",
    },
    {
      name: "html.png",
    },
    {
      name: "mysql.png",
    },
    {
      name: "mongodb.jpg",
    },
    {
      name: "redux.png",
    },
    {
      name: "express.png",
    },
    {
      name: "node.png",
    },
    {
      name: "github.png",
    },
  ];
  return (
    <div className="m-16" id="/skill">
      <p className="text-center text-4xl transform hover:scale-110 duration-300 cursor-pointer text-red-600">
        My Skills
      </p>
      <div className="grid sm:grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-7 mt-10 ">
        {skills.map((skill) => {
          return (
            <div
              key={skill.name}
              className=" p-3 overflow-hidden cursor-pointer  transform hover:scale-125 duration-300 rounded-lg "
            >
              <div>
                <img alt="" src={skill.name} className="h-20 w-20" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
