import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import img1 from "../../assets/images/events/schoolAlumni/1.jpeg";
import img2 from "../../assets/images/events/schoolAlumni/2.jpeg";
import img3 from "../../assets/images/events/schoolAlumni/3.jpeg";
import img4 from "../../assets/images/events/schoolAlumni/4.jpeg";
import img5 from "../../assets/images/events/schoolAlumni/5.jpeg";

import img6 from "../../assets/images/events/schoolAlumni/6.jpeg";
import img7 from "../../assets/images/events/schoolAlumni/7.jpeg";
import img8 from "../../assets/images/events/schoolAlumni/8.jpeg";
import img9 from "../../assets/images/events/schoolAlumni/9.jpeg";
import img10 from "../../assets/images/events/schoolAlumni/10.jpeg";
import img11 from "../../assets/images/events/schoolAlumni/11.jpeg";
import img12 from "../../assets/images/events/schoolAlumni/12.jpeg";
import img13 from "../../assets/images/events/schoolAlumni/13.jpeg";
import img14 from "../../assets/images/events/schoolAlumni/14.jpeg";
import img15 from "../../assets/images/events/schoolAlumni/15.jpeg";
import img16 from "../../assets/images/events/schoolAlumni/16.jpeg";
import img17 from "../../assets/images/events/schoolAlumni/17.jpeg";
import img18 from "../../assets/images/events/schoolAlumni/18.jpeg";
import img19 from "../../assets/images/events/schoolAlumni/19.jpeg";
import img20 from "../../assets/images/events/schoolAlumni/20.jpeg";
import img21 from "../../assets/images/events/schoolAlumni/21.jpeg";
import img22 from "../../assets/images/events/schoolAlumni/22.jpeg";
import img23 from "../../assets/images/events/schoolAlumni/23.jpeg";
import img24 from "../../assets/images/events/schoolAlumni/24.jpeg";

import Image from "next/image";
export default function Events() {
  const [more, setMore] = useState(false);

  const imgs = [
    img1,

    img2,

    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
  ];
  return (
    <div>
      <Navbar />

      <div className="bg-cyan-900  pb-16 lg:pb-24   pt-20">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / Event</p>
          <h1 className="text-center text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
            REMINISCE&apos;23 ENGLISH SCHOOL GRAND ALUMNI MEET
          </h1>
        </div>
      </div>

      <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div className=" md:w-11/12 m-auto p-4 md:p-0 ">
          <div>
            <h3 className="text-cyan-800 text-xl font-bold">
              Reminisce&apos;23 School grand alumni meet
            </h3>
            <p>
              {" "}
              Batches from 2007 to 2022 who completed their studies from MDI
              English Medium School met on February 18, 2023 at the
              reminisce&apos;3 school grand alumni meet organized by MDI
              management. Reminisce&apos;23 was a colorful gathering of students and
              teachers. The students honored the usthad&apos;s and teachers during
              this period and also shared their experiences and memories about
              the school.
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
