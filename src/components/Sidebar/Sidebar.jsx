import React from "react";
import { IoMdMenu } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import { BsGem } from "react-icons/bs";
import { MdHistory } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
const Sidebar = () => {
    return (
        <div className="px-4 py-3 bg-gray-100 w-80 h-screen">
            <div className="flex flex-col justify-between h-full gap-8 ">
                <div className="rounded-full hover:bg-gray-200 p-3 w-12 -ml-2 ">
                    <IoMdMenu className="text-2xl ml-1 " />
                </div>

                <div className="text-[14px]  ">
                    <div className="flex items-center justify-between  p-2.5  bg-gray-200 rounded-full text-gray-400 w-32 text-sm mb-4 ">
                        <FaPlus className="text-lg" />
                        <span className="mr-2">    New chat</span>
                    </div>
                    <p className=" p-2 font-medium">Recent</p>
                    <div className=" grid  text-gray-900  ml-1 ">

                        <div className="flex items-center  justify-between  rounded-full hover:bg-gray-200 p-2 group">
                            <div className="flex items-center justify-center gap-4  ">  <FiMessageSquare  className="text-[15px]"/> <span>Sohbet Basliyor</span></div>
                            <div className="opacity-0 group-hover:opacity-100"><BsThreeDotsVertical /></div>
                        </div>
                        <div className="flex items-center  justify-between  rounded-full hover:bg-gray-200 p-2 group">
                            <div className="flex items-center justify-center gap-4 ">  <FiMessageSquare className="text-[15px]" /> <span>Sohbet Basliyor</span></div>
                            <div className="opacity-0 group-hover:opacity-100"><BsThreeDotsVertical /></div>
                        </div>
                        <div className="flex items-center  justify-between  rounded-full hover:bg-gray-200 p-2 group">
                            <div className="flex items-center justify-center gap-4  ">  <FiMessageSquare className="text-[15px]" /> <span>Sohbet Basliyor</span></div>
                            <div className="opacity-0 group-hover:opacity-100"><BsThreeDotsVertical  /></div>
                        </div>
                        <div className="flex items-center  justify-between  rounded-full hover:bg-gray-200 p-2 group">
                            <div className="flex items-center justify-center gap-4  ">  <FiMessageSquare className="text-[15px]" /> <span>Sohbet Basliyor</span></div>
                            <div className="opacity-0 group-hover:opacity-100"><BsThreeDotsVertical /></div>
                        </div>
                        <div className="flex items-center  justify-between  rounded-full hover:bg-gray-200 p-2 group">
                            <div className="flex items-center justify-center gap-4  ">  <FiMessageSquare className="text-[15px]" /> <span>Sohbet Basliyor</span></div>
                            <div className="opacity-0 group-hover:opacity-100"><BsThreeDotsVertical /></div>
                        </div>
                        <div className="flex items-center  justify-between  rounded-full hover:bg-gray-200 p-2 group">
                            <div className="flex items-center justify-center gap-4  ">  <IoIosArrowDown /> <span className="text-xs leading-5">Show more</span></div>

                        </div>

                    </div>

                </div>
                <div className="text-[14px] pt-6 -ml-2 ">

                    <div className=" grid  text-black font-medium  ">

                        <div className="flex items-center  justify-between  rounded-full hover:bg-gray-200 p-2 ">
                            <div className="flex items-center justify-center gap-3 ml-2 ">  <BsGem className="text-[18px]" /> <span>Gem Manager</span></div>
                          
                        </div>
                        <div className="flex items-center  justify-between  rounded-full hover:bg-gray-200 p-2 ">
                            <div className="flex items-center justify-center gap-3 ml-2">  <BiHelpCircle className="text-[18px]" /> <span>Help</span></div>
                            <div className="text-blue-800"><GoDotFill /></div>

                        </div>
                        <div className="flex items-center  justify-between  rounded-full hover:bg-gray-200 p-2 ">
                            <div className="flex items-center justify-center gap-3 ml-2 ">  <MdHistory className="text-[18px]" /> <span>Activity</span></div>
                           
                        </div>
                        <div className="flex items-center  justify-between  rounded-full hover:bg-gray-200 p-2 ">
                            <div className="flex items-center justify-center gap-3 ml-2 ">  <MdOutlineSettings className="text-[18px]" /> <span>Settings</span></div>
                            <div className="text-blue-800"><GoDotFill /></div>
                        </div>
                        <div className=" flex  items-start p-2 -mb-2 ">
                        <GoDotFill  className="mt-1 ml-2 text-gray-600"/> 
                            <div className="grid items-center justify-center  ml-2  text-[11px] "> 
                           
                                 <span className=" leading-5">Izmir, Turkey</span>
                                 <span  className="text-blue-700">From your Ip address &bull; Update location </span>
                                 </div>

                        </div>


                    </div>



                </div>



            </div>
        </div>
    )
}
export default Sidebar;