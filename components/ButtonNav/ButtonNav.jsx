import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const ButtonNav = ({title, link}) => {
  return (
    <div className="w-80 h-16">
        <div className="p-4 flex justify-between font-futura font-light text-darkgray bg-white rounded-full border border-darkgray">
            {title} <FaArrowRight className="inline-block" />
        </div>
    </div>
  )
}

export default ButtonNav