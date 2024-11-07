import Image from "next/image";

export default function Footer(){

    return(
        <div className="mt-32">
            <div>
            <h1>
            Empowering Your Business Success
            </h1>
        <h1>Innovative Solutions for Modern Enterprises</h1>

            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-center">
        <Image
          src="/images/elivate.png"
          alt="Hero Image"
          width={500}
          height={405}
          className="object-cover"
        />
      </div>
            

        </div>
    )
}