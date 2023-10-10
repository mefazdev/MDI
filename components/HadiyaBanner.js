import Carousel from "react-material-ui-carousel";

import slide2 from "../assets/images/hadiya/9.jpeg";

// import slide3 from "../assets/images/hadiya/hadiya-4.jpeg";
import slide4 from "../assets/images/hadiya/hadiya-5.jpeg";

import slide6 from "../assets/images/hadiya/10.jpeg";
import slide7 from "../assets/images/hadiya/11.jpeg";
import slide8 from "../assets/images/hadiya/12.jpeg";

export default function HadiyaBanner() {
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
          className="   h-72 lg:h-96  flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide8.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" w-full bg-opacity-40 bg-black lg:bg-inherit">
            <p className="  animate-fade-right  animate-ease-out animate-delay-1000 text-center   text-white text-xl lg:text-4xl font-bold">
              WOMEN&apos;S ARTS & HADIYA ACADEMY
            </p>
          </div>
        </div>
        <div
          className="   h-72 lg:h-96  flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide2.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" w-full bg-opacity-40 bg-black lg:bg-inherit">
            <p className="  animate-fade-right  animate-ease-out animate-delay-1000 text-center   text-white text-xl lg:text-4xl font-bold">
              WOMEN&apos;S ARTS & HADIYA ACADEMY
            </p>
          </div>
        </div>

        <div
          className="  h-72 lg:h-96  flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide7.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-opacity-40 w-full bg-black lg:bg-inherit">
            <p className="  animate-fade-up  animate-ease-out animate-delay-1000 text-center   text-white text-xl lg:text-4xl font-bold">
              WOMEN&apos;S ARTS & HADIYA ACADEMY
            </p>
          </div>
        </div>

        <div
          className="  w-full  h-72 lg:h-96  flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide4.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-opacity-40 bg-black lg:bg-inherit">
            <p className="  animate-fade-right  animate-ease-out animate-delay-1000 text-center   text-white text-xl lg:text-4xl font-bold">
              WOMEN&apos;S ARTS & HADIYA ACADEMY
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
