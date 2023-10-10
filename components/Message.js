import React, { useEffect, useState } from "react";
import gs from "../assets/images/gs.jpg";
import Image from "next/image";
export default function Message() {
  return (
    <div
      id="myElement"
      className="bg-slate-100 mt-10   pt-10 lg:pt-16 pb-8 lg:pb-16   py-4   "
    >
      <div>
        <div className="home__about__content  px-4 md:px-0 md:w-11/12 m-auto grid grid-cols-1 gap-5 lg:gap-10 lg:grid-cols-3">
          <div className="border- border-cyan-800   ">
            <div
              className="max-w-96  lg:p-3       "
              //  className="message__im
              //   h-72 lg:h-80
              //   "
            >
              <Image
                src={gs}
                className=" lg:max-w-sm    border-2 border-yellow-600 "
              />
            </div>
          </div>

          <div className="home__about__content__right lg:col-span-2    flex justify-center">
            <div >
              <h3 className="text-2xl   ">Founder&apos;s Message</h3>

              <p className="mt-2  ">
                From its humble beginnings as an Islamic nursery school in 1997,
                MDI (Madaru Dawatil Islamiyya) has gradually grown to become the
                pride of Islamic and modern education for Muslims in Eastern
                ernad. People from all walks of life, the elite, the poor, the
                educated and the common man, have joined MDI in a progressive
                journey of social change in a movement that creatively combines
                education, charity and national consciousness.
                {/* We work to enable
students from backward sections to have the skill to do higher studies, start a business, engage
with the modern world and lead their community. Our goal is to empower the deprived sections
of society by developing young leaders. */}
              </p>

              <p className="text-LG mt-3 lg:mt-5 text-black font-semibold">
                SHOUKATH ALI SAQAFI
              </p>
              <p className="text-gray-700 ">
                Founder & General Secretary of MDI Karulai
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
