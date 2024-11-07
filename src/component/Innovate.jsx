import Image from "next/image";

export default function Innovate() {
  return (
    <div className="mt-32 justify-center flex-col text-center px-20 mx-auto">
      <div className="mb-6">
        <h1 className="text-[#4D4D4D] text-[18px]">
          Empowering Your Business Success
        </h1>
        <h1 className="text-[#000000] text-[30px]">
          Innovative Solutions for Modern Enterprises
        </h1>
      </div>
      <div className="w-full justify-center flex">
        <Image
          src="/images/image1.png"
          alt="Hero Image"
          width={2000}
          height={1000}
          className="object-contain" // corrected typo
        />
      </div>
    </div>
  );
}
