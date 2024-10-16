"use client";
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { useTranslation } from 'react-i18next';

const ServicesItem = () => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const [data, setData] = useState([]);
    const pb = new PocketBase(`${backendUrl}`);
    pb.autoCancellation(false);

    const { i18n } = useTranslation();
    const currentLocale = i18n.language;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection("resort_services").getFullList({
                    sort: 'id_number',
                });
                setData(records);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="flex flex-col justify-center items-center gap-4 py-10 md:w-3/4 px-10">
            {
                data.map((item, index) => ( 
                    <div className='flex gap-4 justify-center items-center' key={index}>
                        <img className="w-20 h-20 rounded-full object-cover" src={`${backendUrl}/api/files/${item.collectionId}/${item.id}/${item.icon}?token=`} alt={item.name} />
                        <span className='text-white font-futura infodisplay' dangerouslySetInnerHTML={{ __html: item[`title_${currentLocale}`] }}></span>
                    </div>
                ))
            }
        </div>
  )
}

export default ServicesItem