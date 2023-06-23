import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaPinterestSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <>
       <section className='social'>
        <div className='socBox'>
          <FaFacebookSquare />{" "}
          <span>12,740 Likes</span>
        </div>
        <div className='socBox'>
          <FaPinterestSquare />{" "}
          <span>5,600 Fans</span>
        </div>
        <div className='socBox'>
          <FaTwitterSquare />{" "}
          <span>8,700 Followers</span>
        </div>
        <div className='socBox'>
          <FaLinkedin />{" "}
          <span>22,700 Followers</span>
        </div>
        <div className='socBox'>
          <FaYoutubeSquare />{" "}
          <span>2,700 Subscriber</span>
        </div>
      </section>
    </>
  )
}

export default SocialMedia