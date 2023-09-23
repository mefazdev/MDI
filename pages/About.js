import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

export default function About() {
  return (
    <div>
      <Navbar />

      <div className="bg-cyan-900  pb-16 lg:pb-24   pt-20 ">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / About</p>
          <h3 className="text-center text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
            ABOUT MDI{" "}
          </h3>
        </div>
      </div>
      <div className="content pt-7 md:pt-16 pb-7 md:pb-16">
        <div className="px-4 md:px-0 md:w-11/12 m-auto      ">
          <h1 className=" text-xl lg:text-2xl text-cyan-900">Madaru Da&apos;wathil Islamiyya</h1>

          <p className=" mt-2 lg:mt-4">
            MDI (registered as Madaru Da&apos;awathil Islamiyya under the
            Societies Registration Act of 1860)is a unique religious ,socio
            cultural, educational and charitable organization with a laudable
            mission and vision..MDI situated in Karulai besides the reserve
            forest area of Nilambur Tehsil., Malappuram District of Kerala
            state..MDI was established in 1997as a non political, non
            profitable, and non-government Organization (NGO). MDI has over 12
            educational and other institutions under its auspices and has now
            transformed itself into a mass movement of smart learning. With 21
            years since its inception, has now grown enough to support and
            nourish numerous sections of humanity. From 25 cents of minimum land
            at its beginning, the campus spread over three acres of lush
            greenery and has State-of-the-Art Infrastructure facilities.
          </p>
          <p className="mt-4">
            {" "}
            People from all walks of life and all parts of Kerala and Nilagiri
            District of Tamil- nadu have been visiting us to acquire knowledge
            through the route of value-based education. Our School, colleges and
            extension activities play a vital role, contributing to a
            progressive society and an enlightened culture. MDI believes in
            protecting orphans, uplifting the poor and needy, rehabilitating and
            bringing them to the forefront of the society.. MDI offers them
            food, shelter, education, medical and other facilities free of cost.
            Financial assistance is extended to orphan girls to enable them to
            marry. 
          </p>

          <p className="mt-8 text-xl lg:text-2xl text-emerald-900"> MDI stand for:</p>
          <li> Uplifting the poor and needy.</li>
          <li>Moulding a morally responsible generation.</li>
          <li>Empowering relationships and encouraging education.</li>
          <li>
            Developing community identity by utilizing the talents of our
            students to contribute to a better society.
          </li>
          <li> Developing national integration to respect the nation</li>
          <li>
            Developing the Good Human Resource Practice to serve the nation.
          </li>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
