"use client";
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { MdLocationPin } from "react-icons/md";
import { TbClockHour3Filled } from "react-icons/tb";
import { useTranslation } from 'react-i18next';



const FoodDrinksItem = () => {
    const [foodDrinks, setFoodDrinks] = useState([]);
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

    const pb = new PocketBase(`${backendUrl}`);    
    pb.autoCancellation(false);
    const { t, i18n } = useTranslation();
    const currentLocale = i18n.language;


    const openPdf = (item) => {
        window.open(`${backendUrl}/api/files/${item.collectionId}/${item.id}/${item.menu_pdf}?token=`, '_blank');
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
                                <button className='green_button' onClick={() => openPdf(item)}>{t('menu_btn')}</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FoodDrinksItem
