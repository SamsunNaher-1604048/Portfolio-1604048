import React from "react";
import CheckIcon from '@mui/icons-material/Check';

const Qualification = () => {
  const datas = [
    { id: "School", name: " Shaid Nazmul Haque Girls High School Rajshahi", year: 2014 },
    {
      id: "Collage",
      name: "Agroni Collage Rajshahi",
      year: 2016,
    },
    {
      id: "University",
      name: " Chittagong University of Engineering & Technology",
      year: 2022,
    },
    {
      id: "Attachment",
      name: "Dynamic Solution Innovators",
      year: 2022,
    },
  ];

  return (
    <div className="flex flex-col  mt-5 lg:m-12 lg:flex-row" id="/Qualification">
      <div className="lg:w-5/6 lg:flex lg:flex-col lg:items-center mb-8">
        <p className="text-center text-3xl text-red-600 md:text-4xl ">
          About Me
        </p>
        <p className=" rounded-xl cursor-pointer text-center text-xl m-7 p-4 hover:shadow-lg hover:shadow-red-600 transform hover:scale-110 duration-300 border border-red-600 ">
           Hello ,I am Samsun Naher. Currently I focus on frontend web development. My
          main career objective is full stack web development. I love to learn
          new technology and I enjoy Software Development. I also enjoy
          solving problems. 
          
          <p>Some technology I currently work with:</p>
           <p className="font-mono mt-5"> <CheckIcon/> React.js</p>
           <p  className="font-mono">  <CheckIcon/> Node.js</p>
           <p  className="font-mono"> <CheckIcon/> Express.js</p>
           <p  className="font-mono">  <CheckIcon/>MongDB</p>
        </p>
      </div>
      <div className="mb-4 lg:w-11/12">
        <p className="text-center text-3xl text-red-600 md:text-4xl ">
          Qualification
        </p>
        <div className="text-center mt-7">
          {datas.map((data)=>{
            return <section key={data.id}>
              <article className='shadow-lg rounded-xl hover:shadow-red-600 mb-6 ml-4 mr-4 transform hover:scale-110 duration-300 '>
                <p className="text-xl">{data.id}</p>
                <p className="text-lg">{data.name}</p>
                <p> Year:{data.year}</p>
              </article>
            </section>
          })}
        </div>
      </div>
    </div>
  );
};

export default Qualification;
