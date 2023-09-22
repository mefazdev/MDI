import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function Hadiya() {
  return (
    <div>
        <Navbar/>

        <div className='bg-cyan-900 h-52 md:h-72 pt-5'>
           <div className='px-4 md:px-0 md:w-11/12 m-auto'>

           <p className='text-gray-100'>Home /  Hadiya Academy</p>
           <h1 className='text-center text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   '>MDI HADIYA ACADEMY </h1>
           </div>
        </div>

        <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div
          className="px-4 md:px-0 md:w-11/12 m-auto bg-white p-1  grid lg:grid-cols-3  gap-6 ">
          <div className='lg:col-span-2 '>
          <h1 className="text-2xl text-cyan-900">MDI Hadiya Academy</h1>

<p className="mt-4">
MDI adds another golden feather to girls education with its exemplary academic performance and amazing features. Hadiya is a specially designed curriculum for women, who completed their class 10th, with Islamic and secular sciences to mould a steadfast women community with thoroughly designed Islamic worldview. Aiming to with the thorough understanding of Islamic knowledge and tradition, the programme includes core Islamic subjects such sharia, theology, Qur’anic exegesis (Tafseer), and Islamic Ideology along with some important skill-developing, necessary to serve their family with excellent expertise. The students enjoy the opportunity to pursue their higher secondary studies of their choice. In addition to imparting sacred and profound knowledge, the curriculum, and the environment within which it is taught have been set up to produce a band of female scholars, their life marked by tradition, culture, spirituality, humanity and responsibility Presently, as many as 123 girls have been enrolled in Hadiya academy.

</p>
          </div>

          <div className='hadiya__img h-64 lg:h-full   order-first lg:order-last '>

          </div>
          
           

           
        </div>
      </div>
      <Footer/>
    </div>
  )
}
