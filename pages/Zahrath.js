import Navbar from "@/components/Navbar";
import ZahraBanner from "@/components/ZahraBanner";
import React, { useState } from "react";
import img1 from "../assets/images/zahra/zahra-1.jpeg";
import img2 from "../assets/images/zahra/zahra-6.jpeg";
import img3 from "../assets/images/zahra/zahra-3.jpeg";
import img4 from "../assets/images/zahra/zahra-4.jpeg";
import img5 from "../assets/images/zahra/zahra-5.jpeg";
import img6 from "../assets/images/zahra/zahra-2.jpeg";
import Footer from "@/components/Footer";

export default function Zahrath() {
  const [more, setMore] = useState(false);
  const imgs = [img1, img2, img3, img4, img5, img6];
  return (
    <div>
      <Navbar />

      {/* <div className="bg-cyan-900  pb-16 lg:pb-24   pt-20">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / Zahra Park</p>
          <h1 className="text-center text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
            ZAHRA PRESCHOOL
          </h1>
        </div>
      </div> */}

      <ZahraBanner />
      <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <div className=" m-auto    grid lg:grid-cols-3  gap-6 ">
            <div className="lg:col-span-2 ">
              <h1 className=" text-lg lg:text-2xl text-cyan-900">
                ZAHRA PRESHCOOL
              </h1>

              <p className="mt-2 lg:mt-4">
                Zahratul Qur&apos;an Preschool is constituted with an aim of
                helping future generation mould their lives according to Islamic
                values enhanced through child friendly mentoring. This will be
                done using the modern methods of education for Islamic studies.
                Every modern, state of the art technologies will be used
                effectively in the class rooms. The medium of instruction will
                be Arabic.
              </p>
              <p className="mt-3">
                {" "}
                Children age three to four years are taught to read and memories
                the Quran at a steady and easy pace. by the end of the third
                year every zeequer will be able to read the Quran very well,
                therefore enabling and preparing them to really memorize the
                entire Quran correctly. zq ensures that every zeequer&apos;s
                learning experience is maximiser to enhance their overall
                pronunciation understanding and appreciation of The Holy Quran.
                upon the completion of uzq, the zeequer is experienced to :
                recite the Quran with confidence and proper pronunciation
                adhering the rules of recital ( Ahkamul Tajwid )memories the
                30th part of holy Quran memorize and say daily duas and Adkar.
              </p>
              <p className="mt-3">
                The performance of Zahrathul Quran students in previous years
                has been excellent. so, we have been able to carry it
                continuously for seven years.
              </p>
            </div>

            <div className="zahra__img hidden lg:grid  h-64  mt-6   order-first lg:order-last "></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6  mt-10 lg:mt-24">
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
            })}{" "}
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
