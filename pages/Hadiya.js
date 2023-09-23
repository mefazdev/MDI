import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor-v2";

export default function Hadiya() {

  const [didViewCountUp, setState] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setState({ didViewCountUp: true });
    }
  };
  return (
    <div>
      <Navbar />

      <div className="bg-cyan-900 pb-16 md:h-72 pt-20 ">
        <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / Hadiya Academy</p>
          <h1 className="text-center text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
            WOMENS ARTS & HADIYA ACADEMY
          </h1>
        </div>
      </div>

      <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div className="px-4 md:px-0 md:w-11/12 m-auto bg-whit p-1  grid lg:grid-cols-3  gap-6 ">
          <div className="lg:col-span-2 ">
            <h1 className=" text-xl lg:text-2xl text-cyan-900">
              Womens Arts & Hadiya Academy
            </h1>

            <p className=" mt-2 lg:mt-4">
              MDI adds another golden feather to girls education with its
              exemplary academic performance and amazing features. Hadiya is a
              specially designed curriculum for women, who completed their class
              10th, with Islamic and secular sciences to mould a steadfast women
              community with thoroughly designed Islamic worldview. Aiming to
              with the thorough understanding of Islamic knowledge and
              tradition, the programme includes core Islamic subjects such
              sharia, theology, Qur&apos;anic exegesis (Tafseer), and Islamic
              Ideology along with some important skill-developing, necessary to
              serve their family with excellent expertise. The students enjoy
              the opportunity to pursue their higher secondary studies of their
              choice. In addition to imparting sacred and profound knowledge,
              the curriculum, and the environment within which it is taught have
              been set up to produce a band of female scholars, their life
              marked by tradition, culture, spirituality, humanity and
              responsibility Presently, as many as 123 girls have been enrolled
              in Hadiya academy.
            </p>
          </div>

          <div className="hadiya__im bg-slate-200 p-3 h-fit lg:p-10 lg:mt-10   ">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-white   flex justify-center    items-center">
                <HowToRegOutlinedIcon
                  className="text-cyan-800"
                  style={{ fontSize: "40px" }}
                />
              </div>
              <div className="ml-3 ">
                <p className="text-cyan-800   text-xl">
                <VisibilitySensor
            scrollCheck={true}
            onChange={onVisibilityChange}
            delayedCall
          >
           <span className="font-bold">
              <CountUp start={0} end={didViewCountUp ? 108 : 0} duration={2} />
              +
            </span>
          </VisibilitySensor> Enrolled Students{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center mt-3 lg:mt-5">
              <div className="h-12 w-12 rounded-full bg-white   flex justify-center    items-center">
                <SchoolOutlinedIcon
                  className="text-cyan-800"
                  style={{ fontSize: "40px" }}
                />
              </div>
              <div className="ml-3 ">
                <p className="text-cyan-800   text-xl">
                <VisibilitySensor
            scrollCheck={true}
            onChange={onVisibilityChange}
            delayedCall
          >
           <span className="font-bold">
              <CountUp start={0} end={didViewCountUp ? 2000 : 0} duration={2} />
              +
            </span>
          </VisibilitySensor> Alumni
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
