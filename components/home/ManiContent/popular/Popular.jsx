"use client"

import Heading from '@/components/common/Heading/Heading'
import { popular } from '@/dummyData'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCalendarAlt, FaComments } from 'react-icons/fa';


const Popular = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  }
  return (
    <>
        <section className='popular'>
          <Heading title='Popular' />
          <div className="content">
            <Slider {...settings}>
              {popular.map((val) => {
                 return (
                  <div className='items'>
                    <div className='box shadow'>
                      <div className='images row'>
                        <div className='img'>
                          <img src={val.cover} alt='' />
                        </div>
                        <div class='category category1'>
                          <span>{val.catgeory}</span>
                        </div>
                      </div>
                      <div className='text row'>
                        <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                        <div className='date'>
                          <FaCalendarAlt className="icon" />{" "}
                          <label>{val.date}</label>
                        </div>
                        <div className='comment'>
                          <FaComments className="icon" />{" "}
                          <label>{val.comments}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </section>
    </>
  )
}

export default Popular