import Navbar from "@/components/Navbar";
import ZahraBanner from "@/components/ZahraBanner";
import React, { useState } from "react";
import img1 from "../assets/images/zahra/zahra-1.jpeg";
import img2 from "../assets/images/zahra/zahra-6.jpeg";
import img3 from "../assets/images/zahra/zahra-3.jpeg";
import img4 from "../assets/images/zahra/zahra-4.jpeg";
import img5 from "../assets/images/zahra/zahra-5.jpeg";
import img6 from "../assets/images/zahra/zahra-2.jpeg";
import eve6 from "../assets/images/events/zahra/7.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Footer from "@/components/Footer";
import { Link } from "@mui/material";

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
               
            </div>

            <div className="zahra__img hidden lg:grid  h-64  mt-6   order-first lg:order-last "></div>
          </div>

          <a href="/zahra.pdf" download="/zahra.pdf">
          <button className= "hover:bg-cyan-800 text-lg hover:rounded mt-6  bg-white border border-cyan-800    flex m-auto  hover:text-white p-2   px-3 ">Application Form For Admission</button>
          </a>
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

<div className="mt-16">
            <div className="bg-cyan-950 w-fit  px-5 p-1 text-white">
              <p>EVENTS</p>
            </div>

            <div className="gap-10 mt-5 grid md:grid-cols-2 xl:grid-cols-3">
            <div className="even__item bg-white shadow-xl m-2  pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
            <Link href={`/events/Six`} style={{textDecoration:'none',color:'inherit'}}>
              <div>
                {" "}
                <div
                  style={{
                    backgroundImage: `url(${eve6.src})`,

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="h-52 relative"
                >
                  <div className="absolute bottom-0">
                  <div className="bg-cyan-900 text-white w-fit p-1 px-4 text-lg font-bold tracking-wide">
                    <p className="">
                      10 <span className="text-base font-thin">June</span>{" "}
                    </p>
                    {/* <p className="-mt-1 text-lg font-thin">June</p> */}
                    <p className="text-sm font-thin">2023</p>
                  </div>

                   
                  </div>
                </div>
                <div className="px-4">
                  <div className="mt-7">
                    <h3 className="text-cyan-900 font-bold text-lg">
                      Zahra Convocation
                    </h3>
                    <div className="text-gray-600 flex mt-1">
                      <LocationOnIcon className="text-lg" />
                      <p>Karulai</p>
                    </div>
                    <p className="mt-1">
                      Zahrathul Qur&apos;an 2nd Annual convocation was very
                      colorful in the presence of Sadats and scholars.The 2nd
                      convocation of MDI was a better example of how the
                      Qu&apos;an was able to inculcate...
                    </p>{" "}
                  </div>

                  <button className="mt-3  flex m-auto bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                    Read More
                  </button>
                </div>{" "}
              </div>
            </Link>
          </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
