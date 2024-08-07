"use client";
import React from 'react'
import { IoIosArrowDropleft } from "react-icons/io"
import { useRouter } from "next/navigation"


const ArrowBack = ({absolute, white, nav }) => {
    const router = useRouter()

    const handleNav = () => {
        if (nav) {
            router.push(nav)
        } else {
            router.push('/')
        }
    }
  return (
    <IoIosArrowDropleft className={`text-3xl  cursor-pointer ${absolute ? 'absolute left-10 top-10 z-10' : '' } ${white ? 'text-white' : 'text-lightgray'}`} onClick={handleNav} />
  )
}

export default ArrowBack