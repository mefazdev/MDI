import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import eve1 from "../assets/images/events/18th/15.jpg";
import eve2 from "../assets/images/events/jalaliyya/1.jpeg";
import eve3 from "../assets/images/events/hadiya/6.jpeg";
import eve4 from "../assets/images/events/schoolAlumni/1.jpeg";
import eve8 from "../assets/images/events/silver/1.jpeg";
import eve5 from "../assets/images/events/dest-ing/1.jpg";
import eve6 from "../assets/images/events/zahra/7.jpg";
import eve7 from "../assets/images/events/seminar/1.jpg";
import Footer from "@/components/Footer";

export default function Events() {
  return (
    <div>
      <Navbar />

      <div className="bg-cyan-900  pb-16 lg:pb-24   pt-20">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / Events</p>
          <h1 className="text-center  text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
           EVENTS
          </h1>
        </div>
      </div>
      <div className="content pb-16  px-4 lg:px-0 lg:w-11/12   m-auto mt-16 gap-10 grid md:grid-cols-2 xl:grid-cols-3 ">
        
      <div className="bg-white shadow-xl   pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
          <Link href={`/events/Five`}>
            <div>
              {" "}
              <div
                style={{
                  backgroundImage: `url(${eve5.src})`,

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
                    Destitute Home New Block Inauguration
                  </h3>
                  <div className="text-gray-600 flex mt-1">
                    <LocationOnIcon className="text-lg" />
                    <p>Karulai</p>
                  </div>
                  <p className="mt-1">
                    Alhamdulillah, through five years of hard work, we were able
                    to achieve it by the grace of Allah, the Merciful. The
                    hostel was inaugurated on 10 June 2023 in the presence of
                    Syeds and scholars. 
                  </p>{" "}
                </div>

                <button className="mt-3  flex m-auto bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                  Read More
                </button>
              </div>{" "}
            </div>
          </Link>
        </div>

        <div className="bg-white shadow-xl   pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
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
                  <div className="bg-cyan-900 text-white w-fit p-2 px-5 text-xl font-bold tracking-wide">
                    <p>15 </p>
                    <p className="-mt-1">Feb</p>
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
                  <p className="mt-1">
                  MDI organizes a monthly prayer meeting and Jalaliyya
                      Ratheeb on fifteenth of every month which is reported to
                      be the largest Majlis in this area, It is held at MDI
                      campus.The Jalaliyya Ratheeb...
               
                  </p>{" "}
                </div>

                <button className="mt-3  flex m-auto bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                  Read More
                </button>
              </div>{" "}
            </div>
          </Link>
        </div>
        
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
                    <p>25 </p>
                    <p className="-mt-1">Feb</p>
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
                  <p className="mt-1">
                  Hadiya graduation ceremony for 100 graduates from MDI
                      Women&apos;s Hadiya Academy was held on February 25, 2023.
                      Syed Fall Geoffrey Kundur, Shoukathali Saqafi Karulai...
                   </p>{" "}
                </div>

                <button className="mt-3  flex m-auto bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                  Read More
                </button>
              </div>{" "}
            </div>
          </Link>
        </div>
        <div className="bg-white shadow-xl   pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
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
                  <div className="bg-cyan-900 text-white w-fit p-2 px-5 text-xl font-bold tracking-wide">
                    <p>10 </p>
                    <p className="-mt-1">June</p>
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
                  Batches from 2007 to 2022 who completed their studies from
                      MDI English Medium School met on February 18, 2023 at the
                      reminisce&apos;3 school
                 </p>{" "}
                </div>

                <button className="mt-3  flex m-auto bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                  Read More
                </button>
              </div>{" "}
            </div>
          </Link>
        </div>

       

        
        <div className="bg-white shadow-xl   pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
          <Link href={`/events/Seven`}>
            <div>
              {" "}
              <div
                style={{
                  backgroundImage: `url(${eve7  .src})`,

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
                  <p className="mt-1">
                  &apos;അന്നത്തെ കരുളായി&apos; was a seminar with a wide range of subject
              presentations marking each phase of the cultural, social and
              economic...  
           
                  </p>{" "}
                </div>

                <button className="mt-3  flex m-auto bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                  Read More
                </button>
              </div>{" "}
            </div>
          </Link>
        </div>

        <div className="bg-white shadow-xl   pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
          <Link href={`/events/One`}>
            <div>
              {" "}
              <div
                style={{
                  backgroundImage: `url(${eve1.src})`,

                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="h-52 relative"
              >
                <div className="absolute bottom-0">
                  <div className="bg-cyan-900 text-white w-fit p-2 px-5 text-xl font-bold tracking-wide">
                    <p>4-5 </p>
                    <p className="-mt-1">Dec</p>
                  </div>
                </div>
              </div>
              <div className="px-4">
                <div className="mt-7">
                  <h3 className="text-cyan-900 font-bold text-lg">
                    18th ANNIVERSARY
                  </h3>
                  <div className="text-gray-600 flex mt-1">
                    <LocationOnIcon className="text-lg" />
                    <p>Karulai</p>
                  </div>
                  <p className="mt-1">
                  Madaru da&apos;awathil islamiyya (MDI) 18th Annual
                      Conference was held on 4th 5th 6th December 2015 at CM
                      Nagar, MDI Campus Karulai. Sunni Jamiathul Ulama General
                      Secretary Kanthapuram...
                
                  </p>{" "}
                </div>

                <button className="mt-3  flex m-auto bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                  Read More
                </button>
              </div>{" "}
            </div>
          </Link>
        </div>

        <div className="even__item   bg-white shadow-xl m-2  pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
            <Link href={`/events/Eight`}>
              <div>
                {" "}
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
                      {/* <p className="-mt-1 text-lg font-thin">June</p> */}
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
                    <p className="mt-1">
                      The conference was grandly held at mdi campus from 15th to
                      26th February 2023 along with other programs like &apos;annathe
                      karulai&apos; historic summit, grama sancharam, ummi summit... 
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
      

      <Footer/>
    </div>
  );
}
