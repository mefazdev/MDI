import Carousel from "react-material-ui-carousel";
// import camp1 from '../assets/img/camp-1.jpg'
// import camp2 from '../assets/img/camp-2.jpg'
// import camp3 from '../assets/img/camp-7.jpg'
// import garden from '../assets/img/garden.jpeg'

import slide6 from "../assets/images/slide/slide-6.jpg";
import slide7 from "../assets/images/slide/slide-7.jpg";
import slide8 from '../assets/images/orphanage/orph-5.jpeg'
// import slide8 from "../assets/images/slide/slide-8.jpg";
import Image from "next/image";

export default function MainBanner() {
  return (
    <div className="pt-16 ">
      <Carousel
        // autoPlay={false}
        interval={4000}
        swipe={true}
        indicators={false}
        animation="slide"
        stopAutoPlayOnHover={false}
        // duration={1000}
        // className="h-full"
      >
         <div
          className="main__banner__box    "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide6.src})`,
          }}
        >
 <div className="main__banner__div">
            <div className="main__head__div bg-black border   bg-opacity-20 pb-6 ">
              <span >
                <h2 className=" border-green-100rounded text-opacity-100">مدار الدعوة الاسلامية</h2>
              </span>
              <p className="text-center text-white text-lg">Empowering The Generation</p>
              <a href="#about"><button className="text-center mt-3 p-1 px-3  text-white m-auto w-fit border border-yellow-500 flex ">Know More</button>
             </a>
               
             
            </div> 
            </div> 
          
        </div>
       

 


  

        <div
          className="main__banner__box    "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide7.src})`,
          }}
        >
          <div className="main__banner__div">
            <div className="main__head__div bg-black border   bg-opacity-20 pb-6 ">
              <span >
                <h2 className=" border-green-100rounded text-opacity-100">مدار الدعوة الاسلامية</h2>
              </span>
              <p className="text-center text-white text-lg">Empowering The Generation</p>
              <a href="#about"><button className="text-center mt-3 p-1 px-3  text-white m-auto w-fit border border-yellow-500 flex ">Know More</button>
             </a>
               
             
            </div> 
            </div> 
        </div>
        <div
          className="main__banner__box    "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide8.src})`,
          }}
        >
          <div className="main__banner__div">
            <div className="main__head__div bg-black border   bg-opacity-20 pb-6 ">
              <span >
                <h2 className=" border-green-100rounded text-opacity-100">MDI KARULAI</h2>
              </span>
              <p className="text-center text-white text-lg">Empowering The Generation</p>
              <a href="#about"><button className="text-center mt-3 p-1 px-3  text-white m-auto w-fit border border-yellow-500 flex ">Know More</button>
             </a>
               
             
            </div> 
            </div> 
        </div>

 
      </Carousel>
    </div>
  );
}
