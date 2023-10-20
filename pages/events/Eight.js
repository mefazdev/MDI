import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import img1 from "../../assets/images/events/silver/1.jpeg";
import img2 from "../../assets/images/events/silver/2.jpeg";
import img3 from "../../assets/images/events/silver/3.jpeg";
import img4 from "../../assets/images/events/silver/4.jpeg";
import img5 from "../../assets/images/events/silver/5.jpeg";

import img6 from "../../assets/images/events/silver/6.jpeg";
import img7 from "../../assets/images/events/silver/7.jpeg";

import img8 from "../../assets/images/events/dest-ing/8.jpg";

export default function Events() {
  const [more, setMore] = useState(false);

  const imgs = [img2, img3, img4, img5, img6,  img7];
  return (
    <div>
      <Navbar />

      <div className="bg-cyan-900  pb-16 lg:pb-24   pt-20">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / Event</p>
          <h1
            style={{ textTransform: "uppercase" }}
            className="text-center text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   "
          >
            Silver Jubilee
          </h1>
        </div>
      </div>

      <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div className=" md:w-11/12 m-auto p-4 md:p-0 ">
          <div className="lg:grid grid-cols-3">
            <div className="col-span-2">
              <h3 className="text-cyan-800 text-xl font-bold">
              Silver Jubilee
              </h3>
              <p className="mt-2">
                The conference was grandly held at mdi campus from 15th to 26th
                February 2023 along with other programs like &apos;annathe karulai&apos;
                historic summit, grama sancharam, ummi summit, parents meet,
                grand alumni meet, jalaliyya 10th anniversary etc. Namely
                Abdurrahman Sakhafi, Naufal Sakhafi Kalasa, Syed Shihabuddin
                Muthannur, Ismail Bukhari Kadalundi, Kootampara Abdurrahman
                Darimi, Wandoor Abdurrahman Faizi, and others made the
                conference exciting. 
              </p>
            </div>
            <div className="hidden lg:grid  shadow-md rounded border-cyan-700 bg-white p-2 mt-3">
              {" "}
              <div className="event8__img rounded-md   h-64      order-first lg:order-last "></div>
            </div>
          </div>

          <div
            className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8
         cursor-pointer
          "
          >
            {imgs?.map((d, i) => {
              if (!more) {
                if (i < 6) {
                  return (
                    <div
                      key={i}
                      className="h-64 border-b-4 flex justify-center items-center rounded border-gray-800"
                      style={{
                        backgroundImage: `url(${d.src})`,

                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {!more && i == 5 ? (
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
                  );
                }
              } else {
                return (
                  <div
                    key={i}
                    className="h-64 border-b-4 flex justify-center items-center rounded border-gray-800"
                    style={{
                      backgroundImage: `url(${d.src})`,

                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {!more && i == 5 ? (
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
                );
              }
            })}
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
