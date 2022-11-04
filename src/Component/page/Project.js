import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Project = () => {
  const projects = [
    {
      name: "Note taking app ",
      des: "I built a note taking app by using react native.I used multiple Hooks, prop drilling and AsyncStorage for store data.",
      tech: "React Native",
      link: "https://github.com/SamsunNaher-1604048/project",
    },
    {
      name: "Quiz app",
      des: "It is a  multiple page application. This application help to build knowledge about any topic",
      tech: "React.js Maturial UI",
      link: "https://github.com/SamsunNaher-1604048/quizapp",
    },
    {
      name: "Note taking app",
      des: "It is a simple note taking app. It can also store data, we can also search about note",
      tech: "React.js",
      link: "https://github.com/SamsunNaher-1604048/Note-app",
    },
    {
      name: "Book app",
      des: "It is a CRUD app.I used Redux for state management",
      tech: "React.js, Redux",
      link: "https://github.com/SamsunNaher-1604048/redux/tree/main/react-redux",
    },
    {
      name: "Country app",
      des: "It is a single page application.By using Search ber we can scarch about country",
      tech: "React.js",
      link: "https://github.com/SamsunNaher-1604048/countryApp",
    },
    {
      name: "Hall management project",
      des: "This project is made for both student and hall office.",
      tech: "HTML CSS MySql PHP",
      link: "",
    },
    {
      name: "Game management project",
      des: "This project is made for admin gamer and game developer,so that they can explore about game",
      tech: "HTML CSS MySql PHP",
      link: "",
    },
    {
      name: "Calendar project",
      des: " This project is all about display calendar according to user",
      tech: "Java , Java GUI",
      link: "",
    },
    {
      name: "Bouncing ball game",
      des: "This is just like our childhood game. I try to recreat it",
      tech: "Java , Java GUI",
      link: "",
    },
    {
      name: "Brain tumor detection project",
      des: "This project Help to detect brain tumer from X-ray image",
      tech: "CNN, Tkinter",
      link: "",
    },
    {
      name: "Malaria detection project",
      des: "This project  help to detect malaria from blood image",
      tech: "Transfer Learnin",
      link: "",
    },
    {
      name: "Fake news detection",
      des: "This project is all about detect fake news",
      tech: "NLp, ANN",
      link: "",
    },
  ];

  return (
    <div className="m-10 " id="/project">
      <p className="text-center text-5xl lg:text-4xl text-white transform hover:scale-110 duration-300 cursor-pointer bg-gradient-to-br from-cyan-300 to-cyan-700 pt-6 pb-6 rounded-lg">
        My Project
      </p>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 mt-10 ">
        {projects.map((project) => {
          if (project.link.length !== 0) {
            return (
              <div
                data-aos="zoom-out-up"
                data-aos-duration="3000"
                key={project.name}
                className=" p-3 overflow-hidden shadow-lg h-72 cursor-pointer hover:shadow-cyan-700 border border-cyan-700 transform hover:scale-110 duration-300 rounded-lg hover:bg-gradient-to-tl from-cyan-200 to-cyan-700 hover:text-white"
              >
                <p className="lg:text-3xl text-4xl text-center ">
                  {project.name}
                </p>
                <p className="lg:text-xl text-2xl text-center mt-4">
                  {project.des}
                </p>
                <p className="font-mono text-center mt-4 text-xl">
                  {project.tech}
                </p>
                <div className="text-center">
                  <a href={project.link}>
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            );
          } else {
            return (
              <div
                data-aos="zoom-out-up"
                data-aos-duration="3000"
                key={project.name}
                className=" p-3 overflow-hidden shadow-lg h-72 cursor-pointer hover:shadow-cyan-700 border border-cyan-700 transform hover:scale-110 duration-300 rounded-lg hover:bg-gradient-to-tl from-cyan-200 to-cyan-700 hover:text-white"
              >
                <p className="lg:text-3xl text-4xl text-center ">
                  {project.name}
                </p>
                <p className="lg:text-xl text-2xl text-center mt-4">
                  {project.des}
                </p>
                <p className="font-mono text-center mt-4 text-xl">
                  {project.tech}
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Project;
