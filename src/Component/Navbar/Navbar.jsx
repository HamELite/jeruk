import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <div className="absolute top-0 left-0 w-full py-2 text-white z-20">
      <div data-aos="fade" className="container">
        <div className="flex justify-between items-center">
          
          <h1 className="text-4xl font-bold uppercase">
            Orange <span className="font-normal text-2xl">Mint</span>
          </h1>

          
          <ul className="lg:flex hidden space-x-4 text-xl">
            <li>
              <a href="#Hero">Home</a>
            </li>
            <li>
              <a href="#Wheretobuy">Where to find</a>
            </li>
            <li>
              <a href="#kontak">Contact</a>
            </li>
          </ul>

          
          <div onClick={() => setSidebar(!sidebar)}>
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar