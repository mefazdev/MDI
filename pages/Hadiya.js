import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor-v2";
import HadiyaBanner from "@/components/HadiyaBanner";

import img7 from "../assets/images/hadiya/9.jpeg";
import img8 from "../assets/images/hadiya/10.jpeg";
import img9 from "../assets/images/hadiya/11.jpeg";
import img12 from "../assets/images/hadiya/15.jpeg";
import img13 from "../assets/images/hadiya/13.jpg";
import img14 from "../assets/images/hadiya/14.jpeg";
import SchoolIcon from "@mui/icons-material/School";
import eve3 from "../assets/images/events/hadiya/6.jpeg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";

export default function Hadiya() {
  const [didViewCountUp, setState] = useState(false);
  const [more, setMore] = useState(false);

  const imgs = [img7, img9, img12, img13, img14, img8];

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setState({ didViewCountUp: true });
    }
  };
  return (
    <div>
      <Navbar />

      {/* <div className="bg-cyan-900 pb-16 lg:pb-24   pt-20 ">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / Hadiya Academy</p>
          <h1 className="text-center text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
            WOMENS ARTS & HADIYA ACADEMY
          </h1>
        </div>
      </div> */}

      <HadiyaBanner />
      <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div className="px-4 md:px-0 md:w-11/12 m-auto ">
          <div className="    grid lg:grid-cols-3  gap-6 ">
            <div className="lg:col-span-2 ">
              <h1 className=" text-xl lg:text-2xl text-cyan-900">
                Womens Arts & Hadiya Academy
              </h1>

              <p className=" mt-2 lg:mt-4">
                MDI Hadiya womens academy As the age old adage goes, “If you
                educate a man, you educate an individual, But if you educate a
                woman, you educate a family”. It is with this noble vision that,
                MDI women&apos;s college was inaugurated by Karulai Grama
                panchayath President in Pallippadi campus and opened its gates
                for education in June 2003, with 57 students. Students are
                trained in a plethora of disciplines by a highly qualified and
                experienced faculty which includes academicians and researchers.
                Besides equipping the students with a higher secondary education
                (plus two) of the Kerala State Education Board, and Degree from
                Calicut Universit , they are thoroughly taught about The Holy
                Quran, Hadith, Literature, History & Culture of Muslims. Special
                attention is paid to identify the capabilities of students,
                develop essential soft skills and strengthen their inherent
                potentials so as to equip them to pursue success in modern
                society as Muslim women.
              </p>
            </div>

            <div className="hadiya__im bg-slate-200 p-3 h-fit lg:p-10 lg:mt-10   ">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-white   flex justify-center    items-center">
                  <HowToRegOutlinedIcon
                    className="text-cyan-800"
                    style={{ fontSize: "40px" }}
                  />
                </div>
                <div className="ml-3 ">
                  <p className="text-cyan-800   text-xl">
                    <VisibilitySensor
                      scrollCheck={true}
                      onChange={onVisibilityChange}
                      delayedCall
                    >
                      <span className="font-bold">
                        <CountUp
                          start={0}
                          end={didViewCountUp ? 108 : 0}
                          duration={2}
                        />
                        +
                      </span>
                    </VisibilitySensor>{" "}
                    Enrolled Students{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-3 lg:mt-5">
                <div className="h-12 w-12 rounded-full bg-white   flex justify-center    items-center">
                  <SchoolOutlinedIcon
                    className="text-cyan-800"
                    style={{ fontSize: "40px" }}
                  />
                </div>
                <div className="ml-3 ">
                  <p className="text-cyan-800   text-xl">
                    <VisibilitySensor
                      scrollCheck={true}
                      onChange={onVisibilityChange}
                      delayedCall
                    >
                      <span className="font-bold">
                        <CountUp
                          start={0}
                          end={didViewCountUp ? 2000 : 0}
                          duration={2}
                        />
                        +
                      </span>
                    </VisibilitySensor>{" "}
                    Alumni
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2  lg:gap-5">
            <div className=" bg-slat-200 border bg-white  mt-10 shadow-xl  p-5">
              <div className="flex  text-cyan-700 font-semibold p-1 px-4       ">
                <SchoolIcon />
                <p className="ml-2 text-lg  ">Hadiya 2 Years Course</p>
              </div>

              <div className="p-6 pt-3 ">
                <div className="bg-blac bg-opacity-60 p-1 px-4 text-whit lg:w-7/12 ">
                  <li> Duration : Two year (4 Semester)</li>
                </div>{" "}
                <div className=" bg-opacity-60 p-1 px-4   ">
                  <li>
                    {" "}
                    Eligibility : SSLC (10th Grade) with 7th Grade at Madrasa or
                    its Equivalent
                  </li>
                </div>
                <div className="  bg-opacity-60 p-1 px-4    ">
                  <li>Academic Year : June 1- March 31 (10 Months)</li>
                </div>
                <div className="  p-1 px-4    ">
                  <li>
                    State Syllabus : Higher Secondary in Science, Commerce and
                    Humanities.
                  </li>
                </div>
              </div>
            </div>
            <div className=" bg-slat-200 border bg-white  mt-10 shadow-xl p-5">
              <div className="flex  text-cyan-700 font-semibold p-1 px-4       ">
                <SchoolIcon />
                <p className="ml-2 text-lg  ">Hadiya 1 Year Diploma</p>
              </div>

              <div className="p-6 pt-3 ">
                <div className="bg-blac bg-opacity-60 p-1 px-4 text-whit lg:w-7/12 ">
                  <li> Duration : One Year (2 Semester)</li>
                </div>{" "}
                <div className=" bg-opacity-60 p-1 px-4   ">
                  <li>
                    {" "}
                    Eligibility :Higher Secondary with Hadiya or its Equivalent
                  </li>
                </div>
                <div className="  bg-opacity-60 p-1 px-4    ">
                  <li>Academic Year : June 1- March 31 (10 Months)</li>
                </div>
                <div className="  p-1 px-4    ">
                  <li>Skill Development : Caligraphy & Handicraft</li>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 mt-10 m lg:mt-24">
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

          <div className="mt-16">
            <div className="bg-cyan-950 w-fit  px-5 p-1 text-white">
              <p>EVENTS</p>
            </div>

            <div className="gap-10 mt-5 grid md:grid-cols-2 xl:grid-cols-3">
              <div className="bg-white shadow-xl   pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
                <Link href={`/events/Three`}>
                  <div>
                    {" "}
                    <div
                      style={{
                        backgroundImage: `url(${eve3.src})`,

                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="h-52 relative"
                    >
                      <div className="absolute bottom-0">
                        <div className="bg-cyan-900 text-white w-fit p-2 px-5 text-xl font-bold tracking-wide">
                          <p>18 </p>
                          <p className="-mt-1">Feb</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-4">
                      <div className="mt-7">
                        <h3 className="text-cyan-900 font-bold text-lg">
                          Hadiya Convocation
                        </h3>
                        <div className="text-gray-600 flex mt-1">
                          <LocationOnIcon className="text-lg" />
                          <p>Karulai</p>
                        </div>
                        <p className="mt-1">
                          Hadiya graduation ceremony for 100 graduates from MDI
                          Women&apos;s Hadiya Academy was held on February 25,
                          2023.
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
