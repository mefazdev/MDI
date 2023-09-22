import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Orphanage() {
  return (
    <div>
      <Navbar />

      <div className="bg-cyan-900 h-52 md:h-72 pt-5">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / Womens Orphanage</p>
          <h1 className="text-center text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
            MDI WOMENS ORPHANAGE & DESTILUTE HOME{" "}
          </h1>
        </div>
      </div>

      <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div className="px-4 md:px-0 md:w-11/12 m-auto bg-white p-1  grid lg:grid-cols-3  gap-6 ">
          <div className="lg:col-span-2 ">
            <h1 className="text-2xl text-cyan-900">
              MDI Womens Orphanage and Distilute Home
            </h1>

            <p className="mt-4">
              {" "}
              Presently, MDI Destitute Home provides comfort to 95 girls and
              women those who are destitute and have been abandoned or exploited
              by society, community, family, relatives etc, where they are given
              all the basic necessities along with eliminating their miseries
              and bringing them up as best law abiding and god fearing citizen
              in the society. Besides basic necessities, MDI also takes care of
              their holistic growth by providing good education and healthcare
              facilities. It aims at securing a better life for the children and
              helping them to become self reliant through its work on education,
              vocational education, health and rehabilitation. MDI has also made
              sure that the children are provided with computer training,
              tailoring, basket weaving. art craft etc. The MDI also takes
              responsibility of getting the girls married off. It is our dream
              to have an ourown building and now it is under construction but
              the lack of sufficient funds is problem to us for we can&apos;t fulfill
              it yet. MDI works entirely independent and does not depend on any
              other external financial support. But if there are donors who wish
              to offer their support in the form of money or serve the children
              with a day meal, they whole heartedly accept it. We would
              appreciate it if our donors would provide us with material and 
              supply needed for the completion of destitute home building rather
              than money.
            </p>
          </div>

          <div className="orphan__img  h-64 lg:h-full   order-first lg:order-last "></div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
