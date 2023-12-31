import React from "react";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ApartmentIcon from "@mui/icons-material/Apartment";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from '../assets/images/logo.png'
import Link from "next/link";
import Image from "next/image";
import cal from "../assets/images/name-1.png";
export default function Footer() {
  return (
    <div className="footer bg-cyan-950  pt-10  md:pt-16    ">
      <div className="footer__content px-10 md:px-0 md:w-10/12 m-auto gap-10 lg:gap-5 grid lg:grid-cols-4">
        <div >
        <div className="lg:m-auto w-fit">
          <p className="text-white">
            Madaru da&apos;awathil Islamiyya, is the leading academic and charitable
            organization established in 1997, formed for the educational, moral,
            social and economic upliftment of the society, especially the Muslim
            community.
          </p>
          <div className="mt-5 w-fit grid grid-cols-4  gap-3">
            <a href="https://www.facebook.com/mdischoolkarulai?mibextid=LQQJ4d">
              <div className="h-8 w-8 bg-white text-cyan-900   rounded-sm flex justify-center items-center">
                <FacebookIcon />
              </div>
            </a>

            <a
              href='https://www.instagram.com/madaru_dawathil_islamiyya_mdi/?igshid=NzZlODBkYWE4Ng%3D%3D'
            >
              <div className="h-8 w-8 bg-white text-cyan-900 rounded-sm   flex justify-center items-center">
                <InstagramIcon />
              </div>
            </a>
           
            <a href="https://www.youtube.com/@mdikarulai714">
              <div className="h-8 w-8 bg-white text-cyan-900    rounded-sm flex justify-center items-center">
                <YouTubeIcon />
              </div>
            </a>
          </div>
       
          </div>   </div>

        <div className="text-white">
        <div className="lg:m-auto w-fit">
          <h6 className="text-xl font-bold">GET IN TOUCH</h6>
          <div className="flex footer__phone">
            <a href="tel:+919656570068"><CallIcon id="footer__icon" /></a>
            
            <a href="tel:+919656570068"><p>+91 9656570068</p></a>
            
          </div>
        
          <div className="flex footer__phone">
          <a href="mailto:info@mdikarulai.in"><EmailIcon id="footer__icon" /></a>
            
          <a href="mailto:info@mdikarulai.in"> <p>info@mdikarulai.in </p></a>
          </div>
          <div className="flex footer__name mt-3">
            <ApartmentIcon id="footer__icon" />
            <div className="ml-2">
              <p className="ml-1">MDI  </p>

              <h3>Karulai, Nilambur</h3>
              
              <h3> Malappuram Kerala</h3>
              <h3>India</h3>
              <h3>PIN : 679330</h3>
            </div>
          </div>
          </div>
        </div>
        <div className="text-white  ">
          <div className="lg:m-auto w-fit">
          <h6 className="text-xl font-bold">USEFUL LINKS</h6>
         <div className="mt-2">
         <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/About">
            <p>About</p>
          </Link>
          <Link href="/Donate">
            <p>Donate</p>
          </Link>
          <Link href="/Institutions">
            <p>Institutions</p>
          </Link>
          <Link href="/Events">
            <p>Events</p>
          </Link>
          {/* <Link href="/Donate">
            <p>Downloads</p>
          </Link> */}
          <Link href="/Contact">
            <p>Contact us</p>
          </Link>
         </div>
          </div>
          
        </div>

        <div className="lg:m-auto">
          <div className="bg-white w-fit justify-center items-center rounded  p-2 px-5">
          <div className="w-16 lg:w-28">
            <Image src={logo} />
          </div>
          <div className=" w-16 lg:w-28 lg:mt-3 m-auto">
            <Image src={cal } />
          </div>
          </div>
          
        </div>

         

        
        
         
      </div>

      <div className="border-t border-gray-600 p-2   mt-10 text-gray-200">
<div className=" md:w-10/12 m-auto grid lg:grid-cols-2 ">
<p className="text-sm m-auto lg:m-0"> © MDI Karulai 2023. <spa>All Rights reserved</spa></p> 
<p className="text-sm m-auto lg:m-0">Powered by <a href="whatsapp://send?phone=+918606256402" data-action="share/whatsapp/share"   >
                 
                 <span style={{textDecoration:'underline'}}>Booreact</span>
                   
                 
               
    </a></p>
</div>
        
         {/* <h4>All rights reserved. Developed by <a href="whatsapp://send?phone=+918606256402" data-action="share/whatsapp/share"   >
                 
               <span style={{textDecoration:'underline',color:"#fff"}}>Booreact</span>
                 
               
             
  </a>
         </h4> */}
      </div>
    </div>
  );
}
