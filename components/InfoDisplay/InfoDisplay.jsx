"use client";
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { useTranslation } from 'react-i18next';
import useFormattedText from '@/hooks/useFormattedText';


const InfoDisplay = ({collection}) => {
    const [data, setData] = useState([]);
    const pb = new PocketBase('https://kaana.garooinc.com/kaana');
    pb.autoCancellation(false);

    const { i18n } = useTranslation();
    const currentLocale = i18n.language;

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection(collection).getFullList({
                    sort: '-created',
                });
                setData(records);
            }
            catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        fetchData();
    }, []);


  return (
    <div className='flex flex-col justify-center items-center gap-4 py-10 md:w-3/4 px-10'>
    {
        data.map((item, index) => (
            <div className="collapse collapse-arrow border-b border-cream w-full rounded-none" key={index}>
            <input type="radio" name="my-accordion-2" defaultChecked className='rounded-none'/>
            <div className="collapse-title text-xl font-medium text-white font-tiempos">
                {item[`title_${currentLocale}`]}
            </div>
            <div className="collapse-content">
                <p className='text-white font-futura'
                dangerouslySetInnerHTML={{ __html: item[`desc_${currentLocale}`] }}>
                </p>
            </div>
            </div>
        ))
    }
    </div>
  )
}

export default InfoDisplay