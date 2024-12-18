import React from 'react'
import {FaInstagram, FaFacebookF, FaYoutube, FaTiktok} from 'react-icons/fa'

const SocialMediaItem = () => {

  const socialMedia = [
    {
      id: 1,
      name: 'Instagram',
      link: 'https://www.instagram.com/itzanabelize/?hl=en',
      icon: <FaInstagram  className='media_icon'/>
    },
    {
      id: 2,
      name: 'Facebook',
      link: 'https://www.facebook.com/ItzanaBelize/',
      icon: <FaFacebookF  className='media_icon'/>
    },
    {
      id: 3,
      name: 'Youtube',
      link: 'https://www.youtube.com/channel/UCSG8XSu8sbRXe2iT6c3FKgA',
      icon: <FaYoutube  className='media_icon'/>
    },
    {
      id: 4,
      name: 'Tiktok',
      link: 'https://www.tiktok.com/@itzanabelize',
      icon: <FaTiktok  className='media_icon' />
    }
  ]

  return (
    <div className="grid grid-cols-2 gap-40 mt-20">
      {socialMedia.map((item) => (
        <a key={item.id} href ={item.link} target="_blank" rel="noreferrer">
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialMediaItem