import Navbar from '@/components/Navbar'
import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Footer from '@/components/Footer';
export default function Contact() {
  return (
    <div>
        <Navbar/>

        <div className='bg-cyan-900  pb-16 lg:pb-24   pt-20'>
           <div className='px-4 md:px-0 md:w-11/12 m-auto'>

           <p className='text-gray-100'>Home / Contact</p>
           <h1 className='text-center text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   '>CONTACT US </h1>
           </div>
        </div>
        <div className="content pt-7 md:pt-16 pb-7 md:pb-28">
        <div
          className="px-4 md:px-0 md:w-11/12 m-auto bg-white p-1  grid lg:grid-cols-3  ">
            <div className='lg:col-span-2'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956.3083765011736!2d76.29697293848197!3d11.289557332603811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6249e9b6c668d%3A0xda7a2ef0888010ba!2sMADARU%20DA&#39;WATHIL%20ISLAMIYYA!5e0!3m2!1sen!2sin!4v1695385451700!5m2!1sen!2sin" width={'100%'} height="450"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     
            </div>
            <div className='bg-cyan-900 text-white p-11 '>
              <p className='text-2xl font-bold'>Get In Touch</p>
 
              <div className='flex mt-5'>
                <PlaceIcon className='text-cyan-600'/>
 <p>Address</p>
              </div>
              <div className='ml-6'>
                <p>MADARU DA&apos;WATHIL ISLAMIYYA</p>
                <p>Karulai PO</p>
                <p>Malappuram</p>
                <p>Kerala, India</p>
             <p>679330</p>
              </div>

              <div className='flex mt-5'>
                <LocalPostOfficeIcon className='text-cyan-600'/>
 <p className='ml-1'>Email</p>

              </div><a href="mailto:info@mdikarulai.in"><p className='ml-7'>info@mdikarulai.in</p></a>
              


              <div className='flex mt-5'>
                <LocalPhoneIcon className='text-cyan-600'/>
 <p className='ml-1'>Phone</p>

              </div>
              <div className='ml-7'>
              <a href="tel:+919656570068"> <p>9656570068</p></a>
              <a href="tel:+916238604143">
    <p>6238604143</p></a>
              </div>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
