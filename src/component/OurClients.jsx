import Image from "next/image";
import { FaStar } from "react-icons/fa"; // For star icon

export default function ItemList() {
  // Array of items
  const items = [
    {
      id: 1,
      image: "/images/1.png",
      text: "I cannot recommend this company enough! Their professionalism and attention to detail transformed our project, exceeding all expectations. The team was always available and eager to help.",
      star: 3
    },
    {
      id: 2,
      image: "/images/2.png",
      text: "Working with this team has been a game-changer for our business. They delivered exceptional service and innovative solutions that helped us streamline operations and improve results.",
      star: 3
    },
    {
      id: 3,
      image: "/images/3.png",
      text: "The level of expertise and dedication displayed by this company was remarkable. They listened to our needs and implemented effective strategies that made a significant difference.",
      star: 3
    }
  ];

  return (
    <div className="flex  lg:flex-row flex-col items-center  px-20 mx-auto mt-10">
      {items.map((item) => (
        <div key={item.id} className="flex flex-col items-center ">
          <Image src={item.image} alt={item.text} width={500} height={500}  className="h-20 w-20"/>
          <div className="flex mt-2">
            {/* Render star rating */}
            {[...Array(3)].map((_, index) => (
              <FaStar
                key={index}
                className={`h-5 w-5 ${
                  index < item.star ? "text-yellow-500" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <h2 className="text-[20px] text-[#0D0D0DB2] text-center px-4">{item.text}</h2>
        </div>
      ))}
    </div>
  );
}
