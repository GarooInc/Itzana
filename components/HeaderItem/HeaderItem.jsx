import React from 'react'
import ArrowBack from '@/components/ArrowBack/ArrowBack'

const HeaderItem = ({v2}) => {
  return (
    <div className={`w-full flex justify-center items-center h-1/5 relative bg-light-brown`}>
        <ArrowBack absolute/>
        <img src={`/assets/images/logo_${v2 ? 'v2' : 'v1'}.png`} alt="logo" className="w-[150px]" />
    </div>
  )
}

export default HeaderItem