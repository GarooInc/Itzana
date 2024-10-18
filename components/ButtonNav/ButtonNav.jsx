"use client";
import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg';
import { useRouter } from "next/navigation"
import { motion } from 'framer-motion'

const ButtonNav = ({title, link}) => {
    const router = useRouter()
    
    const handleClick = () => {
        router.push(link)
    }

    return (
        <motion.div 
            className="w-80 h-16 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="p-4 flex font-futura font-light text-cream bg-light-brown/60 rounded-full" onClick={handleClick}>
                <span className='flex justify-between w-full'>{title} <CgArrowLongRight className="inline-block text-xl" /></span>
            </div>
        </motion.div>
    )
}

export default ButtonNav