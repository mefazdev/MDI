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

      <div className="content  px-4 pt-10  lg:pt-20 pb-20 lg:px-0 lg:w-11/12   m-auto   gap-10 grid md:grid-cols-2 xl:grid-cols-3 ">
        <div className="bg-zinc-100 mt-10   px-8 pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
          <Link href="/Orphanage">
            <div>
              <div className="orphanage__box h-52 -mt-10"></div>
              <div className="mt-7">
                <h3 className="text-cyan-900 font-bold text-lg">
                  Womens Orphanage & Destitute home
                </h3>

                <p className="mt-1">
                  Presently, MDI Destitute Home provides comfort to 95 girls and
                  women those who are destitute and have been abandoned or
                  exploited by society, community, family, relatives etc 
                </p>
              </div>

              <button className=" mt-3   flex m-auto   bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                Know More
              </button>
            </div>
          </Link>
        </div>
        <div className="bg-zinc-100 mt-10   px-8 pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
          <Link href="/Hadiya">
            <div>
              <div className="hadiya__box h-52 -mt-10"></div>
              <div className="mt-7">
                <h3 className="text-cyan-900 font-bold text-lg">
                  Womens Arts & Hadiya Academy
                </h3>

                <p className="mt-1">
                  MDI women&apos;s college was inaugurated by Karulai Grama
                  panchayath President in Pallippadi campus and opened its gates
                  for education in June 2003, with 57 students.
                </p>
              </div>

              <button className="mt-3  flex m-auto bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                Know More
              </button>
            </div>
          </Link>
        </div>
        <div className="bg-zinc-100 mt-10   px-8 pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
          <Link href="/School">
            <div>
              <div className="school__box h-52 -mt-10"></div>
              <div className="mt-7">
                <h3 className="text-cyan-900 font-bold text-lg">
                  Englsih School (CBSE)
                </h3>

                <p className="mt-1">
                  MDI Public School adds another golden feather to the
                  educational cap of Nilambur constituency with its exemplary
                  academic performance and amazing results. 
                </p>
              </div>

              <button className="mt-3  flex m-auto bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                Know More
              </button>
            </div>
          </Link>
        </div>

        <div className="bg-zinc-100  mt-10  px-8 pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
          <Link href="/Zahrath">
            <div>
              <div className="zahra__box h-52 -mt-10"></div>
              <div className="mt-7">
                <h3 className="text-cyan-900 font-bold text-lg">
                  Zahra Preschool
                </h3>

                <p className="mt-1">
                  Zahratul Qur&apos;an Preschool is constituted with an aim of
                  helping future generation mould their lives according to
                  Islamic values enhanced through child friendly mentoring.
                </p>
              </div>

              <button className="mt-3  flex m-auto bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                Know More
              </button>
            </div>
          </Link>
        </div>
        <div className="bg-zinc-100 mt-10  px-8 pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
          <Link href="/Madrassa">
            <div>
              <div className="madrassa__box h-52 -mt-10"></div>
              <div className="mt-7">
                <h3 className="text-cyan-900 font-bold text-lg">
                  Masjids & Madrasas
                </h3>

                <p className="mt-1">
                  We have already constructed number of Masjids in the different
                  area of Karulai. We also started Madrassas alongside of
                  Masjids to have an everlasting solution for the spiritual and
                  moral education. 
                </p>
              </div>

              <button className="mt-3  flex m-auto bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                Know More
              </button>
            </div>
          </Link>
        </div>
        <div className="bg-zinc-100 mt-10  px-8 pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
          <Link href="/Homecare">
            <div>
              <div className="care__box h-52 -mt-10"></div>
              <div className="mt-7">
                <h3 className="text-cyan-900 font-bold text-lg">Home Care</h3>

                <p className="mt-1">
                  {/* Zahratul Qur'an Preschool is constituted with an aim of helping future generation mould their lives according to Islamic values enhanced through child friendly mentoring.  */}
                </p>
              </div>

              <button className="mt-3  flex m-auto bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                Know More
              </button>
            </div>
          </Link>
        </div>

  
      </div>
      <Footer />
    </div>
  );
}
