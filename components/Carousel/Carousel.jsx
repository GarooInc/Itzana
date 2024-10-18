"use client"
import React, { useState } from 'react'
import { CgArrowLongRight } from "react-icons/cg"
import { CgArrowLongLeft } from "react-icons/cg"
import { motion, AnimatePresence } from 'framer-motion'

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    return (
        <div className="carousel w-full h-full relative">
            <AnimatePresence>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`slide-${currentIndex}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                />
            </AnimatePresence>
            <div className="absolute top-1/2 flex -translate-y-1/2 transform justify-between w-full">
                <button
                    className="absolute bg-aqua text-white p-2 rounded-full left-5"
                    onClick={handlePrev}
                >
                    <CgArrowLongLeft className='text-2xl text-cream' />
                </button>
                <button
                    className="absolute bg-aqua text-white p-2 rounded-full right-5"
                    onClick={handleNext}
                >
                    <CgArrowLongRight className='text-2xl text-cream' />
                </button>
            </div>
        </div>
    )
}

export default Carousel