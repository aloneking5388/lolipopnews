"use client"

import { hero } from "@/dummyData";
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation'
import SinglePageSlider from "@/components/singlePage/slider/SinglePageSlider";
import Side from "@/components/home/SideContent/side/Side";
import { FaEnvelopeSquare, FaFacebookSquare, FaPinterestSquare, FaQuoteLeft, FaTwitterSquare } from "react-icons/fa";

const singlepage = () => {
  const { id } = useParams();
  const [item, setItem ] = useState(null);

  useEffect(() => {
    const item = hero.find((item) => item.id === parseInt(id))
    window.scrollTo(0, 0)
    if (item) {
      setItem(item)
    }
  },[id])

  return (
    <>
      {item ? (
        <main>
          <SinglePageSlider />
          <div className='container'>
          <section className='mainContent details'>
              <h1 className='title'>{item.title}</h1>

              <div className='author'>
                <span>by</span>
                <img src={item.authorImg} alt='' />
                <p> {item.authorName} on</p>
                <label>{item.time}</label>
              </div>

              <div className='social'>
                <div className='socBox'>
                <FaFacebookSquare />{" "}
                  <span>SHARE</span>
                </div>
                <div className='socBox'>
                <FaTwitterSquare />{" "}
                  <span>TWITTER</span>
                </div>
                <div className='socBox'>
                <FaPinterestSquare />{" "}
                </div>
                <div className='socBox'>
                  <FaEnvelopeSquare />
                </div>
              </div>

              <div className='desctop'>
                {item.desc.map((val) => {
                  return (
                    <>
                      <p>{val.para1}</p>
                      <p>{val.para2}</p>
                    </>
                  )
                })}
              </div>
              <img src={item.cover} alt='' />
              {item.desc.map((val) => (
                <p>{val.para3}</p>
              ))}

              <div className='descbot'>
                {item.details.map((data) => {
                  return (
                    <>
                      <h1>{data.title}</h1>
                      <p>{data.para1}</p>
                    </>
                  )
                })}
              </div>

              <div className='quote'>
                <FaQuoteLeft />
                {item.details.map((data) => (
                  <p>{data.quote}</p>
                ))}
              </div>

              <div className='desctop'>
                {item.details.map((data) => {
                  return (
                    <>
                      <p>{data.para2}</p>
                      <p>{data.para3}</p>
                    </>
                  )
                })}
              </div>
            </section>
            <section className='sideContent'>
              <Side />
            </section>
          </div>
        </main>
      ) : (
        <h1>not found</h1>
      )}
    </>
  )
}

export default singlepage