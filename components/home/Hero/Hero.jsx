"use client"

import { hero } from '@/dummyData'
import React, { useState } from 'react'
import Card from './Card'

const Hero = () => {
  const [items] = useState(hero)
  return (
    <>
       <section className='hero'>
        <div className='container'>
          {items.map((item) => {
            
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Hero