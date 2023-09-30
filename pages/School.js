import Navbar from "@/components/Navbar";
import SchoolBanner from "@/components/SchoolBanner";
import React from "react";
import img1 from "../assets/images/school/school-4.JPG";
import img2 from "../assets/images/school/school-2.JPG";
import img3 from "../assets/images/school/slide.JPG";
import img4 from "../assets/images/school/school-1.JPG";
import img5 from "../assets/images/school/school-6.JPG";
import img6 from "../assets/images/school/school-5.JPG";

export default function School() {
  return (
    <div>
      <Navbar />
  
      {/* <div className='bg-cyan-900  pb-16 lg:pb-24   pt-20'>
           <div className='px-4 md:px-0 md:w-11/12 m-auto'>

           <p className='text-gray-100'>Home /  English School</p>
           <h1 className='text-center text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   '>MDI ENGLISH SCHOOL </h1>
           </div>
        </div> */}

      <SchoolBanner />

      <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div className="px-4 md:px-0 md:w-11/12 m-auto ">
        <div className="grid lg:grid-cols-3  gap-6 ">
          <div className="lg:col-span-2 ">
            <h1 className=" text-xl lg:text-2xl text-cyan-900">
              Englsih School (CBSE)
            </h1>

            <p className=" mt-2 lg:mt-4">
              MDI Public School adds another golden feather to the educational
              cap of Nilambur constituency with its exemplary academic
              performance and amazing results. The school never compromises on
              the quality of education it provides and the moral atmosphere it
              promises. MDI Public School stands singular among the many in the
              field. thanks to its unique features and the innovative methods it
              adopts in addition to the trust the school manage to nurture in
              the hearts of supportive parents and educationalists. The huge
              turnout of parents to secure an admission year in, year out
              underscores the fact that we are the most sought after school in
              the vicinity. Child-friendly KG section, trained mentors, born
              teachers, spacious and sophisticated class rooms, well-equipped IT
              lab, well-stocked and student friendly library and fully fledged
              ERP system are some of the salient features of the School. Here,
              students find it to be an amiable place where they get to their
              maximum potential and thrive in different ways. The professional
              and academic leadership at the helm of the School never let the
              quality of education and the moral standard dip a bit lower. 
            </p>
          </div>

          <div className="school__img bg-slate-200 p-3   lg:p-10 lg:mt-10   ">
            
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
    </div>
  );
}
