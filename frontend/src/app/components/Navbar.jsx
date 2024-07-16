"use client"
import React, { useState } from 'react'
import { navbar } from '../constants'
import Button from './Button'

const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  

  return (
    <nav className='navbar w-full px-6 md:px-24 py-3 md:py-5 flex fixed left-0 top-0 z-30'>
      <div className='nav-container w-full flex justify-between items-center'>
        <div className='logo font-heading text-[30px]'>
          YourAds
        </div>
        <div className='hamburger' onClick={handleClick}>
          <i className={click ? 'fa-regular fa-circle-xmark text-[30px]' : 'fa-solid fa-bars text-[30px]'}></i>
        </div>
        <ul className={click ? 'hidden nav-menu active' : 'hidden nav-menu'}>
          {
            navbar.links.map((link,index) => (
              <li key={index} className='nav-item hover:cursor-pointer hover:text-primary'>
                <a href={`#${link.id}`}>{link.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar