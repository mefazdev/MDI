import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import img1 from "../../assets/images/events/18th/1.jpg";
import img2 from "../../assets/images/events/18th/2.jpg";
import img3 from "../../assets/images/events/18th/3.jpg";
import img4 from "../../assets/images/events/18th/4.jpg";
import img5 from "../../assets/images/events/18th/5.jpg";
import img6 from "../../assets/images/events/18th/6.jpg";
import img7 from "../../assets/images/events/18th/7.jpg";
import img8 from "../../assets/images/events/18th/8.jpg";
import img9 from "../../assets/images/events/18th/9.jpg";
import img10 from "../../assets/images/events/18th/10.jpg";
import img11 from "../../assets/images/events/18th/11.jpg";
import img12 from "../../assets/images/events/18th/12.jpg";
import img13 from "../../assets/images/events/18th/13.jpg";
import img14 from "../../assets/images/events/18th/14.jpg";
import img15 from "../../assets/images/events/18th/15.jpg";
import Image from "next/image";
export default function Events() {
  const [more, setMore] = useState(false);

  const imgs = [
    img4,
    img10,
    img7,

    img11,
    img12,
    img13,
    img6,
    img1,img3,    img2, img8,
    img14,


    

   
  ];
  return (
    <div>
      <Navbar />

      <div className="bg-cyan-900  pb-16 lg:pb-24   pt-20">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / Event</p>
          <h1 className="text-center text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
            MDI 18th ANNIVERSARY
          </h1>
        </div>
      </div>

      <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div className=" md:w-11/12 m-auto p-4 md:p-0 ">
          <div className="lg:grid grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h3 className="text-cyan-800 text-xl font-bold">
                MDI 18th ANNIVERSARY
              </h3>
              <p>
                Madaru da&apos;awathil islamiyya (MDI) 18th Annual Conference
                was held on 4th 5th 6th December 2015 at CM Nagar, MDI Campus
                Karulai. Sunni Jamiathul Ulama General Secretary Kanthapuram AP
                Aboobacker Musliyar delivered the keynote address. Prominent
                people like Syed Ibrahim Khalil Bukhari, Ponmala Abdul Qader
                Musliar, Wandoor Abdur Rahma Faizi, Koottampara Abdurahman
                Darimi, Mikhadad Baqavi Chunkathara and other scholars and
                political personalities presence make great pleasure.
              </p>
            </div>
            <div className="hidden lg:grid  shadow-md rounded border-cyan-700 bg-white p-2 mt-3">
              {" "}
              <div className="event1__img rounded-md   h-64      order-first lg:order-last "></div>
            </div>
          </div>

          <div
            className="mt-10 lg:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8
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
