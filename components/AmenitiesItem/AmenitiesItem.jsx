"use client";
import React, {useState, useEffect} from 'react'
import PocketBase from 'pocketbase'
import { useRouter } from "next/navigation"
import { CgArrowLongRight } from "react-icons/cg"
import { useTranslation } from 'react-i18next'


const AmenitiesItem = () => {
    const router = useRouter()
    const [experiences, setExperiences] = useState([]);
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;

    const pb = new PocketBase(`${backendUrl}`);
    pb.autoCancellation(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('amenities').getFullList({
                    sort: '-created',
                });
                console.log(records)
                setExperiences(records);
            } catch (error) {
                console.error("Error fetching data: ", error)
            }
        }

        fetchData()
    }, [])

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 grid-flow-row-dense auto-rows-auto pt-10">
        {
            experiences.map((item, index) => (
                <div key={index} className={`bg-white px-2 pb-12 gap-2 flex flex-col relative cursor-pointer ${(index + 1) % 4 !== 0 ? 'md:border-r md:border-black' : ''} ${(index + 1) % 2 !== 0 ? 'border-r border-black' : ''}`}
                    onClick={() => router.push(`/experience/${item.id}`)}>
                    <img className="md:w-full md:h-42 w-40 h-48  object-cover" src={`${backendUrl}/api/files/${item.collectionId}/${item.id}/${item.image}?token=`} alt={item.name} />
                    <div className='flex justify-between items-center'>
                        <h3 className="text-black text-base leading-tight font-tiempos mt-2">{item[`title_${currentLocale}`]}</h3>
                        <CgArrowLongRight className="text-2xl text-black" />
                    </div>
                </div>
            ))
        }
    </div>

  )
}

export default AmenitiesItem