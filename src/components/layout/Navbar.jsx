

// import CustomBackgroundButton from "../common/CustomBackgroundButton";

// export default function Navbar() {
//   const navItems = [
//     { title: "Home", link: "" },
//     { title: "About Us", link: "" },
//     { title: "Services", link: "" },
//     { title: "Blog", link: "" },
//     { title: "Contact", link: "" },
//     { title: "Sign In", link: "" },
//     { title: "Try for Free", link: "" },
//   ];

//   return (
//     <div className="w-full h-[158px] px-20 fixed z-[10] flex items-center justify-between bg-transparent mb-8 ">
//       <div className="w-fit flex flex-row items-center h-fit gap-2">
//         <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <rect x="0.5" width="40" height="40" rx="20" fill="url(#paint0_linear_1_20)" />
//           <rect x="9.3" y="6.4" width="22.4" height="6" fill="white" />
//           <rect x="4.1" y="17.2" width="22.4" height="6" fill="white" />
//           <rect x="9.3" y="28" width="22.4" height="6" fill="white" />
//           <defs>
//             <linearGradient id="paint0_linear_1_20" x1="20.5" y1="0" x2="20.5" y2="40" gradientUnits="userSpaceOnUse">
//               <stop offset="0.09375" stopColor="#455EB5" />
//               <stop offset="0.484375" stopColor="#5643CC" />
//               <stop offset="0.692708" stopColor="#673FD7" />
//             </linearGradient>
//           </defs>
//         </svg>
//         <h3 className="text-[20px] text-white leading-[42px] font-semibold">Innovative Solutions Group</h3>
//       </div>

//       <div className="w-fit h-fit flex gap-6 items-center">
//         {navItems.map((value, l) =>
//           value.title !== "Try for Free" ? (
//             <div
//               key={l}
//               className={`${value.title === "Shop Now" ? "text-[#BBA27B]" : "text-white"} px-1 text-[16px]`}
//             >
//               {value.title}
//             </div>
//           ) : (
//             <CustomBackgroundButton
//               key={l}
//               text={value.title}
//               className="bg-red-500 border border-red-700 text-white px-4 py-2 rounded-md"
//             />
//           )
//         )}
//       </div>
//     </div>
//   );
// }
"use client"
import { useState } from "react";
import CustomBackgroundButton from "../common/CustomBackgroundButton";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: "Home", link: "" },
    { title: "About Us", link: "" },
    { title: "Services", link: "" },
    { title: "Blog", link: "" },
    { title: "Contact", link: "" },
    { title: "Sign In", link: "" },
    { title: "Try for Free", link: "" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[158px] px-6 lg:px-20 fixed z-[10] flex items-center justify-between bg-transparent mb-8">
      <div className="w-fit flex items-center gap-2">
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
        <h3 className="text-[20px] text-white leading-[42px] font-semibold">Innovative Solutions Group</h3>
      </div>

      <div className="lg:hidden flex items-center">
        {/* Toggle Button */}
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      <div className={`lg:flex ${isMenuOpen ? "flex" : "hidden"} w-full lg:w-auto flex-col lg:flex-row lg:gap-6 items-center mt-4 lg:mt-0`}>
        {navItems.map((value, index) =>
          value.title !== "Try for Free" ? (
            <div
              key={index}
              className={`${value.title === "Shop Now" ? "text-[#BBA27B]" : "text-white"} px-1 text-[16px]`}
            >
              {value.title}
            </div>
          ) : (
            <CustomBackgroundButton
              key={index}
              text={value.title}
              className="bg-red-500 border border-red-700 text-white px-4 py-2 rounded-md"
            />
          )
        )}
      </div>
    </div>
  );
}
