"use client";
import React, {useState, useEffect} from 'react'
import PocketBase from 'pocketbase'
import { FaLocationDot } from "react-icons/fa6"
import { FaRegCalendar } from "react-icons/fa6"
import { useTranslation } from 'react-i18next'


const ActivitiesItem = () => {
    const [activities, setActivities] = useState([])
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

    const pb = new PocketBase(`${backendUrl}`)
    pb.autoCancellation(false);
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('Activities_Calendar').getFullList({
                    sort: '-created',
                });
                console.log(records)
                setActivities(records);
            } catch (error) {
                console.error("Error fetching data: ", error)
            }
        }

        fetchData()
    }, [])


  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 grid-flow-row-dense auto-rows-auto px-10 py-10">
        { 
            activities.map((item, index) => (
                <div key={index} className={`bg-white px-2 pb-12 gap-2 flex flex-col relative cursor-pointer ${(index + 1) % 4 !== 0 ? 'md:border-r md:border-black' : ''} ${(index + 1) % 2 !== 0 ? 'md:border-r md:border-black' : ''}`}>
                    <img className="w-full md:h-60 h-60 object-cover" src={`${backendUrl}/api/files/${item.collectionId}/${item.id}/${item.Image}?token=`} alt={item.name} />
                    <div className='flex flex-col gap-4  w-full'>
                        <h3 className="tiempos_description">{item[`title_${currentLocale}`]}</h3>
                        <div className="flex items-center leading-none gap-2 w-full">
                            <FaLocationDot className="icon_activities text-md " />
                            <p className='text-black text-md font-futura font-medium tracking-tight w-3/5'>{item[`location_${currentLocale}`]}</p>
                        </div>
                        <div className="flex items-center leading-none gap-2 w-full">
                            <FaRegCalendar className="icon_activities text-md" />
                            <p className='text-black text-md font-futura font-medium tracking-tight w-3/5'>{item[`date_${currentLocale}`]}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ActivitiesItem