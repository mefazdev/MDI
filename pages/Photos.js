import Navbar from '@/components/Navbar'
import React from 'react'

export default function Hadiya() {
  return (
    <div>
        <Navbar/>

        <div className='bg-cyan-900 h-52 md:h-72 pt-5'>
           <div className='px-4 md:px-0 md:w-11/12 m-auto'>

           <p className='text-gray-100'>Home /  Photo Galler</p>
           <h1 className='text-center text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   '>PHOTO GALLERY</h1>
           </div>
        </div>
    </div>
  )
}
