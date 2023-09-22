import About from "@/components/About";
import Counting from "@/components/Counting";
import Footer from "@/components/Footer";
import Instituions from "@/components/Instituions";
import MainBanner from "@/components/MainBanner";
import Message from "@/components/Message";
import Navbar from "@/components/Navbar";
import News from "@/components/News";

export default function Home() {
  return (
   <div>
      <Navbar/>
    
   
<div className="content">
<MainBanner/>

<Message/>
<About/>



<Instituions/>


<Counting/>

<News/>

</div>
   
 <Footer/>
   </div>
      

      
   
  )
}