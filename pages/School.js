import Navbar from "@/components/Navbar";
import SchoolBanner from "@/components/SchoolBanner";
import React, { useState } from "react";
import img1 from "../assets/images/school/school-4.JPG";
import img2 from "../assets/images/school/school-2.JPG";
import img3 from "../assets/images/school/slide.JPG";
import img4 from "../assets/images/school/school-1.JPG";
import img5 from "../assets/images/school/school-6.JPG";
import img6 from "../assets/images/school/school-5.JPG";
import Footer from "@/components/Footer";
import eve4 from "../assets/images/events/schoolAlumni/1.jpeg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor-v2";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

export default function School() {
  const [didViewCountUp, setState] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setState({ didViewCountUp: true });
    }
  };
  const [more, setMore] = useState(false);


  
  
  const [readMore, setReadMore] = useState(false);

  const imgs = [img1, img2, img3, img4, img5, img6];
  return (
    <div>
      <Navbar />

      {/* <div className='bg-cyan-900  pb-16 lg:pb-24   pt-20'>
           <div className='px-4 md:px-0 md:w-11/12 m-auto'>

           <p className='text-gray-100'>Home /  English School</p>
           <h1 className='text-center text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   '>MDI ENGLISH SCHOOL </h1>
           </div>
        </div> */}

      <SchoolBanner />

      <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div className="px-4 md:px-0 md:w-11/12 m-auto ">
          <div className="grid lg:grid-cols-3  gap-6 ">
            <div className="lg:col-span-2 ">
              <h1 className=" text-xl lg:text-2xl text-cyan-900">
                Englsih School (CBSE)
              </h1>

              <p className=" mt-2 lg:mt-4">
                English has become an indispensable ingredient in everyday life.
                If you turn your back on the course of the world without
                understanding what is happening out there, it will cause loss
                and misery to the community.MDI English medium School was the
                solution to the problem: Apart from that, the English medium
                schools of alternate ideologues and hooligans was started
                threatening Islam. The cognizance of Christianity and Christian
                theories is going on in the intricacies of robbing the faith of
                Muslim students. In the schools of Non Sunnis, the true aspect
                of Islam is ramshackle and injected to students. Such shocking
                facts forced MDI to start an English medium school based on
                Islam&apos;s ideas.{" "}
              </p>

              <p className="mt-3 hidden lg:grid">
                MDI Public School adds another golden feather to the educational
                cap of Nilambur constituency with its exemplary academic
                performance and amazing results. The school never compromises on
                the quality of education it provides and the moral atmosphere it
                promises. MDI Public School stands singular among the many in
                the field. thanks to its unique features and the innovative
                methods it adopts in addition to the trust the school manage to
                nurture in the hearts of supportive parents and educationalists.
                The huge turnout of parents to secure an admission year in, year
                out underscores the fact that we are the most sought after
                school in the vicinity. Child-friendly KG section, trained
                mentors, born teachers, spacious and sophisticated class rooms,
                well-equipped IT lab, well-stocked and student friendly library
                and fully fledged ERP system are some of the salient features of
                the School. Here, students find it to be an amiable place where
                they get to their maximum potential and thrive in different
                ways. The professional and academic leadership at the helm of
                the School never let the quality of education and the moral
                standard dip a bit lower.
              </p>

              <p className="mt-3 lg:hidden">
                MDI Public School adds another golden feather to the educational
                cap of Nilambur constituency with its exemplary academic
                performance and amazing results. The school never compromises on
                the quality of education it provides and the moral atmosphere it
                promises.
                {readMore ? (
                  <span>
                    MDI Public School stands singular among the many in the
                    field. thanks to its unique features and the innovative
                    methods it adopts in addition to the trust the school manage
                    to nurture in the hearts of supportive parents and
                    educationalists. The huge turnout of parents to secure an
                    admission year in, year out underscores the fact that we are
                    the most sought after school in the vicinity. Child-friendly
                    KG section, trained mentors, born teachers, spacious and
                    sophisticated class rooms, well-equipped IT lab,
                    well-stocked and student friendly library and fully fledged
                    ERP system are some of the salient features of the School.
                    Here, students find it to be an amiable place where they get
                    to their maximum potential and thrive in different ways. The
                    professional and academic leadership at the helm of the
                    School never let the quality of education and the moral
                    standard dip a bit lower.{" "}
                  </span>
                ) : (
                  <span
                    onClick={() => setReadMore(true)}
                    className="ml-2 text-cyan-800"
                  >
                    {" "}
                    Read More...
                  </span>
                )}
                {readMore ? (
                  <span
                    onClick={() => setReadMore(false)}
                    className="text-cyan-800"
                  >
                    Read Less...{" "}
                  </span>
                ) : (
                  ""
                )}
              </p>
            </div>

            <div className="  bg-slate-200 p-3 h-fit lg:p-10 lg:mt-10   ">
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
                          end={didViewCountUp ? 870 : 0}
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
                          end={didViewCountUp ? 400 : 0}
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
                <Link href={`/events/Four`}>
                  <div>
                    {" "}
                    <div
                      style={{
                        backgroundImage: `url(${eve4.src})`,

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
                          Reminisce&apos;23 English School Grand Alumni Meet
                        </h3>
                        <div className="text-gray-600 flex mt-1">
                          <LocationOnIcon className="text-lg" />
                          <p>Karulai</p>
                        </div>
                        <p className="mt-1">
                          Batches from 2007 to 2022 who completed their studies
                          from MDI English Medium School met on February 18,
                          2023 at the reminisce&apos;3 school grand alumni meet
                          organized by MDI management
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
