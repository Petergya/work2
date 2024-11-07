

import Image from "next/image";

export default function Hero() {
  return (
    
      <div className="w-full h-full flex flex-col bg-yellow-800">
        
        <div className="w-full flex relative bg-white">
          
        
          <div className="w-full px-40 flex gap-10 flex-col justify-center items-center h-[1000px] bg-[#172755] ">
            
            <h3 className="w-fit text-[48px] text-center font-semibold text-[#F2F2F2] mt-28 ">
              Empowering Your Business with Cutting-Edge Solutions
            </h3>
            
            <p className=" items-center text-center text-[#F2F2F2]">
              Join us in transforming the way you operate for better efficiency and growth.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <button className="border-2 border-gray-800 text-[#F2F2F2] px-12 py-2 rounded-xl transition-colors">
                Enter Your Email Address
              </button>
              
              <button className="bg-[#EF2A82] text-white px-12 py-2 rounded-xl hover:bg-[#D9236E] transition-colors">
                Get Started Today
              </button>
            </div>

          
            <div className="flex justify-center items-center mt-6">
              <Image
                src="/images/hero.png" 
                alt="Hero Image"
                width={1000}  
                height={465}  
                className="object-cover"
              />
            </div>

          </div>
          
        </div>
       
      </div>
  
  );
}