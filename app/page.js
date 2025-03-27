"use client";
import {assets} from "@/assets/assets";
import {PromtBox} from "@/components/PromtBox";
import {Sidebar} from "@/components/Sidebar";
import Image from "next/image";
import {useState} from "react";
export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLording, setIsLording] = useState(false);

  return (
    <div>
      <div className='flex h-screen'>
        {/* sidebar */}
        <Sidebar expand={expand} setExpand={setExpand} />
        <div className='flex-1 flex flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative'>
          <div className='md:hidden absolute px-4 top-6 flex items-center justify-between w-full'>
            <Image
              onClick={() => setExpand(!expand)}
              className='rotate-180'
              src={assets.menu_icon}
              alt='menu_icon'
            />
            <Image
              className='opacity-70'
              src={assets.chat_icon}
              alt='chat_icon'
            />
          </div>
          {messages.length === 0 ? (
            <>
              <div className='flex gap-3 items-center'>
                <Image
                  src={assets.logo_icon}
                  alt='logo_icon'
                  className='h-16'
                ></Image>
                <p className='text-2xl font-medium'>Hi, I&apos;m DeepSeek</p>
              </div>
              <p className='text-sm mt-2'>I can help you today?</p>
            </>
          ) : (
            <div></div>
          )}
          {/* prompt box */}
          <PromtBox isLording={isLording} setIsLording={setIsLording} />
          <p className='text-xs absolute bottom-1 text-gray-500'>
            Al-generated, powered by OpenAI
          </p>
        </div>
      </div>
    </div>
  );
}
