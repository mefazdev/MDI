
import Carousel from "react-material-ui-carousel";
// import camp1 from '../assets/img/camp-1.jpg'
// import camp2 from '../assets/img/camp-2.jpg'
// import camp3 from '../assets/img/camp-7.jpg'
// import garden from '../assets/img/garden.jpeg'
export default function MainBanner() {
  return (
    <div >

      <div className="bg-cyan-800  py-24  lg:py-36   w-full justify-center">

   <Carousel
        // autoPlay={true}
        interval={4000}
          duration={2000}
        swipe={true}
        indicators={false}
        animation="slide"
        stopAutoPlayOnHover={false}
      >
           
          <div className="main__banner__div ">
            

            <div className="main__head__div">
              <span>
              
              <h1>MDI KARULAI</h1>
              </span>
            </div>
          </div>
          <div className="main__banner__div">
            

            <div className="main__head__div">
              <span>
              
              <h2>
              Making A Bright Future
                </h2>
              </span>
            </div>
          </div>
          <div className="main__banner__div">
            

            <div className="main__head__div">
              <span>
              
              <h2>Enrich The Knoweldge</h2>
              </span>
            </div>
          </div>
        
        
         
 
      </Carousel>  
      </div>
   
    </div>
  );
}