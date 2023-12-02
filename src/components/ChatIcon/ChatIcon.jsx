import React from "react";
import chatIcon from "../assets/icon/chatIcon.svg";
const ChatIcon = () => {
  return (
    <div className="group flex justify-center items-center p-4 z-10  fixed right-1 bottom-1 ">
      <button className="bg-[#004562]  p-4 rounded-lg shadow-md flex items-center justify-center transition group-hover:opacity-90">
        <img src={chatIcon} alt="" />
      </button>
    </div>
  );
};

export default ChatIcon;
