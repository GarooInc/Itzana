"use client";
import React, {useState, useEffect} from 'react'
import PocketBase from 'pocketbase'
import { useRouter } from "next/navigation"


const ExperiencesItem = () => {
    const router = useRouter()
    const [experiences, setExperiences] = useState([]);

    const pb = new PocketBase('https://kaana.garooinc.com/kaana')
    pb.autoCancellation(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('Experiences').getFullList({
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
        {console.log(experiences)}
        {
            experiences.map((item, index) => (
                <div key={index} className="bg-white px-2 pb-12 rounded-lg gap-2 flex flex-col relative cursor-pointer" onClick={() => router.push(`/experience/${item.id}`)}>
                    <img className="md:w-full md:h-42 w-40 h-48 rounded-lg object-cover" src={`https://kaana.garooinc.com/kaana/api/files/${item.collectionId}/${item.id}/${item.image}?token=`} alt={item.name} />
                    <h3 className="text-black text-base leading-tight font-futura mt-2">{item.title}</h3>
                </div>
            ))
        }
    </div>

  )
}

export default ExperiencesItem