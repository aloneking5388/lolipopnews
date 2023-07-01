import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <>
       <section className='social'>
        <div className='socBox'>
          <FaFacebookF />{" "}
          <span> 12,740 Likes</span>
        </div>
        <div className='socBox'>
          <FaPinterestP />{" "}
          <span> 5,600 Fans</span>
        </div>
        <div className='socBox'>
          <FaTwitter />{" "}
          <span> 8,700 Followers</span>
        </div>
        <div className='socBox'>
          <FaLinkedinIn />{" "}
          <span> 22,700 Followers</span>
        </div>
        <div className='socBox'>
          <FaYoutube />{" "}
          <span> 2,700 Subscriber</span>
        </div>
      </section>
    </>
  )
}

export default SocialMedia