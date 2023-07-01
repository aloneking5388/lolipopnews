"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const header = () => {
    const [navbar, setNavbar] = useState(false);

  return (
    <>
      <section className='head'>
        <div className='container flexSB paddingTB'>
          <div className='logo'>
            <img src='/images/logo.png' alt='logo' />
          </div>
          <div className='ad'>
            <img src='/images/headerb.png' alt='Ad banner' />
          </div>
        </div>
      </section>
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/culture'>Culture</Link>
              </li>
              <li>
                <Link href='/politics'>Politics</Link>
              </li>
              <li>
                <Link href='/memes'>Memes</Link>
              </li>
              <li>
                <Link href='/sports'>Sports</Link>
              </li>
              <li>
                <Link href='/boxed'>Boxed</Link>
              </li>
              <li>
                <Link href='/reviews'>Reviews</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <FaTimes /> : <FaBars className='icon' />}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default header