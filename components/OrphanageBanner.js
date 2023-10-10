
import Carousel from "react-material-ui-carousel";

import slide2 from "../assets/images/orphanage/orph-1.jpg";
  
import slide6 from "../assets/images/orphanage/orph-4.jpeg";
import slide7 from "../assets/images/orphanage/orph-6.jpeg";
import slide8 from "../assets/images/orphanage/orph-7.jpeg";
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
          className="  h-72 lg:h-96 relative    flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide2.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        > 
        <div className="absolut bottom-0    bg-opacity-40 bg-black lg:bg-inherit">
        <p className="  animate-fade-down  animate-ease-out animate-delay-1000 text-center   text-white text-xl lg:text-4xl font-bold">
        MDI Women&apos;s Orphanage & Destitute Home
          </p>
        </div>
         
        </div>
         
        <div
          className="  h-72 lg:h-96 relative    flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide6.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        > 
        <div className="absolut bottom-0     bg-opacity-40 bg-black lg:bg-inherit">
        <p className="  animate-fade-up  animate-ease-out animate-delay-1000 text-center   text-white text-xl lg:text-4xl font-bold">
          MDI Women&apos;s Orphanage & Destitute Home
          </p>
        </div>
         
        </div>
        <div
          className=" h-72 lg:h-96 relative    flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide8.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        > 
        <div className="absolut bottom-0    bg-opacity-40 bg-black lg:bg-inherit">
        <p className="  animate-fade-down  animate-ease-out animate-delay-1000 text-center   text-white text-xl lg:text-4xl font-bold">
        MDI Women&apos;s Orphanage & Destitute Home
          </p>
        </div>
         
        </div>

        <div
          className="  h-72 lg:h-96 relative    flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide7.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        > 
        <div className="absolut bottom-0    bg-opacity-40 bg-black lg:bg-inherit">
        <p className="  animate-fade-right  animate-ease-out animate-delay-1000 text-center   text-white text-xl lg:text-4xl font-bold">
        MDI Women&apos;s Orphanage & Destitute Home  </p>
        </div>
         
        </div>
       
        
      </Carousel>
    </div>
  );
}
