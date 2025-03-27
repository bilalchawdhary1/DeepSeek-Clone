"use client";
import {assets} from "@/assets/assets";
import Image from "next/image";
import React, {useState} from "react";

export const PromtBox = ({isLording, setIsLording}) => {
  const [promt, setPromt] = useState("");

  return (
    <form
      className={`w-full ${
        false ? "max-w-3xl" : "max-w-2xl"
      } bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}
    >
      <textarea
        rows={2}
        placeholder='Enter your prompt'
        className='w-full bg-transparent outline-none resize-none overflow-hidden break-words'
        required
        onChange={e => setPromt(e.target.value)}
        value={promt}
      />
      <div className='flex justify-between items-center text-sm'>
        <div className='flex gap-2 items-center'>
          <p className='flex items-center gap-2 text-sm border border-gray-300/40 px-2 py-1 rounded-full curdor-pointer hover:bg-gray-500/20 transition-all'>
            <Image
              src={assets.deepthink_icon}
              alt='deepthink_icon'
              className='h-5'
            />
            DeepThink (R1)
          </p>
          <p className='flex items-center gap-2 text-sm border border-gray-300/40 px-2 py-1 rounded-full curdor-pointer hover:bg-gray-500/20 transition-all'>
            <Image src={assets.search_icon} alt='search_icon' className='h-5' />
            Search
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <Image
            src={assets.pin_icon}
            alt='pin_icon'
            className='w-4 cursor-pointer'
          />
          <button
            className={`${promt ? "bg-primary" : "bg-[#71717a]"}
         p-2 rounded-full curdor-pointer`}
          >
            <Image
              src={promt ? assets.arrow_icon : assets.arrow_icon_dull}
              alt='pin_icon'
              className='w-3.5 aspect-square'
            />
          </button>
        </div>
      </div>
    </form>
  );
};
