import Link from 'next/link'
import React from 'react'
// import zahra from '../assets/images/'
export default function Instituions() {
  return (
    <div className="h__prgm px-0 md:px-0 md:w-11/12 m-auto  ">
    <div className="h__prgm__content">
      <div className="home__subhead  bg-cyan-800">
        <h3>Our Instituions</h3>
      </div>

       
      <div className="prgm__content__row mt-4 gap-5 grid lg:grid-cols-3">
        <Link href="/School">
          <div className="school__box hover:scale-105 transform transition-transform duration-300 ease-in-out">
            <div className="prgm__row__caption flex justify-between px-2">
              <h3>Englsih School </h3>
              <p className='text-gray-300 text-sm '>Know More</p>
        
            </div>
          </div>
        </Link>
        <Link href="/Hadiy">
          <div className="hadiya__box hover:scale-105 transform transition-transform duration-300 ease-in-out">
            <div className="prgm__row__caption flex justify-between px-2">
              <h3>Hadiya Academi</h3>
              <p className='text-gray-300 text-sm'>Know More</p>
        
            </div>
          </div>
        </Link>
        
        <Link href="/Zahrath">
          <div className="zahra__box hover:scale-105 transform transition-transform duration-300 ease-in-out"
          
       
          >
            <div className="prgm__row__caption flex justify-between px-2">
              <h3> Zahrathul Qur&apos;an </h3>
              <p className='text-gray-300 text-sm'>Know More</p>
        
            </div>
          </div>
        </Link>
        <Link href="/Orphanage">
          <div className="orphanage__box hover:scale-105 transform transition-transform duration-300 ease-in-out">
            <div className="prgm__row__caption flex justify-between px-2">
              <h3> Womens Orphanage & Destitute home</h3>
              <p className='text-gray-300 text-sm'>Know More</p>
            </div>
          </div>
        </Link>
       </div>
    </div>
  </div>
  )
}
