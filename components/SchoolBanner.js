import Carousel from "react-material-ui-carousel";

import slide2 from "../assets/images/school/slide-2.JPG";

import slide3 from "../assets/images/school/slide-3.JPG";
import slide4 from "../assets/images/school/slide-4.JPG";
import slide5 from "../assets/images/school/slide-5.JPG";

export default function SchoolBanner() {
  return (
    <div className="pt-16 border">
      <Carousel
        // autoPlay={false}
        interval={3000}
        swipe={true}
        indicators={false}
        animation="fade"
        stopAutoPlayOnHover={false}
        duration={1000}
        // className="h-full"
      >
        <div
          className="page__banner  h-72 lg:h-96   flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide2.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
         
         <div className=" w-full bg-opacity-40 bg-black lg:bg-inherit">
        <p className="  animate-fade-right  animate-ease-out animate-delay-1000 text-center   text-white text-xl lg:text-4xl font-bold">
        MDI ENGLISH SCHOOL
          </p>
        </div>
        </div>
        <div
          className="page__banner  h-72 lg:h-96   flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide3.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
           

          <div className=" w-full bg-opacity-40 bg-black lg:bg-inherit">
        <p className="  animate-fade-up  animate-ease-out animate-delay-1000 text-center   text-white text-xl lg:text-4xl font-bold">
        MDI ENGLISH SCHOOL
          </p>
        </div>
        </div>
        <div
          className="page__banner  h-72 lg:h-96   flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide4.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
         
         <div className=" w-full bg-opacity-40 bg-black lg:bg-inherit">
        <p className="  animate-fade-down  animate-ease-out animate-delay-1000 text-center   text-white text-xl lg:text-4xl font-bold">
        MDI ENGLISH SCHOOL
          </p>
        </div>
        </div>

        <div
          className="page__banner  h-72 lg:h-96   flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide5.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          
          <div className=" w-full bg-opacity-40 bg-black lg:bg-inherit">
        <p className="  animate-fade-right  animate-ease-out animate-delay-1000 text-center   text-white text-xl lg:text-4xl font-bold">
        MDI ENGLISH SCHOOL
          </p>
        </div>
         
        </div>
      </Carousel>
    </div>
  );
}
