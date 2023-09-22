import Link from 'next/link'
import React from 'react'
import founder from '../assets/images/founder.JPG'
import Image from 'next/image'
export default function Message() {
  return (
    <div className='bg-slate-100   py-4 mt-10 lg:mt-20'><div className="home__about px-4 md:px-0 md:w-11/12 ">
    <div className="home__about__head ">
   
    </div>
    <div className="home__about__content grid grid-cols-1 gap-5 lg:gap-10 lg:grid-cols-3">
 
 <div className='border-8 border-cyan-800'>
 <div className="message__img border-2 w-full  h-56 lg:h-full">
        {/* <Image src={founder} className='border-2 border-white ' /> */}
      </div>
 </div>

    
      
      <div className="home__about__content__right lg:col-span-2">
       
       <h3 className='text-2xl'>Founder&apos;s Message</h3>
        <p className='mt-2  ' >
          MDI (Madaru Da&apos;wathil Islamiyya), an Islamic institution, has been
          operating in the eastern part of Nilambur sub-district in the
          Malappuram district of Kerala for the past two decades. Under the
          leadership of MDI, it has been actively involved in the fields of
          religious, physical, and technical education, primarily focusing on
          women&apos;s education and empowerment in the rural villages of eastern
          Nilambur.Under the leadership of MDI (Madaruddeen Institute), for
          the past 20 years, a remarkable service has been provided in the  
          field of women&apos;s education and empowerment in the rural villages of
          eastern Nilambur. MDI&apos;s women&apos;s wing, known as &apos;Vanitha Agathi
          Mandiram,&apos; has been rendering exceptional services in areas related
          to women&apos;s education, empowerment, and socio-economic development.
          In addition to that, MDI oversees the operation of the &apos;Vanitha Arts
          & Hadiya Academy 
          {/* We work to enable
students from backward sections to have the skill to do higher studies, start a business, engage
with the modern world and lead their community. Our goal is to empower the deprived sections
of society by developing young leaders. */}
        </p>
       
       
        <p className='text-xl mt-3 text-black'>Shoukathali Saqafi</p>
        <p className='text-gray-700 '>Founder & General Secretary of MDI Karulai</p>
      </div>
    </div>
  </div></div>
    
  )
}
