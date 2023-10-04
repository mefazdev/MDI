import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import img1 from "../../assets/images/events/hadiya/1.jpeg";
import img2 from "../../assets/images/events/hadiya/2.jpeg";
import img3 from "../../assets/images/events/hadiya/3.jpeg";
import img4 from "../../assets/images/events/hadiya/4.jpeg";
import img5 from "../../assets/images/events/hadiya/5.jpeg";
import img6 from "../../assets/images/events/hadiya/6.jpeg";
import img7 from "../../assets/images/events/hadiya/7.jpeg";
import img8 from "../../assets/images/events/hadiya/8.jpeg";
import img9 from "../../assets/images/events/hadiya/9.jpeg";
import img10 from "../../assets/images/events/hadiya/10.jpeg";
import img11 from "../../assets/images/events/hadiya/11.jpeg";
import img12 from "../../assets/images/events/hadiya/12.jpeg";
import img13 from "../../assets/images/events/hadiya/13.jpeg";
import img14 from "../../assets/images/events/hadiya/14.jpeg";
// import img15 from "../../assets/images/events/hadiya/15.jpeg";
import Image from "next/image";
export default function Events() {
  const [more, setMore] = useState(false);

  const imgs = [
    img8,
    img6,
    img1,

    img2,

    img3,
    img4,

    img5,

    img7,

    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];
  return (
    <div>
      <Navbar />

      <div className="bg-cyan-900  pb-16 lg:pb-24   pt-20">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / Event</p>
          <h1 className="text-center text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
            HADIYA CONVOCATION
          </h1>
        </div>
      </div>

      <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div className=" md:w-11/12 m-auto p-4 md:p-0 ">
          <div>
            <h3 className="text-cyan-800 text-xl font-bold">
              HADIYA CONVOCATION
            </h3>
            <p>
              Hadiya graduation ceremony for 100 graduates from MDI Women&apos;s
              Hadiya Academy was held on February 25, 2023. Syed Fall Geoffrey
              Kundur, Shoukathali Saqafi Karulai, Aboobacker Saqafi P Para, and
              Shihabudeen Naeemi Blessed with their presence
            </p>
          </div>

          <div
            className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8
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
