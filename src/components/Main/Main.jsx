import Header from "./Header";
import React, { useContext } from "react";
import { LuImagePlus } from "react-icons/lu";
import { IoMicOutline } from "react-icons/io5";
import { BiSend } from "react-icons/bi";
import { Context } from "../../context/Context";



const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  return (
    <div className="h-screen w-full flex flex-col">
      <Header />

      {/* Chat Section */}
      <div className="flex-grow overflow-y-auto p-6 flex flex-col items-center">
        {!showResult ? (
          <div className="flex-grow flex flex-col items-center justify-center gap-6">
            <div className="text-center text-[28px] font-medium">
              <p className="bg-gradient-to-r from-blue-500 to-red-500 inline-block text-transparent bg-clip-text">
                Hello, Aysegul.
              </p>
              <p className="text-gray-800">How can I help?</p>
            </div>

            <div className="flex flex-col max-w-[840px] p-6 bg-gray-100 rounded-xl gap-2 text-sm mt-4">
              <div className="ml-2">
                Humans review some saved chats to improve Google AI. To stop this for future chats, turn off Gemini Apps Activity. If this setting is on, don't enter info you wouldn’t want reviewed or used. <a href="#">How it works.</a>
              </div>

              <div className="flex items-center justify-end text-sm text-blue-700 gap-3">
                <button>Manage Activity</button>
                <button>Dismiss</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 flex flex-col items-start">
     
            <div className="flex items-center space-x-4">
              <img src="/user.jpg" alt="User" className="rounded-full h-10 w-10" />
              <p className="bg-blue-100 text-gray-800 p-4 rounded-xl max-w-lg">
                {recentPrompt}
              </p>
            </div>

     
            <div className="flex items-start space-x-4">
              <img src="/gemini.png" alt="Gemini" className="h-10 w-10" />
              <div className="bg-gray-100 text-gray-800 p-4 rounded-xl max-w-lg">
                {loading?
           <div className=" h-[50px] flex flex-col gap-[10px]">
        
           <hr className="h-[10px] w-[800px] rounded-sm  bg-gradient-to-r from-[#9ed7ff] to-[#ffffff] animate-loading" />
           
          
           <hr className="h-[10px] w-[800px] rounded-sm from-[#9ed7ff] to-[#ffffff] animate-loading" />
           <hr className="h-[10px]  w-[300px] rounded-sm  from-[#9ed7ff] to-[#ffffff] animate-loading" />
       </div>
       
           
           
                :
                <p dangerouslySetInnerHTML={{ __html: resultData }} />
                }
          
              </div>
            </div>
          </div>
        )}
      </div>

 
      <div className="flex items-center justify-center max-w-[840px] mx-auto sticky bottom-0 w-full h-16 bg-gray-100 rounded-full p-2">
        <input
          type="text"
          value={input}
          placeholder="Enter a prompt here"
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow bg-transparent outline-none px-4"
        />
        <div className="flex items-center gap-3 text-2xl text-gray-800">
          <LuImagePlus />
          <IoMicOutline />
          <BiSend onClick={() => onSent()} />
        </div>
      </div>

   
      <div className="py-4 text-xs text-center">
        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
      </div>
    </div>
  );
};

export default Main;
