 
import React, { useEffect, useState }  from "react"; 
 import gs from '../assets/images/gs.jpg'
import Image from "next/image";
export default function Message() {
  const [isVisible, setIsVisible] = useState(false);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  
  const handleScroll = () => {
    const element = document.getElementById('myElement'); // Replace 'myElement' with the actual element ID you want to track
    if (element && isElementInViewport(element)) {
      // setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    
    <div id="myElement" 
     className="bg-slate-100 mt-10   pt-10 lg:pt-16 pb-8 lg:pb-16   py-4   "
    >
         
      <div
       className={` m-auto px-4 md:px-0 md:w-11/12 ${isVisible ? 'animate-fade-up   animate-ease-linear  ' : ''}`}
  
      //  className=" m-auto px-4 md:px-0 md:w-11/12 "
      >

        <div className="home__about__content grid grid-cols-1 gap-5 lg:gap-10 lg:grid-cols-3">
          <div
            className="border- border-cyan-800   "
          
          >
            <div
            className="max-w-96"
              //  className="message__im   
              //   h-72 lg:h-80  
              //   "
            >
              <Image src={gs} className='border- border-white ' />
            </div>
          </div>

          <div className="home__about__content__right lg:col-span-2">
            <h3 className="text-2xl   ">Founder&apos;s Message</h3>
           
           
            <p 
            //  className={`mt-2 ${isVisible ? 'animate-fade-up' : ''}`}
        
            className="mt-2  "
            >
              MDI (Madaru Da&apos;wathil Islamiyya), an Islamic institution, has
              been operating in the eastern part of Nilambur sub-district in the
              Malappuram district of Kerala for the past two decades. Under the
              leadership of MDI, it has been actively involved in the fields of
              religious, physical, and technical education, primarily focusing
              on women&apos;s education and empowerment in the rural villages of
              eastern Nilambur.Under the leadership of MDI (Madaruddeen
              Institute), for the past 20 years, a remarkable service has been
              provided in the field of women&apos;s education and empowerment in
              the rural villages of eastern Nilambur. MDI&apos;s women&apos;s
              wing, known as &apos;Vanitha Agathi Mandiram,&apos; has been
              rendering exceptional services in areas related to women&apos;s
              education, empowerment, and socio-economic development. In
              addition to that, MDI oversees the operation of the &apos;Vanitha
              Arts & Hadiya Academy
              {/* We work to enable
students from backward sections to have the skill to do higher studies, start a business, engage
with the modern world and lead their community. Our goal is to empower the deprived sections
of society by developing young leaders. */}
            </p>

            <p className="text-LG mt-3 text-black font-semibold">
              SHOUKATH ALI SAQAFI
            </p>
            <p className="text-gray-700 ">
              Founder & General Secretary of MDI Karulai
            </p>
          </div>
        </div>
      </div>
     
    </div>
   
  );
}
