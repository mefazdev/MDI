import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import CountUp from "react-countup";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VisibilitySensor from "react-visibility-sensor-v2";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import OrphanageBanner from "@/components/OrphanageBanner";
import img1 from "../assets/images/orphanage/orph-1.jpg";
 
import img4 from "../assets/images/orphanage/orph-4.jpeg"; 
import img6 from "../assets/images/orphanage/orph-6.jpeg";
import img7 from "../assets/images/hadiya/hadiya-4.jpeg";
import img8 from "../assets/images/hadiya/hadiya-1.jpeg";
import img9 from "../assets/images/orphanage/orph-8.jpeg";


import eve5 from "../assets/images/events/dest-ing/1.jpg";
import Link from "next/link";


export default function Orphanage() {
  const [didViewCountUp, setState] = useState(false);
  const [more, setMore] = useState(false);

  const imgs = [img9,img4,img6,img7,img8,img1 
    
  ]


  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setState({ didViewCountUp: true });
    }
  };
  return (
    <div>
      <Navbar />

      {/* <div className="bg-cyan-900  pb-16 lg:pb-24   pt-20"> */}
      {/* <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / Womens Orphanage</p>
          <h1 className="text-center text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
            MDI WOMENS ORPHANAGE & DESTITUTE HOME{" "}
          </h1>
        </div> */}

      <OrphanageBanner />
      {/* </div> */}

      <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div className="px-4 md:px-0 md:w-11/12 m-auto ">
          <div className=" grid lg:grid-cols-3  gap-6 ">
            <div className="lg:col-span-2 ">
              <h1 className=" text-lg lg:text-2xl text-cyan-900">
                MDI Women&apos;s Orphanage & Destitute Home
              </h1>

              <p className=" mt-2 lg:mt-4">
                {" "}
                Presently, MDI Destitute Home provides comfort to 58 girls and
                women those who are destitute and have been abandoned or
                exploited by society, community, family, relatives etc, where
                they are given all the basic necessities along with eliminating
                their miseries and bringing them up as best law abiding and god
                fearing citizen in the society. Besides basic necessities, MDI
                also takes care of their holistic growth by providing good
                education and healthcare facilities. It aims at securing a
                better life for the children and helping them to become self
                reliant through its work on education, vocational education,
                health and rehabilitation. MDI has also made sure that the
                children are provided with computer training, tailoring, basket
                weaving. art craft etc. The MDI also takes responsibility of
                getting the girls married off. It is our dream to have an ourown
                building and now it is under construction but the lack of
                sufficient funds is problem to us for we can&apos;t fulfill it
                yet. MDI works entirely independent and does not depend on any
                other external financial support. But if there are donors who
                wish to offer their support in the form of money or serve the
                children with a day meal, they whole heartedly accept it. We
                would appreciate it if our donors would provide us with material
                and supply needed for the completion of destitute home building
                rather than money.
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
                          end={didViewCountUp ? 58 : 0}
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
                          end={didViewCountUp ? 250 : 0}
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
          <a href="/destituteHome.pdf" download="/destituteHome.pdf">
          <button className= "hover:bg-cyan-800 text-lg hover:rounded mt-6  bg-white border border-cyan-800    flex m-auto  hover:text-white p-2   px-3 ">Application Form For Admission</button>
          </a>
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
            <div className="even__item   bg-white shadow-xl m-2  pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
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
                      Destitute Home New Block Inauguration
                    </h3>
                    <div className="text-gray-600 flex mt-1">
                      <LocationOnIcon className="text-lg" />
                      <p>Karulai</p>
                    </div>
                    <p className="mt-1">
                      Alhamdulillah, through five years of hard work, we were
                      able to achieve it by the grace of Allah, the Merciful.
                      The hostel was inaugurated on 10 June 2023 in the presence
                      of Syeds and scholars.
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
