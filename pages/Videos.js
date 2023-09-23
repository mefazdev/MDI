import Navbar from '@/components/Navbar'
import React from 'react'

export default function Videos() {
  return (
    <div>
        <Navbar/>

        <div className='bg-cyan-900  pb-16 lg:pb-24   pt-20'>
           <div className='px-4 md:px-0 md:w-11/12 m-auto'>

           <p className='text-gray-100'>Home / Video Gallery</p>
           <h1 className='text-center text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   '>VIDEO GALLERY </h1>
           </div>
        </div>
    </div>
  )
}
