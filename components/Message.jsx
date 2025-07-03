"use client";
import {assets} from "@/assets/assets";
import Image from "next/image";
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
        >
          <div
            className={`opacity-0 group-hover:opacity-100 absolute  ${
              role === "user" ? "left-16 top-2.5" : "left-12 bottom-1"
            } transition-all`}
          >
            <div className='flex items-center gap-2 opacity-70'>
              {role === "user" ? (
                <>
                  <Image
                    src={assets.copy_icon}
                    alt='copy_icon'
                    className='w-4 cursor-pointer'
                  />
                  <Image
                    src={assets.pencil_icon}
                    alt='copy_icon'
                    className='w-4.5 cursor-pointer'
                  />
                </>
              ) : (
                <>
                  <Image
                    src={assets.copy_icon}
                    alt='copy_icon'
                    className='w-4.5 cursor-pointer'
                  />
                  <Image
                    src={assets.regenerate_icon}
                    alt='copy_icon'
                    className='w-4 cursor-pointer'
                  />
                  <Image
                    src={assets.like_icon}
                    alt='copy_icon'
                    className='w-4 cursor-pointer'
                  />
                  <Image
                    src={assets.dislike_icon}
                    alt='copy_icon'
                    className='w-4 cursor-pointer'
                  />
                </>
              )}
            </div>
          </div>
          {role === "user" ? (
            <span className='text-white/90'>{content}</span>
          ) : (
            <>
              <Image
                src={assets.logo_icon}
                alt='logo_icon'
                className='w-9 h-9 p-1 rounded-full border border-white/15'
              />
              <div className='space-y-4 w-full overflow-scroll'>{content}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Message;
