import Header from "./Header";
import React, { useContext } from "react";
import { LuImagePlus } from "react-icons/lu";
import { IoMicOutline } from "react-icons/io5";
import { BiSend } from "react-icons/bi";
import { Context } from "../../context/Context";


const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
 

  return (
    <main className="grow">
      <Header />
    <div className=" grid grid-rows-[1fr,min-content] justify-center h-[calc(100vh_-_74px)]  w-full text-center ">

      
      <article className=" overflow-auto text-left p-6 h-full max-w-4xl">
        {!showResult ? (
          <div className="place-content-center h-full gap-6">
            <div className="text-center text-[28px] font-medium">
              <p className="bg-gradient-to-r from-blue-500 to-red-500 inline-block text-transparent bg-clip-text">
                Hello, Aysegul.
              </p>
              <p className="text-gray-800">How can I help?</p>
            </div>

            <div className="text-left max-w-4xl mx-auto p-6 bg-gray-100 rounded-xl gap-2 text-md mt-6">
              <div className="ml-2">
                Humans review some saved chats to improve Google AI. To stop this for future chats, turn off Gemini Apps Activity. If this setting is on, don't enter info you wouldn’t want reviewed or used. <a href="#">How it works.</a>
              </div>

              <div className="flex items-center justify-end text-sm text-blue-700 gap-6 mt-4">
                <button>Manage Activity</button>
                <button>Dismiss</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid items-center max-w-[712px] gap-7">
            <div className="flex items-center space-x-4 w-full">
              <img src="/user.jpg" alt="User" className="rounded-full h-10 w-10" />
              <p className=" text-gray-800 p-4 rounded-xl  w-full">
                {recentPrompt}
              </p>
            </div>

            <div className="flex items-start space-x-4 w-full">
              <img src="/gemini.png" alt="Gemini" className="h-10 w-10" />
              <div className="text-gray-800 p-4 rounded-xl w-full overflow-hidden">
                {loading ? (
                  <div className=" space-y-2">
                    <hr className="w-full h-3 rounded-sm bg-gradient-to-r from-blue-600 via-blue-50 to-blue-300 bg-200% animate-gradientMove" />
                    <hr className="w-full h-3 rounded-sm bg-gradient-to-r from-blue-600 via-blue-50 to-blue-300 bg-200% animate-gradientMove" />
                    <hr className="w-2/3 h-3 rounded-sm bg-gradient-to-r from-blue-600 via-blue-50 to-blue-300 bg-200% animate-gradientMove" />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }} />
                )}
              </div>
            </div>
          </div>
        )}
      </article>
     

      
      <footer className="max-w-4xl px-6">
      <div className="flex items-center justify-center  w-full mx-auto sticky bottom-0 h-16 bg-gray-100 rounded-full py-2 px-6 focus-within:bg-gray-200 ">
        <input
          type="text"
          value={input}
          placeholder="Enter a prompt here"
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow bg-transparent outline-none  "
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
      </footer>
    
     
    </div>
    </main>
  );
};

export default Main;
