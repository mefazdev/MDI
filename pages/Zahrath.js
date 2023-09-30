import Navbar from "@/components/Navbar";
import ZahraBanner from "@/components/ZahraBanner";
import React from "react";
import img1 from "../assets/images/zahra/zahra-1.jpeg";
import img2 from "../assets/images/zahra/zahra-6.jpeg";
import img3 from "../assets/images/zahra/zahra-3.jpeg";
import img4 from "../assets/images/zahra/zahra-4.jpeg";
import img5 from "../assets/images/zahra/zahra-5.jpeg";
import img6 from "../assets/images/zahra/zahra-2.jpeg";


export default function Zahrath() {
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

<ZahraBanner/>
      <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
        <div className=" m-auto    grid lg:grid-cols-3  gap-6 ">
          <div className="lg:col-span-2 ">
            <h1 className=" text-lg lg:text-2xl text-cyan-900">
              ZAHRA PRESHCOOL
            </h1>

             

            <p className="mt-2 lg:mt-4">
              Zahratul Qur&apos;an Preschool is constituted with an aim of helping
              future generation mould their lives according to Islamic values
              enhanced through child friendly mentoring. This will be done using
              the modern methods of education for Islamic studies. Every modern,
              state of the art technologies will be used effectively in the
              class rooms. The medium of instruction will be Arabic.
            </p>
          </div>

          <div className="zahra__img  h-64    order-first lg:order-last "></div>
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
    </div>
  );
}
