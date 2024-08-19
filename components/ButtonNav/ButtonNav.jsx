"use client";
import React from 'react'
import { FaArrowRight } from "react-icons/fa6"
import { useRouter } from "next/navigation"



const ButtonNav = ({title, link}) => {
    const router = useRouter()
    
    const handleClick = () => {
        router.push(link)
    }
  return (
    <div className="w-80 h-16 cursor-pointer">
      <div className="p-4 flex font-futura font-light text-cream bg-light-brown/60 rounded-full" onClick={handleClick}>
          <span className='flex justify-between w-full'>{title} <FaArrowRight className="inline-block" /></span>
      </div>
  </div>

  )
}

export default ButtonNav