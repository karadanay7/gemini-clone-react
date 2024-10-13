import React, { useContext, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import { BsGem } from "react-icons/bs";
import { MdHistory, MdOutlineSettings } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { Context } from "../../context/Context";

const Sidebar = () => {
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);
    const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility
    const [visibleCount, setVisibleCount] = useState(5); // State to manage visible prompts count

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        onSent(prompt);
    };

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 5); // Increase the count by 5 when "Show more" is clicked
    };

    return (
        <div className={`bg-gray-100 h-screen transition-all duration-300 ${isOpen ? "w-80" : "w-20"}`}>
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-3">
                    <div className="rounded-full hover:bg-gray-200 p-3" onClick={() => setIsOpen(!isOpen)}>
                        <IoMdMenu className="text-2xl" />
                    </div>
                </div>

                <div
                    className={`ml-4 flex mt-12 items-center justify-center p-2 bg-gray-200 h-10 rounded-full text-gray-400 mb-4 cursor-pointer transition-all duration-300 ease-in-out ${isOpen ? "w-32" : "w-10"}`}
                    onClick={newChat}
                >
                    <FaPlus className="text-lg" />
                    <span className={`ml-2 transition-opacity duration-300 ${isOpen ? "block" : "hidden"}`}>New chat</span>
                </div>

                <div className={`flex-grow p-2 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
                    <p className="p-2 font-medium">Recent</p>
                    <div className="grid text-gray-900">
                        {prevPrompts.slice(0, visibleCount).map((item, index) => ( // Show prompts based on visibleCount
                            <div onClick={() => loadPrompt(item)} key={index} className="flex items-center justify-between rounded-full hover:bg-gray-200 p-2 group truncate cursor-pointer">
                                <div className="flex items-center justify-center gap-4">
                                    <FiMessageSquare className="text-[15px]" />
                                    <span className="truncate max-w-[180px]">{item}</span>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100">
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                        ))}
                        {prevPrompts.length > visibleCount && ( // Check if there are more prompts to show
                            <div className="flex items-center justify-between rounded-full hover:bg-gray-200 p-2 group cursor-pointer" onClick={handleShowMore}>
                                <div className="flex items-center justify-center gap-4">
                                    <IoIosArrowDown />
                                    <span className="text-xs leading-5">Show more</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {isOpen && (
                    <div className="flex flex-col justify-end p-2">
                        <div className="grid text-black font-medium">
                            <div className="flex items-center justify-between rounded-full hover:bg-gray-200 p-2 cursor-pointer">
                                <div className="flex items-center justify-center gap-3">
                                    <BsGem className="text-[18px]" />
                                    <span>Gem Manager</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between rounded-full hover:bg-gray-200 p-2 cursor-pointer">
                                <div className="flex items-center justify-center gap-3">
                                    <BiHelpCircle className="text-[18px]" />
                                    <span>Help</span>
                                </div>
                                <div className="text-blue-800">
                                    <GoDotFill />
                                </div>
                            </div>
                            {/* Activity Option */}
                            <div className="flex items-center justify-between rounded-full hover:bg-gray-200 p-2 cursor-pointer">
                                <div className="flex items-center justify-center gap-3">
                                    <MdHistory className="text-[18px]" />
                                    <span>Activity</span>
                                </div>
                            </div>
                            {/* Settings Option */}
                            <div className="flex items-center justify-between rounded-full hover:bg-gray-200 p-2 cursor-pointer">
                                <div className="flex items-center justify-center gap-3">
                                    <MdOutlineSettings className="text-[18px]" />
                                    <span>Settings</span>
                                </div>
                                <div className="text-blue-800">
                                    <GoDotFill />
                                </div>
                            </div>
                            {/* Location Info */}
                            <div className="flex items-start p-2 gap-1 mt-4">
                                <GoDotFill className="mt-1 ml-1 text-gray-600" />
                                <div className="grid items-center justify-center text-[11px]">
                                    <span className="leading-5">Izmir, Turkey</span>
                                    <span className="text-blue-700">From your IP address &bull; Update location</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
