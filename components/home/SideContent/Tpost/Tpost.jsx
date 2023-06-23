import Heading from '@/components/common/Heading/Heading'
import { tpost } from '@/dummyData'
import React from 'react'

const Tpost = () => {
  return (
    <>
      <section className="tpost">
        <Heading title='Tiktok post' />
        {tpost.map((val) => {
          return (
            <div className='box flexSB'>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>{val.title.slice(0, 35)}...</h1>
                <span>a year ago</span>
              </div>
            </div>
          )
        })
        }
      </section>
    </>
  )
}

export default Tpost