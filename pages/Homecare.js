import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Homecare() {
  return (
    <div>
      <Navbar />

      <div className="bg-cyan-900  pb-16 lg:pb-24   pt-20">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / Home Care</p>
          <h1 className="text-center text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
            MDI HOME CARE 
          </h1>
        </div>
      </div>

      <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div className="px-4 md:px-0 md:w-11/12 m-auto    grid lg:grid-cols-3  gap-6 ">
          <div className="lg:col-span-2 ">
            <h1 className="text-lg lg:text-2xl text-cyan-900">MDI HOME CARE</h1>

            <p className="mt-2 lg:mt-4">
              
            </p>
          </div>

          <div className="care__img h-64    order-first lg:order-last "></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
