import { buttonBackground } from "../../../public/icons"
export default function CustomBackgroundButton ({
text,
buttonName
}){

    return (
        <div className={`px-4 w-fit h-fit rounded-[2px] font-semibold py-2 text-[#503914]   ${buttonName}`} style={{
            background: `url(${buttonBackground.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            objectFit: "cover"
          }}>
            {text}
          </div>
    )
}