import React  from "react";

const Project = () => {
  const projects = [
    {
      name: "Note taking app using react native",
      des: "I built a note taking app by using react native.I used multiple Hooks, prop drilling and AsyncStorage for store data.",
      tech: "React Native",
    },
    {
      name: "Quiz app",
      des: "It is a  multiple page application. This application help to build knowledge about any topic",
      tech: "React.js Maturial UI",
    },
    {
      name: "Note taking app",
      des: "It is a simple note taking app. It can also store data, we can also search about note",
      tech: "React.js",
    },
    {
      name: "Book app",
      des: "It is a CRUD app.I used Redux for state management",
      tech: "React.js, Redux",
    },
    {
      name: "Country app",
      des: "It is a single page application.By using Search ber we can scarch about country",
      tech: "React.js",
    },
    {
      name: "Hall management project",
      des: "This project is made for both student and hall office.Funclitiy are add student search student and see hall notic",
      tech: "HTML CSS MySql PHP",
    },
    {
      name: "Game management project",
      des: "This project is made for admin gamer and game developer,so that they can explore about game",
      tech: "HTML CSS MySql PHP",
    },
    {
      name: "Calendar project",
      des: " This project is all about display calendar according to user",
      tech: "Java , Java GUI",
    },
    {
      name: "Bouncing ball game",
      des: "This is just like our childhood game. I try to recreat it",
      tech: "Java , Java GUI",
    },
    {
      name: "Brain tumor detection project",
      des: "This project Help to detect brain tumer from X-ray image",
      tech: "CNN, Tkinter",
    },
    {
      name: "Malaria detection project",
      des: "This project  help to detect malaria from blood image",
      tech: "Transfer Learnin",
    },
    {
      name: "Fake news detection",
      des: "This project is all about detect fake news",
      tech: "NLp, ANN",
    },
  ];

  return (
    <div className="m-10 " id="/project">
      <p className="text-center text-4xl text-red-600 transform hover:scale-110 duration-300 cursor-pointer">My Project</p>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 mt-10 ">
        {projects.map((project) => {
          return <div key={project.name} className=' p-10 overflow-hidden shadow-lg h-64 cursor-pointer hover:shadow-red-600 border border-red-600 transform hover:scale-110 duration-300 rounded-lg hover:bg-gradient-to-tl from-red-200 to-red-600 hover:text-white'>
            <p className="text-3xl text-center ">{project.name}</p>
            <p className="text-xl text-center mt-4">{project.des}</p>
            <p className='font-mono text-center mt-4'>{project.tech}</p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Project;
