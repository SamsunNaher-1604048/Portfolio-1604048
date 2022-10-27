import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const Contact = () => {
  return (
    <div id="/Contact" className="bg-cyan-700 flex flex-col items-center pb-4">
      <div className="text-center text-white pt-4 text-2xl ">
        <p>Connect with Me</p>
      </div>
      <div className="space-x-3">
        <a href="https://www.linkedin.com/in/samsun-naher-nishi-b0a423156"><LinkedInIcon sx={{ fontSize: 35, color: "white" }} /></a>
        
        <a href="https://github.com/SamsunNaher-1604048">
          <GitHubIcon sx={{ fontSize: 35, color: "white" }} />
        </a>
        <a href="https://www.google.com/maps/place/Rajshahi/@24.38015,88.5709965,13z/data=!3m1!4b1!4m5!3m4!1s0x39fbefa96a38d031:0x10f93a950ed6f410!8m2!3d24.3745146!4d88.604166">
          <FmdGoodIcon sx={{ fontSize: 35, color: "white" }} />
        </a>
      </div>
      <div>
        <p className="font-mono text-white">
          samsun.naher.nishi.2017@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
