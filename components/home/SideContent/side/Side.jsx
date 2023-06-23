"use client"

import Heading from '@/components/common/Heading/Heading'
import React from 'react'
import SocialMedia from '../social/SocialMedia'
import Tpost from '../Tpost/Tpost'
import Slider from "react-slick";
import { gallery } from '@/dummyData'
import { FaPaperPlane } from 'react-icons/fa'

const Side = () => {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

  const catgeory = ["world", "travel", "sport", "fun", "health", "fashion", "business", "technology"]

  return (
    <>
      <Heading title='Stay Connected' />
      <SocialMedia />
      <Heading title='Subscribe' />
      <section className='subscribe'>
        <h1 className='title'>Subscribe to our New Stories</h1>
        <form>
          <input type='email' placeholder='Email Address...' />
          <button>
            <FaPaperPlane /> SUBMIT
          </button>
        </form>
      </section>
      <section className='banner'>
        <img src='./images/sidebar-banner-new.jpg' alt='' />
      </section>
      <Tpost />
      <section className='catgorys'>
        <Heading title='Catgeorys' />
        {/*<div className='items'>{allCat}</div>*/}
        {catgeory.map((val) => {
          return (
            <div className='category category1'>
              <span>{val}</span>
            </div>
          )
        })}
      </section>
      <section className='gallery'>
        <Heading title='Gallery' />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className='img'>
                <img src={val.cover} alt='slider' />
              </div>
            )
          })}
        </Slider>
      </section>
    </>
  )
}

export default Side