import React from "react";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ApartmentIcon from "@mui/icons-material/Apartment";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Link from "next/link";
export default function Footer() {
  return (
    <div className="footer bg-cyan-900 pt-3 md:pt-16  pb-10 ">
      <div className="footer__content px-4 md:px-0 md:w-11/12 m-auto lg:gap-10 grid lg:grid-cols-4">
        <div className="footer__item">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/About">
            <p>About</p>
          </Link>
          <Link href="/Donate">
            <p>Donate</p>
          </Link>
          <Link href="/Contact">
            <p>Contact us</p>
          </Link>
        </div>

        <div className="footer__item">
          <Link href="/Photos">
            <p>Photo Gallery</p>
          </Link>
          <Link href="/Videos">
            <p>Video Gallery</p>
          </Link>
          <Link href="/Orphanage">
            <p>Womens Orphanage</p>
          </Link>
          <Link href="/School">
            <p>English School</p>
          </Link>
        </div>
        <div className="footer__item">
          <Link href="/Hadiya">
            <p>Hadiya Academy</p>
          </Link>
          <Link href="/Hadiya">
            <p>Womens Arts</p>
          </Link>
          <Link href="/Zahrath">
            <p>Zahra Preschool</p>
          </Link>
          <Link href="/Homecare">
            <p>Home Care</p>
          </Link>
        </div>
        <div id="footer__adress" className="footer__item">
          <div className="flex footer__name">
            <ApartmentIcon id="footer__icon" />
            <div>
              <p>MDI KARULAI</p>

              <h3>Krulai, Nilambur</h3>
              <h3> Malappuram Kerala</h3>
              <h3>India</h3>
            </div>
          </div>
          <div className="flex footer__phone">
            <CallIcon id="footer__icon" />
            <p>+91 9656570068</p>
          </div>
          <div className="flex footer__phone">
            <EmailIcon id="footer__icon" />
            <p>info@mdikarulai.in </p>
          </div>
          <div className="footer__input w-fit grid grid-cols-4  gap-3">
            <a href="https://www.facebook.com/mdischoolkarulai?mibextid=LQQJ4d">
              <div className="h-8 w-8 bg-white text-cyan-900   rounded-full flex justify-center items-center">
                <FacebookIcon />
              </div>
            </a>

            <a
              href="https://youtube.com/@mdikarulai714?si=8O7AhgVbFAXe0QwH
"
            >
              <div className="h-8 w-8 bg-white text-cyan-900   rounded-full flex justify-center items-center">
                <InstagramIcon />
              </div>
            </a>
            {/* <div className="h-8 w-8 bg-white text-cyan-900   rounded-full flex justify-center items-center"><TwitterIcon/></div> */}

            <a href="https://www.youtube.com/@mdikarulai714">
              <div className="h-8 w-8 bg-white text-cyan-900   rounded-full flex justify-center items-center">
                <YouTubeIcon />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="footer__bottom border-t">
         <h4>All rights reserved. Developed by <a href="whatsapp://send?phone=+918606256402" data-action="share/whatsapp/share"   >
                 
               <span style={{textDecoration:'underline',color:"#fff"}}>Booreact</span>
                 
               
             
  </a>
         </h4>
      </div> */}
    </div>
  );
}
