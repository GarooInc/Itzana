import React from 'react'

const FooterItem = ({transparent}) => {
  return (
    <div className={`w-full flex justify-center items-center p-4 absolute bottom-0 ${transparent ? 'bg-transparent' : 'bg-white'}`}>
        <div className='w-full border-t-[1px] border-light-brown flex justify-center items-center'>
            <span className="text-md text-light-brown font-futura p-4">Itzana Resort & Residences</span>
        </div>
    </div>
  )
}

export default FooterItem