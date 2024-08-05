"use client";
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { MdLocationPin } from "react-icons/md";
import { TbClockHour3Filled } from "react-icons/tb";



const FoodDrinksItem = () => {
    const [foodDrinks, setFoodDrinks] = useState([]);

    const pb = new PocketBase('https://kaana.garooinc.com/kaana');
    pb.autoCancellation(false);

    const openPdf = (item) => {
        window.open(`https://kaana.garooinc.com/kaana/api/files/${item.collectionId}/${item.id}/${item.menu_pdf}?token=`, '_blank');
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('Food_Drinks').getFullList({
                    sort: '-created',
                });
                console.log(records);
                setFoodDrinks(records);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="flex flex-col gap-4 w-full pb-10">
            {foodDrinks.map((item, index) => (
                <div key={index} className={`rounded-b-2xl gap-2 flex flex-col w-full`}>
                    <div className='relative w-full'>
                        <img className="w-full h-96 rounded-b-2xl object-cover relative" src={`https://kaana.garooinc.com/kaana/api/files/${item.collectionId}/${item.id}/${item.cover_img}?token=`} alt={item.name} />
                        <div className="z-2 absolute bottom-0 left-0 backdrop-blur-lg rounded-b-2xl bg-black bg-opacity-50 w-full h-20 flex flex-col justify-center items-start p-4 gap-4">
                                <h3 className="text-white text-xl leading-tight font-futura mt-2">{item.name}</h3>
                                <p className="text-white text-md font-futuralight leading-none flex gap-2">
                                    <MdLocationPin className="text-light-brown" />
                                    {item.location}
                                </p>
                        </div>
                    </div>
                    <div className='flex flex-col px-2'>
                        <div className='flex gap-2 justify-end items-center'>
                            <TbClockHour3Filled className="text-light-brown" />
                            <span className='text-black text-md font-futuralight leading-6 tracking-tight'>
                                {item.open} - {item.closes}</span>
                        </div>
                        <div className='flex flex-col gap-4 border-b border-light-brown pb-4'>
                            <h3 className="text-black text-base leading-tight font-futura mt-2">Description</h3>
                            <span className='text-black text-md font-futuralight leading-6 tracking-tight'>{item.description}</span>
                            <button className='text-white bg-light-brown p-2 rounded md:w-40' onClick={() => openPdf(item)}>Menú</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FoodDrinksItem
