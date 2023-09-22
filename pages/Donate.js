import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import upi from '../assets/images/upi.png'
import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <Navbar />

      <div className="bg-cyan-900 h-52 md:h-72 pt-5">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / Donate</p>
          <h1 className="text-center text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
            DONATE
          </h1>
        </div>
      </div>

      <div className="content pt-7 md:pt-16 pb-16 md:pb-28">
        <div className="px-4 md:px-0 md:w-11/12 m-auto bg-white    ">
          <div className="bg-slate-100 p-2 lg:p-4">
            {/* <h6 className="text-xl text-cyan-800 font-bold text-center">
              Contribute today for a promising tomorrow.
            </h6> */}
            <div className="grid  lg:grid-cols-2 gap-7 mt-4">
              <div>
              <h6 className="text-xl text-cyan-800 font-bold text-cente">
              Contribute today for a promising tomorrow.
            </h6>
            <p className="mt-2">
                Your contribution to MDI plays a crucial role in ensuring that
                our students can achieve their life goals, including education,
                social status, housing, and an improved quality of life. They
                aspire to receive a well-rounded education, blending secular and
                spiritual values rooted in the rich Islamic tradition and
                knowledge, and your support makes you an integral part of their
                journey. Our students come from diverse backgrounds, gathering
                here to acquire knowledge and experience life in the best
                possible environment. Upon successfully completing their
                courses, they are prepared to contribute to society positively,
                engaging in sustainable development initiatives. Your generosity
                will leave a lasting impact, as the prayers and the knowledge
                our students gain will endure in the eternal world
              </p>
              </div>
              

              <div className="flex ">
                <div className="m-auto bg-slate-50 p-2 lg:p-5 text-lg  ">
                  <p>Shoukathali.k</p>
                  <p>G.Secretary, Madaru Da&apos;wathil Islamiyya</p>
                  <p className="text-2xl text-cyan-800 mt-1">
                    A/c No:0985073000000084
                  </p>
                  <p className="text-cyan-800">IFSC:SIBL0000985</p>
                  <p>SBI KARULAI BRANCH</p>

                  <p className="text-cyan-800 text-2xl mt-1">
                    Gpay : 9656570068
                  </p>
 <div className="w-16 m-auto">
  <Image  src={upi} />
 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
