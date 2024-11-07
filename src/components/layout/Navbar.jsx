


"use client"
import CustomBackgroundButton from "../common/CustomBackgroundButton";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { title: "Home", link: "" },
    { title: "About Us", link: "" },
    { title: "Services", link: "" },
    { title: "Blog", link: "" },
    { title: "Contact", link: "" },
    { title: "Sign In", link: "" },
    { title: "Try for Free", link: "" },
  ];

  return (
    <div className="w-full h-[70px] px-6 md:px-20 fixed z-10 flex items-center justify-between bg-[#172755] mb-8">
    
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center bg-[#172755]">
        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" width="40" height="40" rx="20" fill="url(#paint0_linear_1_20)" />
          <rect x="9.3" y="6.4" width="22.4" height="6" fill="white" />
          <rect x="4.1" y="17.2" width="22.4" height="6" fill="white" />
          <rect x="9.3" y="28" width="22.4" height="6" fill="white" />
          <defs>
            <linearGradient id="paint0_linear_1_20" x1="20.5" y1="0" x2="20.5" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0.09375" stopColor="#455EB5" />
              <stop offset="0.484375" stopColor="#5643CC" />
              <stop offset="0.692708" stopColor="#673FD7" />
            </linearGradient>
          </defs>
        </svg>
        </div>
        <h3 className="text-[20px] text-white leading-[42px] font-semibold">Innovative Solutions Group</h3>
      </div>

    
      { <div className="hidden md:flex gap-6 items-center">
        {navItems.map((item, index) =>
          item.title !== "Try for Free" ? (
            <div key={index} className="text-white text-sm ">
              {item.title}
            </div>
          ) : (
            <CustomBackgroundButton
              key={index}
              text={item.title}
              className="bg-red-500 border border-red-700 text-white px-4 py-1 rounded-md"
            />
          )
        )}
      </div> }

    
      <div className="md:hidden  flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
        </button>
      </div>

     
      {menuOpen && (
        <div className="md:hidden  sm:hidden absolute top-[70px] left-0 w-full border-y bg-[#172755] flex flex-col items-center gap-4 py-4 z-20">
          {navItems.map((item, index) =>
            item.title !== "Try for Free" ? (
              <div key={index} className="text-white text-sm">
                {item.title}
              </div>
            ) : (
              <CustomBackgroundButton
                key={index}
                text={item.title}
                className="bg-red-500 border border-red-700 text-white px-4 py-1 rounded-md"
              />
            )
          )}
        </div>
      )}
    </div>
  );
}