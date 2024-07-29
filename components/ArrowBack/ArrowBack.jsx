"use client";
import React from 'react'
import { IoIosArrowDropleft } from "react-icons/io"
import { useRouter } from "next/navigation"


const ArrowBack = ({absolute}) => {
    const router = useRouter()
  return (
    <IoIosArrowDropleft className={`text-3xl text-lightgray cursor-pointer ${absolute ? 'absolute left-10 top-10' : ''}`} onClick={() => router.back()} />
  )
}

export default ArrowBack