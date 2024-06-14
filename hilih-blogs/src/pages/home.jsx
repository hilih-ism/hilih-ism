import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";
import Blogs from "./blogs";
import AboutMe from "./aboutme";
import SignUp from "./signup";

function Home() {
  return (

      <div className="w-screen p-8 font-primary leading-6 text-opacity-87 bg-gray-900">
        {/* <Navbar/> */}
        <div className="w-full flex space-x-4 justify-center items-center">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    
  );
}

export default Home;
