import React from 'react'
import { TbHandClick } from "react-icons/tb"

const ChatBubble = () => {
  return (
    <div className="fixed bottom-4 cursor-pointer">
        <div className="w-56 h-10 relative">
            <div className="w-56 h-9 left-[1px] top-[2px] absolute bg-lightgreen rounded-tl-2xl rounded-tr rounded-bl-2xl rounded-br">
            </div>
            <div className="left-[49px] top-[10px] absolute text-white text-base font-medium font-futura leading-tight">Chat with concierge</div>
            <div className="w-10 h-10 left-0 top-0 absolute bg-lightgreen rounded-full shadow-inner"></div>
            <div className="w-6 h-6 left-[8px] top-[8px] absolute">
                <TbHandClick className="w-6 h-6 left-[2px] top-[2px] absolute text-white" />
            </div>
        </div>
    </div>
  )
}

export default ChatBubble