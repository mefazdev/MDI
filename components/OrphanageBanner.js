
import Carousel from "react-material-ui-carousel";

import slide2 from "../assets/images/orphanage/orph-1.jpg";

import slide3 from "../assets/images/orphanage/orph-2.jpg";
import slide4 from "../assets/images/orphanage/orph-3.jpg";
// import slide5 from "../assets/images/school/slide-5.JPG";

export default function OrphanageBanner() {
  return (
    <div className="pt-16 border">
      <Carousel
        // autoPlay={false}
        interval={3000}
        swipe={true}
        indicators={false}
        animation="slide"
        stopAutoPlayOnHover={false}
        duration={1000}
        // className="h-full"
      >
        <div
          className="page__banner h-72 lg:h-96 relative    flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide2.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        > 
        <div className="absolut     bottom-0 bg-opacity-40 bg-black lg:bg-inherit">
        <p className="  animate-fade-right  animate-ease-out animate-delay-1000 text-center   text-white text-xl lg:text-4xl font-bold">
          MDI Womens Orphanage & Distitute Home
          </p>
        </div>
         
        </div>
        <div
          className="page__banner h-72 lg:h-96 relative    flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide3.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        > 
        <div className="absolut bottom-0     bg-opacity-40 bg-black lg:bg-inherit">
        <p className="  animate-fade-up  animate-ease-out animate-delay-1000 text-center   text-white text-xl lg:text-4xl font-bold">
          MDI Womens Orphanage & Distitute Home
          </p>
        </div>
         
        </div>
         

        <div
          className="page__banner h-72 lg:h-96 relative    flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide4.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        > 
        <div className="absolut bottom-0    bg-opacity-40 bg-black lg:bg-inherit">
        <p className="  animate-fade-down  animate-ease-out animate-delay-1000 text-center   text-white text-xl lg:text-4xl font-bold">
          MDI Womens Orphanage & Distitute Home
          </p>
        </div>
         
        </div>
      </Carousel>
    </div>
  );
}
