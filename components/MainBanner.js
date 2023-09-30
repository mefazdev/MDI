import Carousel from "react-material-ui-carousel";
// import camp1 from '../assets/img/camp-1.jpg'
// import camp2 from '../assets/img/camp-2.jpg'
// import camp3 from '../assets/img/camp-7.jpg'
// import garden from '../assets/img/garden.jpeg'
import slide1 from "../assets/images/slide/slide-1.jpg";
import slide2 from "../assets/images/slide/slide-2.jpg";
import slide3 from "../assets/images/slide/slide-3.jpg";
import slide4 from "../assets/images/slide/slide-4.jpg";
import slide5 from "../assets/images/slide/slide-5.jpg";
import slide6 from "../assets/images/slide/slide-6.jpg";
import slide7 from "../assets/images/slide/slide-7.jpg";
// import slide8 from "../assets/images/slide/slide-8.jpg";
import Image from "next/image";

export default function MainBanner() {
  return (
    <div className="pt-16 border">
      <Carousel
        // autoPlay={false}
        interval={4000}
        swipe={true}
        indicators={false}
        animation="slide"
        stopAutoPlayOnHover={false}
        // className="h-full"
      >
        <div
          className="main__banner__box    "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide6.src})`,
          }}
        >
          <div className="main__banner__div">
            <div className="main__head__div">
              <span>
                <h2>مدار الدعوة الاسلامية</h2>
              </span>
            </div>
          </div>
        </div>
        <div
          className="main__banner__box    "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide1.src})`,
          }}
        >
          <div className="main__banner__div">
            <div className="main__head__div">
              <span>
                 <h1>MDI KARULAI</h1>
              </span>
            </div>
          </div>
        </div>

<div
          className="main__banner__box    "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide2.src})`,
          }}
        >
          <div className="main__banner__div">
            <div className="main__head__div">
              <span>
              <h2>مدار الدعوة الاسلامية</h2>
              </span>
            </div>
          </div>
        </div>


<div
          className="main__banner__box    "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide3.src})`,
          }}
        >
          <div className="main__banner__div">
            <div className="main__head__div">
              <span>
              <h2>
              Making A Bright Future
                </h2>
              </span>
            </div>
          </div>
        </div>
        <div
          className="main__banner__box    "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide4.src})`,
          }}
        >
          <div className="main__banner__div">
            <div className="main__head__div">
              <span>
              <h2>
              MDI KARULAI
                </h2>
              </span>
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
            <div className="main__head__div">
              <span>
              <h2>
            مدار الدعوة الاسلامية
                </h2>
              </span>
            </div>
          </div>
        </div>

<div
          className="main__banner__box    "
          style={{
            backgroundImage: `linear-gradient(180deg,rgba(40, 39, 39, 0.139),rgba(10, 10, 11, 0.646)),url(${slide5.src})`,
          }}
        >
          <div className="main__banner__div">
            <div className="main__head__div">
              <span>
              <h2>
              Making A Bright Future
                </h2>
              </span>
            </div>
          </div>
        </div>
 

     </Carousel>
    </div>
  );
}

 
