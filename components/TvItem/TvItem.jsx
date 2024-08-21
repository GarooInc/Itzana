"use client";
import React, {useState, useEffect} from 'react'
import PocketBase from 'pocketbase'
import FooterItem from '../FooterItem/FooterItem'



const TvItem = () => {
    const [channels, setChannels] = useState([])

    const pb = new PocketBase('https://kaana.garooinc.com/kaana')
    pb.autoCancellation(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('Tv_Guide').getFullList({
                    sort: '-created',
                });
                console.log(records)
                setChannels(records);
            } catch (error) {
                console.error("Error fetching data: ", error)
            }
        }

        fetchData()
    }, [])


  return (
    <div className="bg-green shadow flex flex-col w-full p-4 items-center justify-center h-full relative">
    <div className="flex flex-col items-center w-full">
        {channels.map((item, index) => (
        <div key={index} className="flex items-center justify-center w-full">
            <div className="flex-1 flex justify-end">
                <span className="text-cream text-md leading-tight font-futura mt-2 text-lg pr-2">{item.channel}</span>
            </div>
            <div className="w-px h-10 bg-cream"></div>
            <div className="flex-1 pl-2">
                <span className="text-cream text-md leading-tight font-futura mt-2 text-lg">{item.name}</span>
            </div>
        </div>
        ))}
    </div>
  <FooterItem transparent />
</div>

  )
}

export default TvItem