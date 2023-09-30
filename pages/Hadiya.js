import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor-v2";
import HadiyaBanner from "@/components/HadiyaBanner";
import img1 from "../assets/images/hadiya/hadiya-1.jpeg";
import img2 from "../assets/images/hadiya/hadiya-2.jpeg";
import img3 from "../assets/images/hadiya/hadiya-3.jpeg";
import img4 from "../assets/images/hadiya/hadiya-4.jpeg";
import img5 from "../assets/images/hadiya/hadiya-5.jpeg";
import img6 from "../assets/images/hadiya/hadiya-6.jpeg";


export default function Hadiya() {
  const [didViewCountUp, setState] = useState(false);

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


<HadiyaBanner/>
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
            MDI women&apos;s college was inaugurated by Karulai Grama panchayath
            President in Pallippadi campus and opened its gates for education
            in June 2003, with 57 students. Students are trained in a plethora
            of disciplines by a highly qualified and experienced faculty which
            includes academicians and researchers. Besides equipping the
            students with a higher secondary education (plus two) of the
            Kerala State Education Board, and Degree from Calicut Universit ,
            they are thoroughly taught about The Holy Quran, Hadith,
            Literature, History & Culture of Muslims. Special attention is
            paid to identify the capabilities of students, develop essential
            soft skills and strengthen their inherent potentials so as to
            equip them to pursue success in modern society as Muslim women. 
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
     

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 mt-24">
          <div  className="h-60"
          style={{
            backgroundImage: `url(${img1.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          >

          </div>

          <div  className="h-60"
          style={{
            backgroundImage: `url(${img2.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          >

          </div>
          <div  className="h-60"
          style={{
            backgroundImage: `url(${img3.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          >

          </div>
          <div  className="h-60"
          style={{
            backgroundImage: `url(${img4.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          >

          </div>
          <div  className="h-60"
          style={{
            backgroundImage: `url(${img5.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          >

          </div>
          <div  className="h-60"
          style={{
            backgroundImage: `url(${img6.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          >

          </div>
        </div> 
        
        
        </div>



       
       
      </div>
      <Footer />
    </div>
  );
}
