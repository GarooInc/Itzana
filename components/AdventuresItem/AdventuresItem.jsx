"use client";
import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';

const AdventuresItem = () => {
    const [adventures, setAdventures] = useState([]);

    const pb = new PocketBase('https://kaana.garooinc.com/kaana');
    pb.autoCancellation(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('Top_Five_Adventures').getFullList({
                    sort: '-created',
                });
                console.log(records);
                setAdventures(records);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 grid-flow-row-dense auto-rows-auto py-20 md:px-10">
            {adventures.map((item, index) => (
                <div key={index} className={`bg-white px-2 pb-12 shadow rounded-lg gap-2 flex flex-col relative`}>
                    <img className="md:w-full md:h-32 w-40 h-48 md:h-52 rounded-lg object-cover" src={`https://kaana.garooinc.com/kaana/api/files/${item.collectionId}/${item.id}/${item.image}?token=`} alt={item.name} />
                    <h3 className="text-black text-base leading-tight font-futura mt-2">{item.title}</h3>
                    <p className="text-black text-xs font-[futura light] leading-none">{item.short_Description}</p>
                    <p className="text-lightgray text-xs font-light leading-none font-futura absolute bottom-2 left-2"> £{item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default AdventuresItem
