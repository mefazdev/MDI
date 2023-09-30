import Carousel from "react-material-ui-carousel";

import slide2 from "../assets/images/zahra/zahra-3.jpeg";

import slide3 from "../assets/images/zahra/zahra-6.jpeg";
import slide4 from "../assets/images/zahra/zahra-2.jpeg";
 
import slide5 from "../assets/images/school/slide-2.jpg";

export default function ZahraBanner() {
  return (
    <div className="pt-16 border">
      <Carousel
        // autoPlay={false}
        interval={2000}
        swipe={true}
        indicators={false}
        animation="slide"
        stopAutoPlayOnHover={false}
        // className="h-full"
      >
        <div
          className="page__banner h-96   flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide2.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-center text-white text-4xl font-bold">
          ZAHRA PRESCHOOL
          </p>
        </div>
        <div
          className="page__banner h-96   flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide3.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-center text-white text-4xl font-bold">
          ZAHRA PRESCHOOL
          </p>
        </div>
        <div
          className="page__banner h-96   flex justify-center items-center   "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide4.src})`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="text-center text-white text-4xl font-bold">
            ZAHRA PRESCHOOL
          </p>
        </div>

       
      </Carousel>
    </div>
  );
}
