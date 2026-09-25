"use client";
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { MdLocationPin } from "react-icons/md";
import { TbClockHour3Filled } from "react-icons/tb";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { useTranslation } from 'react-i18next';



const FoodDrinksItem = () => {
    const [foodDrinks, setFoodDrinks] = useState([]);
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

    const pb = new PocketBase(`${backendUrl}`);    
    pb.autoCancellation(false);
    const { t, i18n } = useTranslation();
    const currentLocale = i18n.language;


    const menuButtons = [
        { field: 'breakfast_pdf', label: { en: 'Breakfast Menu', es: 'Menú de desayuno' } },
        { field: 'lunch_pdf', label: { en: 'Lunch Menu', es: 'Menú de almuerzo' } },
        { field: 'kids_pdf', label: { en: 'Kids Menu', es: 'Menú infantil' } },
    ];

    const openPdf = (item, field = 'menu_pdf') => {
        window.open(`${backendUrl}/api/files/${item.collectionId}/${item.id}/${item[field]}?token=`);
    };

    const getWhatsappLink = (item) => {
        const digits = (item.whatsapp_number || '').replace(/\D/g, '');
        const message = currentLocale === 'es'
            ? `Hola, quisiera hacer un pedido del menú de ${item.title_es}.`
            : `Hi, I'd like to place an order from the ${item.title_en} menu.`;
        return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
    };

    const getCallLink = (item) => {
        const digits = (item.whatsapp_number || '').replace(/\D/g, '');
        return `tel:+${digits}`;
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('Food_Drinks').getFullList({
                    sort: 'order_num',
                });
                setFoodDrinks(records);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="food_container">
            {foodDrinks.map((item, index) => (
                <div key={index} className='food_inner'>
                    <img className="food_img" src={`${backendUrl}/api/files/${item.collectionId}/${item.id}/${item.cover_img}?token=`} alt={item.name} />
                    <div className='flex flex-col p-10  bg-cream gap-4'>
                        <h3 className="food_title">{item[`title_${currentLocale}`]}</h3>
                        <div className='food_description_container'>
                            <span className='food_description'>{item[`description_${currentLocale}`]}</span>
                        </div>
                        <div className='food_info'>
                                <p className="food_info_text">
                                    <MdLocationPin className="food_icon" />
                                    {item[`location_${currentLocale}`]}
                                </p>
                                <p className="food_info_text">
                                    <TbClockHour3Filled className="food_icon" />
                                    {item.open} - {item.closes}
                                </p>
                                {
                                    (menuButtons.some(({ field }) => item[field]) || item.menu_pdf || item.whatsapp_number) && (
                                        <div className='flex flex-wrap gap-3 justify-between items-center w-full'>
                                            <div className='flex flex-wrap gap-3'>
                                                {menuButtons.some(({ field }) => item[field]) ? (
                                                    menuButtons.filter(({ field }) => item[field]).map(({ field, label }) => (
                                                        <button key={field} className='green_button' onClick={() => openPdf(item, field)}>{label[currentLocale] || label.es}</button>
                                                    ))
                                                ) : (
                                                    item.menu_pdf &&
                                                    <button className='green_button' onClick={() => openPdf(item)}>{t('menu_btn')}</button>
                                                )}
                                            </div>
                                            {item.whatsapp_number && (
                                                <div className='flex flex-wrap gap-3'>
                                                    <a
                                                        href={getWhatsappLink(item)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className='green_button flex items-center gap-2'
                                                    >
                                                        <FaWhatsapp className="text-base" />
                                                        WhatsApp
                                                    </a>
                                                    <a
                                                        href={getCallLink(item)}
                                                        className='green_button flex items-center gap-2'
                                                    >
                                                        <FaPhone className="text-base" />
                                                        {currentLocale === 'es' ? 'Llamar' : 'Call'}
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    )
                                }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FoodDrinksItem
