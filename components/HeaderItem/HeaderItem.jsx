import React from 'react'
import ArrowBack from '@/components/ArrowBack/ArrowBack'

const HeaderItem = () => {
  return (
    <div className='bg-light-brown w-full flex justify-center items-center h-1/5 relative'>
        <ArrowBack absolute/>
        <img src="/assets/images/logo_v1.png" alt="logo" className="w-[150px]" />
    </div>
  )
}

export default HeaderItem