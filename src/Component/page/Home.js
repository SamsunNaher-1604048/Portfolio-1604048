import React from "react";


const Home = () => {
  return (
    <div className="pt-4 mb-16 flex flex-col-reverse items-center lg:flex-row lg:justify-between " id="/">
      <div className="flex flex-col  items-center pt-3 lg:pl-20 cursor-pointer ransform hover:scale-105 duration-300 ">
        <div className=" text-cyan-700 text-4xl mb-2 ">Hello I am,</div>
        <div className="  font-bold text-5xl text-center ">SAMSUN NAHER</div>
        <div className=" font-mono text-cyan-700  text-2xl text-center">
          A Fontend Wed Developer
        </div>
        
      </div>

      <img
        className="md:h-4/5 md:w-4/5 lg:w-3/6 lg:h-3/6 lg:pt-20 transform hover:scale-105 duration-300 "
        src="1.png "
        alt=""
      />
    </div>
  );
};

export default Home;
