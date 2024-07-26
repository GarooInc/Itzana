"use client";
import React, { useState, useEffect } from 'react'
import PocketBase from 'pocketbase'
import { IoIosArrowDropleft } from "react-icons/io"
import { useRouter } from "next/navigation"

const ExperiencePage = ({params}) => {
    const [experience, setExperience] = useState('')
    const router = useRouter()

    const pb = new PocketBase('https://kaana.garooinc.com/kaana')
    pb.autoCancellation(false)

    const current = params.experienceId
    console.log(current)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const record = await pb.collection('Experiences').getOne(current)
                setExperience(record);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData()
    }, [params.postId])


  return (
    <div className="page bg-white md:py-20 md:px-20 px-10 py-10">
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='flex justify-between items-center w-full py-4'>
                <IoIosArrowDropleft className="text-3xl text-lightgray" onClick={() => router.back()} />
                <div className='flex justify-center items-center gap-4'>
                    <img src="/assets/images/logo_v2.png" alt="logo" className="w-[100px]" />
                </div>
                <div></div>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 pt-10'>
                <h1 className="text-4xl text-center text-oxblood font-futura font-bold">{experience.title}</h1>
                <img className="md:w-[600px] md:h-80 w-40 h-48 rounded-lg object-cover" src={`https://kaana.garooinc.com/kaana/api/files/${experience.collectionId}/${experience.id}/${experience.image}?token=`} alt={experience.name} />
                <div className=" text-black font-futura"  dangerouslySetInnerHTML={{ __html: experience.description }}></div>
            </div>
        </div>
    </div>

  )
}

export default ExperiencePage