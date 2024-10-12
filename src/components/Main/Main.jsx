import Header from "./Header"
import React, { useEffect, useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import { IoMicOutline } from "react-icons/io5";

const Main = ({
    userId,
    sessionId,
    setSessionId,
    messages,
    setMessages,
    startNewSession,
}) => {
    const [input, setInput] = useState("");
    const [chatStarted, setChatStarted] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (sessionId) {
            setChatStarted(true);
        }
    }, [sessionId]);

    const sendMessage = async () => {
        if (input.trim() === "") return;

        const userMessage = { sender: "user", text: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");
        setLoading(true);

        // Send message to server
        try {
            const response = await fetch("http://localhost:5001/api/chatbot/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ sessionId, answer: input }),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            const data = await response.json();
            const botMessage = { sender: "bot", text: data.question };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Failed to send message:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div className="h-screen w-full overflow-scroll flex flex-col">
            <Header />

            <div className="flex-grow flex flex-col items-center justify-center gap-6">

                <div className="text-center text-[28px] font-[500]">
                    <p className="bg-gradient-to-r from-blue-500 to-red-500 inline-block text-transparent bg-clip-text">
                        Hello, Aysegul.
                    </p>
                    <p className="text-gray-800">How can I help?</p>
                </div>


                <div className="flex flex-col max-w-[840px] p-6 bg-gray-100 rounded-xl gap-2 text-normal mt-4">
                    <div className="ml-2">
                        Humans review some saved chats to improve Google AI. To stop this for future chats, turn off Gemini Apps Activity. If this setting is on, don't enter info you wouldn’t want reviewed or used. How it works.
                    </div>

                    <div className="flex items-center justify-end text-sm text-blue-700 gap-3 ">
                        <button>Manage Activity</button>
                        <button>Dismiss</button>
                    </div>
                </div>

            </div>
        
            
                <div className="flex items-center justify-center max-w-[840px] mx-auto bottom-0  w-full h-16 rounded-full bg-gray-100">
                    <div className="flex-grow px-6 "> <input
                        type="text"
                        value={input}
                        placeholder="Enter a prompt here"
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className=" relative w-full bg-gray-100 outline-none "
                    /></div>
                    <div className="flex items-center gap-3 text-2xl p-4">
                    <LuImagePlus />
                    <IoMicOutline />

                    </div>
                   
                   
                
                </div>
                <div className="py-4 text-xs text-center">
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
                </div>
                
            
            

        </div>
    )
};

export default Main
