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
    <div className="page bg-white md:py-20 py-10">
        <div className='flex flex-col justify-center items-center w-full relative'>
            <IoIosArrowDropleft className="text-3xl text-lightgray absolute left-10 top-10" onClick={() => router.back()} />
            <div className='flex justify-center items-center gap-4'>
                <img src="/assets/images/logo_v2.png" alt="logo" className="w-[100px]" />
            </div>
            <div className='flex flex-col justify-center items-center gap-4 pt-4 w-full'>
                <h1 className="text-2xl md:text-4xl text-center text-oxblood font-futura font-bold">{experience.title}</h1>
                <div className='md:flex flex-col md:flex-row justify-center items-center md:px-10 md:gap-4 w-full'>
                    <div className='md:w-1/2'>
                        <img className="w-full object-cover" src={`https://kaana.garooinc.com/kaana/api/files/${experience.collectionId}/${experience.id}/${experience.image}?token=`} alt={experience.name} />
                    </div>
                    <div className="text-black md:px-0 px-10 md:w-1/2 gap-4 flex flex-col md:py-0 py-10 experiences"  dangerouslySetInnerHTML={{ __html: experience.description }}></div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ExperiencePage