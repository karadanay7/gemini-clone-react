import { IoMdArrowDropdown } from "react-icons/io";
import { PiStarFourFill } from "react-icons/pi";
import { TbGridDots } from "react-icons/tb";
const Header = () => {
    return (
        <div className="w-full flex h-[74px] items-center px-4 leading-5 bg-white justify-between ">
            <div className=" flex items-center text-[20px] font-[300] tracking-wide gap-2 hover:bg-gray-200 py-2.5 px-3 rounded-lg ">
             
                 <span >Gemini</span><IoMdArrowDropdown className="mt-[1px] text-[18px]" />
            </div>
            <div className=" flex items-center gap-3">
                <div className="flex items-center bg-gray-200 px-6 py-2 rounded-lg text-[12px] gap-2">
                <PiStarFourFill className="text-amber-600 text-[18px]" /> <p>Try Gemini Advanced</p>
                </div>
                <div className="rounded-full p-2 hover:bg-gray-100">
                <TbGridDots className="text-gray-800 text-[20px]" />
                </div>
                <div className=" h-10 w-10 border-opacity-0 border-4 border-gray-200 rounded-full hover:border-opacity-100">
                    <img src="/user.jpg" alt=""  className="rounded-full"/>
                </div>
            </div>

        </div>
    )
}
export default Header