import React from 'react'

const Carousel = ({images}) => {
  return (
    <div className="carousel w-full h-full">
        {
            images.map((image, index) => (
                <div id={`slide-${index}`} key={index} className="carousel-item relative w-full">
                    <img src={image} alt={`slide-${index}`} className="w-full object-cover" />
                    <div className="absolute top-1/2 flex -translate-y-1/2 transform justify-between">
                        {
                            index !== 0 && <a href={`#slide-${index - 1}`} className="absolute bg-aqua text-white px-4 py-2 rounded-full left-5">❮</a>
                        }
                        {
                            index !== images.length - 1 && <a href={`#slide-${index}`} className="absolute bg-aqua text-white px-4 py-2 rounded-full right-5">❯</a>
                        }
                    </div>
                </div> 
                )
            )
        }
    </div>
  )
}

export default Carousel