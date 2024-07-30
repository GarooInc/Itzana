"use client";
import React, {useState, useEffect} from 'react'
import PocketBase from 'pocketbase'
import { FaLocationDot } from "react-icons/fa6"
import { FaRegCalendar } from "react-icons/fa6"



const ActivitiesItem = () => {
    const [activities, setActivities] = useState([])

    const pb = new PocketBase('https://kaana.garooinc.com/kaana')
    pb.autoCancellation(false);

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
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 grid-flow-row-dense auto-rows-auto px-10">
        { 
            activities.map((item, index) => (
                <div key={index} className={`bg-white h-40 shadow rounded-lg gap-2 flex relative`}>
                    <img className="md:w-full md:h-full w-40 rounded-lg object-cover" src={`https://kaana.garooinc.com/kaana/api/files/${item.collectionId}/${item.id}/${item.Image}?token=`} alt={item.name} />
                    <div className='flex flex-col gap-4'>
                        <h3 className="text-black text-lg leading-tight font-futura mt-2">{item.Title}</h3>
                        <div className="flex items-center text-black leading-none gap-2">
                            <FaLocationDot className="icon_activities" />
                            <p className=' description_activities'>{item.Location}</p>
                        </div>
                        <div className="flex items-center text-black leading-none gap-2">
                            <FaRegCalendar className="icon_activities" />
                            <p className=' description_activities'>{item.Date}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ActivitiesItem