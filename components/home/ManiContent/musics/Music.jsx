"use client"

import Heading from "@/components/common/Heading/Heading"
import { popular } from "@/dummyData"
import { FaCalendarAlt, FaComments, FaShare } from "react-icons/fa"
import Slider from "react-slick"

const Music = () => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  }
  return (
    <>
         <section className='music'>
        <Heading title='Music News' />
        <div className='content'>
          <Slider {...settings}>
            {popular
              .filter((val) => val.catgeory === "fun")
              .map((val) => {
                return (
                  <div className='items'>
                    <div className='box shadow flexSB'>
                      <div className='images'>
                        <div className='img'>
                          <img src={val.cover} alt={val.title} />
                        </div>
                        <div class='category category1'>
                          <span>{val.catgeory}</span>
                        </div>
                      </div>
                      <div className='text'>
                        <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                        <div className='date'>
                          <FaCalendarAlt className="icon" />{" "}
                          <label>{val.date}</label>
                        </div>
                        <p className='desc'>{val.desc.slice(0, 250)}...</p>
                        <div className='comment'>
                          <FaShare className="icon" />{" "}
                          <label>Share / </label>
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

export default Music