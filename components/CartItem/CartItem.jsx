"use client"
import React from 'react'
import { useCart } from '@/contexts/CartContext'

const CartItem = () => {
    const { state } = useCart()
    const { dispatch } = useCart()

    return (
        <div className="cart-container">
            <h1 className='principal_title'>Cart</h1>
            {state.items.length > 0 ? (
                <ul className='py-10 grid grid-cols-2 gap-4'>
                    {state.items.map((item, index) => (
                        <li key={index} className='bg-white px-2 pb-12 shadow rounded-lg gap-2 flex flex-col relative'>
                            <button className="rounded shadow justify-start items-center text-xs inline-flex font-futura bg-redorange text-white px-2 py-1 absolute left-2" onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}>X</button>
                            <img className="md:w-full md:h-32 w-40 h-48 rounded-lg object-cover" src={`https://kaana.garooinc.com/kaana/api/files/${item.collectionId}/${item.id}/${item.Image}?token=`} alt={item.name} />
                            <h3 className="text-black text-base leading-tight font-futura mt-2  w-full gap-4 flex">{item.Title} <span className='text-aqua'>£{item.Price}</span></h3>
                            <p className="text-black text-xs font-[futura light] leading-none">{item.Description}</p>
                            <div className="flex justify-between items-center absolute bottom-2">
                                <div className="flex justify-between items-center shadow-xl w-full">
                                        <button className="rounded shadow justify-start items-center text-xs inline-flex font-futura  text-aqua px-2 py-1" onClick={() => dispatch({ type: 'DECREASE_ITEM', payload: item })}>-</button>
                                        <p className="text-black text-xs font-[futura light] leading-none px-4">{item.quantity}</p>
                                        <button className="rounded shadow justify-start items-center text-xs inline-flex font-futura text-aqua px-2 py-1" onClick={() => dispatch({ type: 'INCREASE_ITEM', payload: item })}>+</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className='text-center font-futura'>Your cart is empty</p>
            )}
            {state.items.length > 0 && (
                <button className="rounded shadow justify-start items-center text-xs inline-flex font-futura bg-aqua text-white px-6 py-3 fixed bottom-2 right-2" onClick={() => dispatch({ type: 'CLEAR_CART' })}>CHECKOUT</button>
            )}
        </div>
    );
}

export default CartItem