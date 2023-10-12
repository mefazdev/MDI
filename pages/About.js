import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import usthad from '../assets/images/about/usthad.jpeg'
import img2 from '../assets/images/about/2.jpeg'
import img3 from '../assets/images/about/3.jpeg'
import Image from "next/image";
export default function About() {
  return (
    <div>
      <Navbar />

      <div className="bg-cyan-900  pb-16 lg:pb-24   pt-20 ">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / About</p>
          <h3 style={{textTransform:"uppercase"}} className="text-center text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
          Madaru Da&apos;wathil Islamiyya
          </h3>
        </div>
      </div>
      <div className="content pt-7 md:pt-16 pb-7 md:pb-16">


        <div className="px-4 md:px-0 md:w-11/12 m-auto      ">
          {/* <h1 className=" text-xl lg:text-2xl text-cyan-900">Madaru Da&apos;wathil Islamiyya</h1> */}

<div className="grid lg:grid-cols-3 gap-10 lg:gap-0  bg-zinc-100 p-4 lg:p-10">
  <div className="m-auto shadow-lg bg-zinc-100  ">
  <div className="w-fit bg-zinc-100  rounded">
    {/* <div className="bg-zinc-100 "> */}   
     <div className="bg-cyan-900 rounde p-1 mt- text-white">
    <p className="text-center text-lg">Chief Patron</p>
    </div>
     
      {/* </div> */}
    <div className="  lg:w-80 rounde mt-2"><Image src={usthad}   /></div>
    {/* <div className="bg-cyan-900 p-1 mt- text-white"> */}
    
    <div className="p-1 pt-2 text-cyan-950 ">
    <p className="text-center text-lg  ">Sheikh Abubakr Ahmad</p>
  </div>
    {/* </div> */}
    
  </div> 
  </div>
   

  <div className=" lg:col-span-2   w-full  lg:w-fit m-auto    rounded">
      
     <div className="bg-cyan-900 rounde p-1 mt- text-white">
    <p className="text-center text-lg"> Patrons</p>
    </div>
     
     <div className="grid grid-cols-2 gap-5 mt-5 ">
<div className=" w-full lg:w-fit m-auto  shadow-lg  ">
<div className=" lg:w-72 h-64 lg:h-80    "
   style={{
    backgroundImage: `url(${img3.src})`,

    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  
  {/* <Image src={img3} className="rounded" /> */}
  </div>
  <div className="p-1 pt-2 text-cyan-950 ">
  <p className="text-center  text-lg  ">Abdurahman Faizy Wandoor</p>
 
  </div>
      
</div>
<div className=" w-full lg:w-fit m-auto shadow-lg">
<div className=" h-64 lg:h-80  lg:w-72 "
 style={{
  backgroundImage: `url(${img2.src})`,

  backgroundSize: "cover",
  backgroundPosition: "center",
}}
>
  {/* <Image src={img2} className="rounded" /> */}
  </div>
  <div className="p-1 pt-2 text-cyan-950">
  <p className="text-center text-lg   ">Abdurahman Darimi Kootampara</p>
  </div>
       
 
</div>
     </div>
   
   
    
  </div>  
</div>

          <p className=" mt-6 lg:mt-10">
          MDI (registered as Madaru Da&apos;awathil Islamiyya under the
            Societies Registration Act of 1860), is a unique religious, socio
            cultural, educational and charitable organization with a laudable
            vision and mission. MDI situated in Karulai besides the reserve
            forest area of Nilambur Taluk, Malappuram District of Kerala state.
            MDI was established in 1997 as a non-political, non-profitable and
            non-government Organization (NGO). MDI has over 12 educational and
            other institutions under its auspices and has now transformed itself
            into a mass movement of smart learning. With 25 years since its
            inception, has now grown enough to support and nourish numerous
            sections of humanity. From 25 cents of minimum land at its
            beginning, the campus spread over three acres of lush greenery and
            has State-of-the-Art infrastructure facilities.          </p>
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
