// import { buttonBackground } from "../../../public/icons"
// export default function CustomBackgroundButton ({
// text,
// buttonName
// }){

//     return (
//         <div className={`px-4 w-fit h-fit rounded-[2px] font-semibold py-2 text-[#503914]   ${buttonName}`} style={{
//             background: `url(${buttonBackground.src})`,
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             objectFit: "cover"
//           }}>
//             {text}
//           </div>
//     )
// }

export default function TryForFreeButton() {
  return (
    <button className="bg-[#EF2A82] text-white px-12 py-2 rounded-xl hover:bg-[#D9236E] transition-colors">
      Try for Free
    </button>
  );
}
