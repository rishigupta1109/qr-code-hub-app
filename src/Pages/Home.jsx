import React from "react";

import logo from ".././Images/logo.png";
import poster from ".././Images/poster.jpeg";
import bg from ".././Images/bg.webp";
import logotext from ".././Images/InventoText.png";
const Home = () => {
  return (
    <div className="min-h-screen body flex flex-col items-center justify-center">
      <div className="flex justify-center pt-2">
        <img className="w-[100px] h-[100px]" src={logo}></img>
      </div>
      <div className="flex justify-center">
        <img src={logotext} className="justify-center h-[200px] " />
      </div>
      <h1 className="text-[2rem] text-white">Presents</h1>
      <div className="pt-2 flex justify-center ">
        <img
          src={poster}
          style={{
            width: "auto",
            height: "50vh",
          }}
        ></img>

        {/* <hr className='bg-gray-600 pt-0.5 border-none my-2'></hr> */}
      </div>
    </div>
  );
};

export default Home;
