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
        <div className="grid md:grid-cols-4 md:gap-10 grid-cols-1 gap-4 md:w-3/4 w-full px-10 py-10">
            {
                data.map((item, index) => ( 
                    <div className='flex' key={index}>
                        <a href={item.link_service? item.link_service:""} className='flex gap-4 justify-start items-center'>
                            <img className="md:w-20 md:h-20 w-16 rounded-full object-cover" src={`${backendUrl}/api/files/${item.collectionId}/${item.id}/${item.icon}?token=`} alt={item.name} />
                            <span className='text-white font-futura infodisplay' dangerouslySetInnerHTML={{ __html: item[`title_${currentLocale}`] }}></span>
                        </a>
                    </div>
                ))
            }
        </div>
  )
}

export default ServicesItem