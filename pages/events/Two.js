import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import img1 from "../../assets/images/events/jalaliyya/1.jpeg";
import img2 from "../../assets/images/events/jalaliyya/2.jpeg";
import img3 from "../../assets/images/events/jalaliyya/3.jpeg";
import img4 from "../../assets/images/events/jalaliyya/4.jpeg";
import img5 from "../../assets/images/events/jalaliyya/5.jpeg";
import img6 from "../../assets/images/events/jalaliyya/6.jpeg";
import img7 from "../../assets/images/events/jalaliyya/7.jpeg";

export default function Events() {
  const imgs = [img1, img2, img3, img4, img5, img6, img7];
  return (
    <div>
      <Navbar />

      <div className="bg-cyan-900  pb-16 lg:pb-24   pt-20">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / Event</p>
          <h1 className="text-center text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
            10th ANNIVERSARY OF JALALIYYA RATEEB
          </h1>
        </div>
      </div>

      <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div className=" md:w-11/12 m-auto p-4 md:p-0 ">
          <div>
            <h3 className="text-cyan-800 text-xl font-bold">
              10th Anniversary of Jalaliyya Ratheeb{" "}
            </h3>
            {/* <p>
              Jalaliyya majilis are held every month under the leadership of
              Syed Hydros Muthukoya Thangal Elankur, Syed falil jifri Kundur and
              Shihabudeen Musliyar kanchangad. Monthly Jalaliyah&apos;s 10th
              anniversary celebration in conjunction with the Silver Jubilee was
              held on Wednesday, February 15 at the MDI campus. Majilis was
              Started with the aim of spiritual advancement of the institution
              and local residents on the mentorship Shuhaib Alam qadiri. Today
              hundreds of believers participate in the Majlis every month and
              obtain spiritual approval. Majlis is held on the fifteenth day of
              every English month. Special prayers are offered to institutional
              associates and others.
            </p> */}

            <p>
              MDI organizes a monthly prayer meeting and Jalaliyya Ratheeb on
              fifteenth of every month which is reported to be the largest
              Majlis in this area, It is held at MDI campus . The Jalaliyya
              Ratheeb began in 2010. The Burdha majlis is started Three year
              befor by the direction given by usthad Shaikh aboobacker Ahmed on
              the time of 20th annual celebration of MDI.The central attraction
              and the focal point of all activities where MDI takes its
              inspiration from is the Jalaliyya Ratheeb congregation which is
              led by sayyid Fadhlu Jifree Thangal Kundoor with thousands of
              people attending. 
            </p>
          </div>

          <div
            className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8
         cursor-pointer
          "
          >
            {imgs?.map((d, i) => {
              return (
                <div
                  key={i}
                  className="h-64 border-b-4 rounded border-gray-800"
                  style={{
                    backgroundImage: `url(${d.src})`,

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
