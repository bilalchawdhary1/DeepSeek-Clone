import React from "react";

function Message({role, content}) {
  return (
    <div className='flex flex-col items-center w-full max-w-3xl text-sm'>
      <div
        className={`flex flex-col w-full
      mb-8 ${role === "user" && "items-end"}`}
      >
        <div
          className={`group relative flex max-w-2xl py-3 rounded-xl ${
            role === "user" ? "bg-[#414158] p-5" : "gap-3"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Message;
