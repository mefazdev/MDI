import Link from "next/link";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import eve1 from "../assets/images/events/18th/15.jpg";
import eve2 from "../assets/images/events/jalaliyya/1.jpeg";
import eve3 from "../assets/images/events/hadiya/6.jpeg";
import eve4 from "../assets/images/events/schoolAlumni/1.jpeg";

import eve5 from "../assets/images/events/dest-ing/1.jpg";
import eve6 from "../assets/images/events/zahra/7.jpg";
import Carousel from "react-multi-carousel";

import eve7 from "../assets/images/events/seminar/1.jpg";
import eve8 from "../assets/images/events/silver/1.jpeg";
import "react-multi-carousel/lib/styles.css";

export default function Events() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="h__prgm  pb-24   mt-10 lg:mt-28  md:px-0 md:w-11/12 m-auto  ">
      <h3 className="  text-cyan-900 font-extrabold  text-2xl text-center underline underline-offset-8">
        EVENTS
      </h3>

      {/* gap-10 grid md:grid-cols-2 xl:grid-cols-3 */}
      <div className="prgm__content__row px-4 lg:px-0 lg:w-11/12   m-auto mt-10  ">
        <Carousel
          responsive={responsive}
          autoPlay
          draggable={false}
          showDots={true}
          infinite={true}
          // autoPlaySpeed={1000}
          keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="p-4"
          className="pb-10"
        >
          <div className="even__item   rounded  bg-white shadow-md m-2  pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
            <Link href={`/events/Eight`}>
              <div>
             
                <div
                  style={{
                    backgroundImage: `url(${eve8.src})`,

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="h-52 relative"
                >
                  <div className="absolute bottom-0">
                    <div className="bg-cyan-900 text-white w-fit p-1 px-4 text-lg font-bold tracking-wide">
                      <p className="">
                        15-26 <span className="text-base font-thin">Feb</span>{" "}
                      </p> 
                      <p className="text-sm font-thin">2023</p>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <div className="mt-7">
                    <h3 className="text-cyan-900 font-bold text-lg">
                      Silver Jubilee
                    </h3>
                    <div className="text-gray-600 flex mt-1">
                      <LocationOnIcon className="text-lg" />
                      <p>Karulai</p>
                    </div>
                    <p className="mt-1 text-[16px]">
                      The conference was grandly held at mdi campus from 15th to
                      26th February 2023 along with other programs like
                      &apos;annathe karulai&apos; historic summit, grama
                      sancharam, ummi summit...
                    </p> 
                  </div>

                  <button className="mt-3 text-sm  flex m-auto bg-yellow-600 text-white p-1  px-5 rounded-sm">
                    Read More
                  </button>
                </div> 
              </div>
            </Link>
          </div>
          <div className="even__item   bg-white shadow-md m-2  pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
            <Link href={`/events/Five`}>
              <div>
            
                <div
                  style={{
                    backgroundImage: `url(${eve5.src})`,

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
                      Destitute home new block inauguration
                    </h3>
                    <div className="text-gray-600 flex mt-1">
                      <LocationOnIcon className="text-lg" />
                      <p>Karulai</p>
                    </div>
                    <p className="mt-1 text-[16px]">
                      Alhamdulillah, through five years of hard work, we were
                      able to achieve it by the grace of Allah, the Merciful.
                      The hostel was inaugurated on 10 June 2023 in the presence
                      of Syeds and scholars.
                    </p>{" "}
                  </div>

                  <button className="mt-3 text-sm  flex m-auto bg-yellow-600 text-white p-1  px-5 rounded-sm">
                 Read More
                  </button>
                </div>{" "}
              </div>
            </Link>
          </div>
          <div className="bg-white even__item  m-2 shadow-md   pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
            <Link href={`/events/Two`}>
              <div>
                {" "}
                <div
                  style={{
                    backgroundImage: `url(${eve2.src})`,

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="h-52 relative"
                >
                  <div className="absolute bottom-0">
                    <div className="bg-cyan-900 text-white w-fit p-1 px-4 text-lg font-bold tracking-wide">
                      <p className="">
                        15 <span className="text-base font-thin">Feb</span>{" "}
                      </p>
                      {/* <p className="-mt-1 text-lg font-thin">June</p> */}
                      <p className="text-sm font-thin">2023</p>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <div className="mt-7">
                    <h3 className="text-cyan-900 font-bold text-lg">
                      10th Anniversary of Jalaliyya Ratheeb
                    </h3>
                    <div className="text-gray-600 flex mt-1">
                      <LocationOnIcon className="text-lg" />
                      <p>Karulai</p>
                    </div>

                    <p className="  text-[16px]">
                  
                      MDI organizes a monthly prayer meeting and Jalaliyya
                      Ratheeb on fifteenth of every month which is reported to
                      be the largest Majlis in this area, It is held at MDI
                      campus.The Jalaliyya Ratheeb...
                    </p>
                  </div>

                  <button className="mt-3 text-sm  flex m-auto bg-yellow-600 text-white p-1  px-5 rounded-sm">
               Read More
                  </button>
                </div>{" "}
              </div>
            </Link>
          </div>
          <div className="even__item bg-white m-2 shadow-md   pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
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
                    <div className="bg-cyan-900 text-white w-fit p-1 px-4 text-lg font-bold tracking-wide">
                      <p className="">
                        25 <span className="text-base font-thin">Feb</span>{" "}
                      </p>
                      {/* <p className="-mt-1 text-lg font-thin">June</p> */}
                      <p className="text-sm font-thin">2023</p>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <div className="mt-7">
                    <h3 className="text-cyan-900 font-bold text-lg">
                      Hadiya Graduation Ceremony
                    </h3>
                    <div className="text-gray-600 flex mt-1">
                      <LocationOnIcon className="text-lg" />
                      <p>Karulai</p>
                    </div>
                    <p className="mt-1 text-[16px]">
                  
                      Hadiya graduation ceremony for 100 graduates from MDI
                      Women&apos;s Hadiya Academy was held on February 25, 2023.
                      Syed Fall Geoffrey Kundur, Shoukathali Saqafi Karulai...
                    </p>{" "}
                  </div>

                  <button className="mt-3 text-sm  flex m-auto bg-yellow-600 text-white p-1  px-5 rounded-sm">
                      Read More
                  </button>
                </div>{" "}
              </div>
            </Link>
          </div>
          <div className="even__item bg-white shadow-md m-2  pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
            <Link href={`/events/Six`}>
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
                    <p className="mt-1 text-[16px]">
                      Zahrathul Qur&apos;an 2nd Annual convocation was very
                      colorful in the presence of Sadats and scholars.The 2nd
                      convocation of MDI was a better example of how the
                      Qu&apos;an was able to inculcate...
                    </p>{" "}
                  </div>

                  <button className="mt-3 text-sm  flex m-auto bg-yellow-600 text-white p-1  px-5 rounded-sm">
                   Read More
                  </button>
                </div>{" "}
              </div>
            </Link>
          </div>
          <div className="even__item bg-white m-2 shadow-md   pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
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
                    <div className="bg-cyan-900 text-white w-fit p-1 px-4 text-lg font-bold tracking-wide">
                      <p className="">
                        18 <span className="text-base font-thin">Feb</span>{" "}
                      </p>
                      {/* <p className="-mt-1 text-lg font-thin">June</p> */}
                      <p className="text-sm font-thin">2023</p>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <div className="mt-7">
                    <h3 className="text-cyan-900 font-bold text-lg">
                      Reminisce&apos;23 english school grand alumni meet
                    </h3>
                    <div className="text-gray-600 flex mt-1">
                      <LocationOnIcon className="text-lg" />
                      <p>Karulai</p>
                    </div>
                    <p className="mt-1 text-[16px]">
                      Batches from 2007 to 2022 who completed their studies from
                      MDI English Medium School met on February 18, 2023 at the
                      reminisce&apos;3 school
                    </p> 
                  </div>

                  <button className="mt-3 text-sm  flex m-auto bg-yellow-600 text-white p-1  px-5 rounded-sm">
                    Read More
                  </button>
                </div>{" "}
              </div>
            </Link>
          </div>

          <div className="bg-white even__item    shadow-md m-2  pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
            <Link href={`/events/Seven`}>
              <div>
                {" "}
                <div
                  style={{
                    backgroundImage: `url(${eve7.src})`,

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="h-52 relative"
                >
                  <div className="absolute bottom-0">
                    <div className="bg-cyan-900 text-white w-fit p-2 px-5 text-xl font-bold tracking-wide">
                      <p>10 </p>
                      <p className="-mt-1">June</p>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <div className="mt-7">
                    <h3 className="text-cyan-900 font-bold text-lg">
                      അന്നത്തെ കരുളായി &apos;23 Historical Seminar
                    </h3>
                    <div className="text-gray-600 flex mt-1">
                      <LocationOnIcon className="text-lg" />
                      <p>Karulai</p>
                    </div>
                    <p className="mt-1 text-[16px]">
                  
                      &apos;അന്നത്തെ കരുളായി&apos; was a seminar with a wide
                      range of subject presentations marking each phase of the
                      cultural, social and economic...
                    </p>{" "}
                  </div>

                  <button className="mt-3 text-sm  flex m-auto bg-yellow-600 text-white p-1  px-5 rounded-sm">
                    Read More
                  </button>
                </div>{" "}
              </div>
            </Link>
          </div>
          <div className="bg-white even__item   shadow-md m-2  pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
            <Link href={`/events/One`}>
              <div>
                <div
                  style={{
                    backgroundImage: `url(${eve1.src})`,

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="h-52 relative"
                >
                  <div className="absolute bottom-0">
                    <div className="bg-cyan-900 text-white w-fit p-1 px-4 text-lg font-bold tracking-wide">
                      <p className="">
                        4-5 <span className="text-base font-thin">Dec</span>{" "}
                      </p>
                      {/* <p className="-mt-1 text-lg font-thin">June</p> */}
                      <p className="text-sm font-thin">2015</p>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <div className="mt-7">
                    <h3 className="text-cyan-900 font-bold text-lg">
                      18th Anniversary
                    </h3>
                    <div className="text-gray-600 flex mt-1">
                      <LocationOnIcon className="text-lg" />
                      <p>Karulai</p>
                    </div>
                    <p className="mt-1 text-[16px]">
                  
                      Madaru da&apos;awathil islamiyya (MDI) 18th Annual
                      Conference was held on 4th 5th 6th December 2015 at CM
                      Nagar, MDI Campus Karulai. Sunni Jamiathul Ulama General
                      Secretary Kanthapuram...
                    </p>{" "}
                  </div>

                  <button className="mt-3 text-sm  flex m-auto bg-yellow-600 text-white p-1  px-5 rounded-sm">
                   Read More
                  </button>
                </div>{" "}
              </div>
            </Link>
          </div>
        
        </Carousel>
      </div>
    </div>
  );
}
