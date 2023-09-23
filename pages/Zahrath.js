import Navbar from "@/components/Navbar";
import React from "react";

export default function Zahrath() {
  return (
    <div>
      <Navbar />

      <div className="bg-cyan-900 h-52 md:h-72 pt-5">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / Zahra Park</p>
          <h1 className="text-center text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
            MDI ZAHRA PARK{" "}
          </h1>
        </div>
      </div>

      <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div className="px-4 md:px-0 md:w-11/12 m-auto bg-white p-1  grid lg:grid-cols-3  gap-6 ">
          <div className="lg:col-span-2 ">
            <h1 className="text-2xl text-cyan-900">
              ZAHRA PRESHCOOL
            </h1>

            <p className="mt-4">
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
      </div>
    </div>
  );
}
