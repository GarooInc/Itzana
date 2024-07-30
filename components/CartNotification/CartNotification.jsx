"use client"
import React from 'react'
import { useRouter } from "next/navigation"

const CartNotification = ({productName, productImage}) => {
    const router = useRouter()
  return (
    <div className="fixed top-0 right-4 bg-light-brown text-white p-10 z-10">
        <div className="flex items-center gap-4 flex-col">
            <img src={productImage} alt={productName} className="w-20 h-20 object-cover rounded-lg" />
            <p className="font-futura text-xs">{productName} added to cart</p>
            <button className="bg-white text-black rounded-md px-2 py-1 font-futura" onClick={() => router.push('/cart')}>View Cart</button >
        </div>
    </div>
  )
}

export default CartNotification