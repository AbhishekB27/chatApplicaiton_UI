import axios from "axios";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import ChatBox from "./ChatBox";

const ChatPage = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="container bg-[#F5F7FB] space-y-5 p-4">
      <div className="flex justify-between">
        <div className="flex gap-2 px-4 py-2 rounded-2xl bg-white">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            className="bg-transparent focus:outline-none placeholder:px-1"
            placeholder="Search Here..."
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex justify-center items-center gap-1">
          {" "}
          <button className="px-3 py-2 bg-white rounded-2xl active:scale-90 transition-all">
            Clear Chat
          </button>{" "}
          <button onClick={()=>{setOpen(!isOpen)}} className="relative px-3 py-2 bg-white rounded-2xl active:scale-90 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            {
              isOpen &&  <div className={`absolute transition-all rounded-2xl top-[3rem] right-0 ${isOpen ? 'w-[16rem] h-[18rem]' : 'w-0 h-0'} bg-slate-50`}>hello</div>
            }
          </button>{" "}
        </div>
      </div>
      <div className="grid grid-cols-[25rem_auto] gap-5">
        <SideBar />
        <ChatBox />
      </div>
    </div>
  );
};

export default ChatPage;
