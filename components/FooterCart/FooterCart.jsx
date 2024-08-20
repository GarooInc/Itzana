"use client";
import React, {useState} from 'react'
import { useRouter } from "next/navigation"
import FooterItem from '@/components/FooterItem/FooterItem'
import CartItem from '@/components/CartItem/CartItem'


const FooterCart = () => {
    const router = useRouter()
    const [showCart, setShowCart] = useState(false)

    const handleShowCart = () => {
        setShowCart(!showCart)
    }

  return (
    <div className='fixed bottom-0 w-full'>
        <div className="absolute bottom-20 right-10 flex justify-evenly pt-4" >
            <img src="/assets/images/room_service/home.png" alt="logo" className="md:w-[50px] w-[40px]" onClick={() => router.push('/')} />
            <img src="/assets/images/room_service/cart.png" alt="logo" className="md:w-[50px] w-[40px]" onClick={handleShowCart} />
        </div>
        <FooterItem />
        {showCart && <div className="absolute bottom-0 right-0">
            <CartItem showCart= {handleShowCart} />
        </div>}
    </div>

  )
}

export default FooterCart