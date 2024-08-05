"use client";
import React from 'react'
import { IoIosArrowDropleft } from "react-icons/io"
import { useRouter } from "next/navigation"


const ArrowBack = ({absolute, white}) => {
    const router = useRouter()
  return (
    <IoIosArrowDropleft className={`text-3xl  cursor-pointer ${absolute ? 'absolute left-10 top-10 z-10' : '' } ${white ? 'text-white' : 'text-lightgray'}`} onClick={() => router.push('/')} />
  )
}

export default ArrowBack