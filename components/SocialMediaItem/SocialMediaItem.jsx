import React from 'react'
import {FaInstagram, FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa'

const SocialMediaItem = () => {
  return (
    <div className="flex gap-4">
        <a href="https://www.instagram.com/itzanabelize/?hl=en" target="_blank" rel="noreferrer" className="text-white">
            <FaInstagram size={20} />
        </a>
        <a href="https://www.facebook.com/ItzanaBelize/" target="_blank" rel="noreferrer" className="text-white">
            <FaFacebookF size={20} />
        </a>
        <a href="https://www.youtube.com/channel/UCSG8XSu8sbRXe2iT6c3FKgA" target="_blank" rel="noreferrer" className="text-white">
            <FaYoutube size={20} />
        </a>
    </div>
  )
}

export default SocialMediaItem