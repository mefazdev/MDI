import About from "@/components/About";
import Counting from "@/components/Counting";
import Footer from "@/components/Footer";
import Instituions from "@/components/Instituions";
import MainBanner from "@/components/MainBanner";
import Message from "@/components/Message";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Head from "next/head";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Events from "@/components/Events";
export default function Home() {
  return (
    <div>
      <Head>
        <title>MDI KARULAI</title>
        <meta
          name="description"
          content=" MDI (registered as Madaru Da'awathil Islamiyya under the Societies
            Registration Act of 1860)is a unique religious ,socio cultural,
            educational and charitable organization with a laudable mission and
            vision..MDI situated in Karulai besides the reserve forest area of
            Nilambur Tehsil., Malappuram District of Kerala state..MDI was
            established in 1997as a non political, non profitable, and
            non-government Organization (NGO).MDI has over 12 educational and
            other institutions under its auspices and has now transformed itself
            into a mass movement of smart learning. With 21 years since its
            inception, has now grown enough to support and nourish numerous
            sections of humanity. From 25 cents of minimum land at its
            beginning, the campus spread over three acres of lush greenery and
            has State-of-the-Art Infrastructure facilities."
        />
        <meta property="og:title" content="MDI Karulai" key="title" />
        <link rel="canonical" href="https://www.mdikarulai.in" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className="content">
        <MainBanner />

        <div className="home__social text-cyan-90 text-white ">
          <a href="https://www.facebook.com/mdischoolkarulai?mibextid=LQQJ4d" >
            <div className=" social__circle bg-yellow-600 rounded-full hover:animate-jump" >
              <FacebookIcon   />
            </div>
          </a>

          <a href="https://www.instagram.com/madaru_dawathil_islamiyya_mdi/?igshid=NzZlODBkYWE4Ng%3D%3D">
            <div className="social__circle bg-yellow-600 rounded-full hover:animate-jump">
              <InstagramIcon id="social__ic" />
            </div>
          </a>

          <a href="https://www.youtube.com/@mdikarulai714">
            <div className="social__circle bg-yellow-600 rounded-full hover:animate-jump">
              <YouTubeIcon id="social__ic" />
            </div>
          </a>
        </div>
        {/* <About />
        <Message /> */}
       

        <Instituions />

<Events/>
        {/* <Counting/> */}

        {/* <News /> */}
      </div>

      <Footer />
    </div>
  );
}
