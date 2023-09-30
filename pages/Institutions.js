import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor-v2";
import Link from "next/link";

export default function Instituions() {

 
  return (
    <div>
      <Navbar />

      <div className="bg-cyan-900 pb-16 lg:pb-24   pt-20 ">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / Instituions</p>
          <h1 className="text-center text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
            MDI INSTITUTIONS
          </h1>
        </div>
      </div>

      <div className="content p-4 md:p-0 md:w-11/12 m-auto  pt-7 md:pt-16 pb-7 md:pb-32 grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Link href="/Orphanage">
            <div className="orphanage__box hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <div className="prgm__row__caption flex justify-between px-2">
                <h3> Womens Orphanage & Destitute home</h3>
                <p className="text-gray-300 text-sm">Know More</p>
              </div>
            </div>
          </Link>  <Link href="/Hadiya">
            <div className="hadiya__box hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <div className="prgm__row__caption flex justify-between px-2">
                <h3>Womens Arts & Hadiya Academi</h3>
                <p className="text-gray-300 text-sm">Know More</p>
              </div>
            </div>
          </Link>

         
          <Link href="/School">
            <div className="school__box hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <div className="prgm__row__caption flex justify-between px-2">
                <h3>Englsih School (CBSE)</h3>
                <p className="text-gray-300 text-sm ">Know More</p>
              </div>
            </div>
          </Link>

          <Link href="/Zahrath">
            <div className="zahra__box hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <div className="prgm__row__caption flex justify-between px-2">
                <h3> Zahrathul Qur&apos;an </h3>
                <p className="text-gray-300 text-sm">Know More</p>
              </div>
            </div>
          </Link>

          <Link href="/Homecare">
            <div className="care__box hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <div className="prgm__row__caption flex justify-between px-2">
                <h3>Home Care</h3>
                <p className="text-gray-300 text-sm">Know More</p>
              </div>
            </div>
          </Link>
      </div>
      <Footer />
    </div>
  );
}
