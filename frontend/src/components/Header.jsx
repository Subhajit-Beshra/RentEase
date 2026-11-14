import React from 'react'
import Navbar from './Navbar'
import heroImage from "../../public/Hero-Image.jpg"

const Header = () => {
  return (
    <div className='relative '>
        <img src={heroImage} alt="" className='w-full h-[200px] sm:h-[400px] md:h-[400px] lg:h-[600px] object-cover' />
        <div className='absolute top-0 left-0 w-full'>
            <Navbar/>
        </div>
    </div>
  )
}

export default Header