"use client";
import React, {useState, useEffect} from 'react'
import PocketBase from 'pocketbase'

const Menu = () => {
    const [food, setFood] = useState([]);

    const pb = new PocketBase('https://kaana.garooinc.com/kaana')
    pb.autoCancellation(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const records = await pb.collection('Room_Service').getFullList({
                    sort: '-created',
                });
                console.log(records)
                setFood(records);
            } catch (error) {
                console.error("Error fetching data: ", error)
            }
        }

        fetchData()
    }, [])

  return (
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4 grid-flow-row-dense auto-rows-auto">
        { food.map((item, index) => (
            //if index is 0,3 , 5 apply row-span-2
            <div key={index} class={`bg-white px-2 py-6 shadow rounded-lg gap-2 flex flex-col relative ${index%3 ==0 ? 'mb-6 ' : ''}`}>
                <img className="md:w-full md:h-32 w-40 h-48 rounded-lg object-cover" src={`https://kaana.garooinc.com/kaana/api/files/${item.collectionId}/${item.id}/${item.Image}?token=`} alt={item.name} />
                <h3 class="text-black text-base leading-tight font-futura mt-2">{item.Title}</h3>
                <p class="text-black text-xs font-[futura light] leading-none">{item.Description}</p>
                <p class="text-lightgray text-xs font-light leading-none font-futura">£{item.Price}</p>
                <button class="rounded shadow justify-start items-center text-xs inline-flex font-futura bg-lightgreen text-lightgray px-2 py-1 absolute bottom-2 right-2">Add to Cart</button>
            </div>
        )) }
    </div>
  )
}

export default Menu