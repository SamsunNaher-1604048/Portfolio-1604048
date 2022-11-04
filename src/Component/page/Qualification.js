import React from "react";

const Qualification = () => {
  const datas = [
    {
      id: "University",
      name: " Chittagong University of Engineering & Technology",
      year: 2022,
    },
    {
      id: "Collage",
      name: "Agroni Collage Rajshahi",
      year: 2016,
    },
    {
      id: "School",
      name: " Shaid Nazmul Haque Girls High School Rajshahi",
      year: 2014,
    },
    {
      id: "Attachment",
      name: "Dynamic Solution Innovators",
      year: 2022,
    },
  ];

  return (
    <div
      className="flex flex-col  mt-7  mb-4 ml-4 mr-4 rounded-lg  pt-6 lg:p-10 lg:flex-row bg-gradient-to-bl from-cyan-300 to-cyan-800"
      id="/Qualification"
    >
      <div
        className="lg:w-5/6 lg:flex lg:flex-col lg:items-center mb-8"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        <p className="text-center text-white text-5xl lg:text-4xl ">Who I am</p>
        <p className=" rounded-xl cursor-pointer text-center lg:text-xl text-2xl m-7 p-4 transform hover:scale-105 duration-300 border text-white">
          <p className="lg:text-2xl text-3xl mb-4">I am Samsun Naher</p>
          Currently I focus on frontend web development. I really enjoy fontend
          web development. My main career objective is full stack web
          development. My passion is MERN Stack. I love to learn new technology
          and I enjoy Software Development. I also enjoy solving problems.
        </p>
      </div>
      <div
        className="mb-4 lg:w-11/12"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        <p className="text-center text-cyan-700-600 lg:text-4xl text-5xl text-white">
          Qualification
        </p>
        <div className="text-center mt-7">
          {datas.map((data) => {
            return (
              <section key={data.id}>
                <article className="shadow-lg rounded-xl bg-white hover:shadow-cyan-700  mb-6 ml-4 mr-4 transform hover:scale-105 duration-300 ">
                  <p className=" lg:text-xl text-2xl">{data.id}</p>
                  <p className="lg:text-lg text-xl">{data.name}</p>
                  <p> Year:{data.year}</p>
                </article>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Qualification;
