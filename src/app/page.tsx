import Image from "next/image";
import HeaderFooter from "@/components/layout/layout"
import {backgroundIMage} from "../../public/icons/index"
import CustomBackgroundButton from "@/components/common/CustomBackgroundButton";
export default function Home() {
  return (
    <HeaderFooter>
      <div className="w-full h-full flex flex-col ">
        
        <div className="w-full h-fit flex relative bg-white">
          <div className="w-[20%] h-full absolute z-[3] bg-[#535353]">

          </div>
          <div className="w-full px-5 flex gap-10 flex-col justify-center h-full absolute z-[4] bg-black/85">
              <h3 className="w-fit text-[60px] leading-[86px] font-semibold text-white">Discover Your Next Favorite <br/> Product!</h3>
               
               <CustomBackgroundButton text={"Sign Up for Free"}  buttonName={"!rounded-[4px] "}/>
          </div>
          <div className="h-[703px] w-full object-cover" style={{
            background: `url(${backgroundIMage.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            objectFit: "cover"
          }}>

          </div>
        </div>
        
      </div>
    </HeaderFooter>
  );
}
