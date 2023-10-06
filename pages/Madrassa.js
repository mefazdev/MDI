import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import img1 from "../assets/images/masjids/1.jpg";

import img2 from "../assets/images/masjids/2.jpg";
import img3 from "../assets/images/masjids/3.jpg";
import img4 from "../assets/images/masjids/4.jpg";
import img5 from "../assets/images/masjids/5.jpg";
import img6 from "../assets/images/masjids/6.jpg";
import img7 from "../assets/images/masjids/7.jpg";
 
 
export default function Madrassa() {
  const [more, setMore] = useState(false);

  return (
    <div>
      <Navbar />

      <div className="bg-cyan-900  pb-16 lg:pb-24   pt-20">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / Masjids & Madrasas</p>
          <h1 className="text-center text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
            MASJIDS AND MADRASAS
          </h1>
        </div>
      </div>

      <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div className="px-4 md:px-0 md:w-11/12 m-auto ">
          <div className=" gri lg:grid-cols-3  gap-6 ">
            <div className="lg:col-span-2 ">
              <h1 className=" text-lg lg:text-2xl text-cyan-900">
                MASJIDS AND MADRASAS
              </h1>

             
              <p>
                We have already constructed number of Masjids in the different
                area of Karulai . We also started Madrassas alongside of Masjids
                to have an everlasting solution for the spiritual and moral
                education. The most progressive result of this virtue is that we
                have paved a way to the Muslim community to go with an Islamic
                way of life, keeping his own faith well and rendering that of
                others as well. Before we start activities, the situation of
                Masjids was too pity. There were a few Masjids built with mud
                and bamboos having no adequate facilities to do worships and
                clean area for ablution and urination at all. 
              </p>
            </div>
            {/* <div className=" mt-5 hidden lg:grid">
              <Image src={img1} />
            </div> */}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 mt-10 m lg:mt-24">
            <div
              className="h-96"
              style={{
                backgroundImage: `url(${img1.src})`,

                backgroundSize: "cover",
                // backgroundPosition: "center",
              }}
            ></div>

            <div
              className="h-60"
              style={{
                backgroundImage: `url(${img2.src})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="h-60"
              style={{
                backgroundImage: `url(${img3.src})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="h-60"
              style={{
                backgroundImage: `url(${img4.src})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="h-60"
              style={{
                backgroundImage: `url(${img5.src})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="h-60 flex justify-center items-center"
              style={{
                backgroundImage: `url(${img6.src})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
               
              }}
            >
                {!more  ? (
                        <button
                          onClick={() => setMore(true)}
                          className="  bg-zinc-800  bg-opacity-70  border border-white text-white p-2 px-5 rounded-sm hover:bg-cyan-800 hover:text-white "
                        >
                          View More
                        </button>
                      ) : (
                        ""
                      )}
            </div>

            {more ? <div
              className="h-60"
              style={{
                backgroundImage: `url(${img5.src})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div> :' '}
          </div>
          {more ? (
            <button
              onClick={() => setMore(false)}
              className="m-auto flex mt-7 border border-cyan-700 text-cyan-800 p-1 px-5 rounded-sm hover:bg-cyan-800 hover:text-white "
            >
              Show Less
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
