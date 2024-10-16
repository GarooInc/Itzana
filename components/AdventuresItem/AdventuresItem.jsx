"use client";
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { useCart } from '@/contexts/CartContext';
import CartNotification from '@/components/CartNotification/CartNotification';
import { useTranslation } from 'react-i18next';

const AdventuresItem = () => {
    const [adventures, setAdventures] = useState([]);
    const [notification, setNotification] = useState(false);
    const [actualProduct, setActualProduct] = useState({});
    const [filter, setFilter] = useState(null); // Estado para el filtro
    const { t, i18n } = useTranslation();
    const currentLocale = i18n.language;
    const { dispatch } = useCart();
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

    const pb = new PocketBase(`${backendUrl}`);    
    pb.autoCancellation(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('Adventures').getFullList({
                    sort: '-created',
                });
                const filteredRecords = filter !== null ? records.filter(item => item.other === filter) : records;
                setAdventures(filteredRecords);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [filter]); // Dependencia en el filtro

    const addToCart = (item) => {
        const updatedItem = {
            ...item,
            Variant: "",
            Price: item.price,
        };
        dispatch({ type: 'ADD_ITEM', payload: updatedItem });
        setNotification(true);
        setActualProduct(updatedItem);
        setTimeout(() => {
            setNotification(false);
        }, 3000);
    };

    return (
        <div className='flex flex-col gap-10'>
            <div className='flex gap-4 justify-center items-center md:flex-row flex-col'>
                <button className={`green_button w-[200px] ${filter === false ? 'bg-cream' : ''}`} onClick={() => setFilter(false)}>{t('button1')}</button>
                <button className={`green_button w-[200px] ${filter === true ? 'bg-cream' : ''}`} onClick={() => setFilter(true)}>{t('button2')}</button>
            </div>
            <div className="adventure_container">
                {adventures.map((item, index) => (
                    <div key={index} className={`bg-white px-2 pb-16 gap-2 flex flex-col relative ${(index + 1) % 4 !== 0 ? 'xl:border-r xl:border-black' : ''} ${(index + 1) % 2 !== 0 ? 'xl:border-r xl:border-black' : ''}`}>
                        <img className="adventure_img" src={`${backendUrl}/api/files/${item.collectionId}/${item.id}/${item.image}?token=`} alt={item.name} />
                        <h3 className="adventure_title">{item.title}</h3>
                        <p className="text-black text-md font-futuralight leading-6 tracking-tight" dangerouslySetInnerHTML={{ __html: item[`description_${currentLocale}`] }}></p>
                        <p className="text-light-brown text-xs  leading-none font-futura font-bold"> £{item.price}</p>
                        <button className='green_button w-[200px] absolute bottom-4' onClick={() => addToCart(item)}>Request a reservation</button>
                    </div>
                ))}
                {notification && <CartNotification productName={actualProduct.title} productImage={`${backendUrl}/api/files/${actualProduct.collectionId}/${actualProduct.id}/${actualProduct.image}?token=`} productVariant={actualProduct.Variant} />}
            </div>
        </div>
    );
};

export default AdventuresItem;