"use client";
import {assets} from "@/assets/assets";
import {useAppContext} from "@/context/AppContext";
import {useClerk, UserButton} from "@clerk/nextjs";
import Image from "next/image";
import React, {useState} from "react";
import {ChatLable} from "./ChatLable";

export const Sidebar = ({expand, setExpand}) => {
  const {openSignIn} = useClerk();
  const {user} = useAppContext();
  const [openMenu, setOpenMenu] = useState({id: null, open: false});

  return (
    <div
      className={`bg-[#212327] pt-7 transition-all z-50 max-md:absolute max-md:h-screen flex flex-col  justify-between ${
        expand ? " p-4 w-64" : "md:w-20 w-0 max-md:overflow-hidden"
      } `}
    >
      <div>
        <div
          className={`flex ${
            expand ? "flex-row gap-10" : "flex-col items-center gap-8"
          }`}
        >
          <Image
            className={` ${expand ? "w-36" : "w-10"}`}
            src={expand ? assets.logo_text : assets.logo_icon}
            alt='sidebar_icon'
          />
          <div
            onClick={() => setExpand(!expand)}
            className='flex items-center justify-center group relative hover:bg-gray-500/20 transition-all duration-300 h-9 w-9 rounded-lg cursor-pointer aspect-square'
          >
            <Image
              src={assets.menu_icon}
              alt='menu_icon'
              className='md:hidden'
            />
            <Image
              src={expand ? assets.sidebar_close_icon : assets.sidebar_icon}
              alt='sidebar_icon'
              className='hidden md:block w-7'
            />
            <div
              className={`absolute w-max ${
                expand ? "left-1/2 -translate-x-1/2 top-12" : "left-0 -top-12 "
              } opacity-0 group-hover:opacity-100 transition text-sm text-white px-3 py-2 bg-black rounded-lg shadow-lg pointer-events-none`}
            >
              {expand ? "Close Sidebar" : "Open Sidebar"}
              <div
                className={`absolute w-3 h-3 bg-black rotate-45 ${
                  expand
                    ? "left-1/2 -top-1.5 -translate-x-1/2"
                    : "left-4 -bottom-1.5"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <button
          className={`flex items-center justify-center cursor-pointer mt-8 ${
            expand
              ? "bg-primary hover:opacity-90 rounded-2xl gap-2 p-2.5 w-max"
              : "group relative mx-auto hover:bg-gray-500/30 h-9 w-9 rounded-lg"
          } `}
        >
          <Image
            className={` ${expand ? "w-6" : "w-7"}`}
            src={expand ? assets.chat_icon : assets.chat_icon_dull}
            alt='deepthink_icon'
          />
          <div className='absolute w-max -right-12 -translate-x-1/2 -top-12 opacity-0 group-hover:opacity-100 transition text-sm text-white px-3 py-2 bg-black rounded-lg shadow-lg pointer-events-none'>
            New Chat
            <div className='absolute w-3 h-3 bg-black rotate-45 left-4 -bottom-1.5'></div>
          </div>
          {expand && <p className='text text-white font-medium'>New Chat</p>}
        </button>
        <div
          className={`mt-8 text-white text-sm ${expand ? "block" : "hidden"}`}
        >
          <p className='my-1'>Recents</p>
          {/* chatlable */}
          <ChatLable openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
      </div>
      <div>
        <div
          className={`flex items-center cursor-pointer group relative ${
            expand
              ? "gap-1 text-white/80 text-sm p-2.5 border border-primary rounded-lg hover:bg-white/10 cursor-pointer"
              : "h-10 w-10 mx-auto rounded-lg hover:bg-gray-500/30"
          }`}
        >
          <Image
            className={` ${expand ? "w-5" : "w-6.5 mx-auto"}`}
            src={expand ? assets.phone_icon : assets.phone_icon_dull}
            alt='phone_icon '
          />
          <div
            className={`absolute -top-60 pb-8 ${
              !expand && "-right-40"
            } opacity-0 group-hover:opacity-100  group-hover:block  hidden transition`}
          >
            <div className='relative w-max  text-sm text-white p-3 bg-black rounded-lg shadow-lg'>
              <Image src={assets.qrcode} alt='qrcode' className='w-44' />
              <p>Scan to get Deepseek app</p>
              <div
                className={`w-3 h-3 bg-black rotate-45 absolute ${
                  expand ? "right-1/2" : "left-4 -bottom-1.5"
                }`}
              ></div>
            </div>
          </div>
          {expand && (
            <>
              {" "}
              <span className='text text-white font-medium'>Get App</span>
              <Image src={assets.new_icon} alt='new_icon' />
            </>
          )}
        </div>
        <div
          onClick={user ? null : openSignIn}
          className={`flex items-center ${
            expand ? "hover:bg-white/10 rounded-lg" : "justify-center w-full"
          } gap-3  mt-2 p-2 text-white/60 text-sm cursor-pointer`}
        >
          {user ? (
            <UserButton />
          ) : (
            <>
              <Image
                src={assets.profile_icon}
                alt='profile_icon'
                className='w-7'
              />
            </>
          )}

          {expand && <p className='text text-white font-medium'>My Profile</p>}
        </div>
      </div>
    </div>
  );
};
