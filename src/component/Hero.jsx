import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full h-full md:pt-24  flex  flex-col bg-[#172755]">
      <div className="w-full flex flex-col items-center px-6 md:px-20 lg:px-40 py-10 bg-[#172755] text-white">
        <div className="w-full text-center flex flex-col gap-4 max-w-3xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#F2F2F2]">
            Empowering Your Business with Cutting-Edge Solutions
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-[#F2F2F2]">
            Join us in transforming the way you operate for better efficiency
            and growth.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
          <input
            type="email"
            placeholder="Enter your email address"
            className="border-2 border-gray-800 text-[#F2F2F2] bg-transparent px-4 py-2 rounded-xl placeholder-[#F2F2F2] text-center md:text-left w-full md:w-auto"
          />
          <button className="bg-[#EF2A82] text-white px-6 md:px-12 py-2 rounded-xl hover:bg-[#D9236E] transition-colors w-full md:w-auto">
            Get Started Today
          </button>
        </div>

        <div className="flex justify-center items-center mt-6 w-full max-w-4xl">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={1000}
            height={465}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
