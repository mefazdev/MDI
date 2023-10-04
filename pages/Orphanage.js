import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor-v2";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import OrphanageBanner from "@/components/OrphanageBanner";
import img1 from "../assets/images/orphanage/orph-1.jpg";
import img2 from "../assets/images/orphanage/orph-2.jpg";
import img3 from "../assets/images/orphanage/orph-3.jpg";

export default function Orphanage() {
  const [didViewCountUp, setState] = useState(false);
  const [more, setMore] = useState(false);


  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setState({ didViewCountUp: true });
    }
  };
  return (
    <div>
      <Navbar />

      {/* <div className="bg-cyan-900  pb-16 lg:pb-24   pt-20"> */}
      {/* <div className="px-4 md:px-0 md:w-11/12 m-auto">
          <p className="text-gray-100">Home / Womens Orphanage</p>
          <h1 className="text-center text-xl lg:text-3xl md:text-4xl text-white pt-10 md:pt-16 font-bold   ">
            MDI WOMENS ORPHANAGE & DESTITUTE HOME{" "}
          </h1>
        </div> */}

      <OrphanageBanner />
      {/* </div> */}

      <div className="content pt-7 md:pt-16 pb-7 md:pb-32">
        <div className="px-4 md:px-0 md:w-11/12 m-auto ">
          <div className=" grid lg:grid-cols-3  gap-6 ">
            <div className="lg:col-span-2 ">
              <h1 className=" text-lg lg:text-2xl text-cyan-900">
                MDI Womens Orphanage & Distitute Home
              </h1>

              <p className=" mt-2 lg:mt-4">
                {" "}
                Presently, MDI Destitute Home provides comfort to 58 girls and
                women those who are destitute and have been abandoned or
                exploited by society, community, family, relatives etc, where
                they are given all the basic necessities along with eliminating
                their miseries and bringing them up as best law abiding and god
                fearing citizen in the society. Besides basic necessities, MDI
                also takes care of their holistic growth by providing good
                education and healthcare facilities. It aims at securing a
                better life for the children and helping them to become self
                reliant through its work on education, vocational education,
                health and rehabilitation. MDI has also made sure that the
                children are provided with computer training, tailoring, basket
                weaving. art craft etc. The MDI also takes responsibility of
                getting the girls married off. It is our dream to have an ourown
                building and now it is under construction but the lack of
                sufficient funds is problem to us for we can&apos;t fulfill it
                yet. MDI works entirely independent and does not depend on any
                other external financial support. But if there are donors who
                wish to offer their support in the form of money or serve the
                children with a day meal, they whole heartedly accept it. We
                would appreciate it if our donors would provide us with material
                and supply needed for the completion of destitute home building
                rather than money.
              </p>
            </div>
            <div className="  bg-slate-200 p-3 h-fit lg:p-10 lg:mt-10   ">
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
                        <CountUp
                          start={0}
                          end={didViewCountUp ? 58 : 0}
                          duration={2}
                        />
                        +
                      </span>
                    </VisibilitySensor>{" "}
                    Enrolled Students{" "}
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
                        <CountUp
                          start={0}
                          end={didViewCountUp ? 250 : 0}
                          duration={2}
                        />
                        +
                      </span>
                    </VisibilitySensor>{" "}
                    Alumni
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 mt-10 m lg:mt-24">
            <div
              className="h-60"
              style={{
                backgroundImage: `url(${img1.src})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div
              className="h-60"
              style={{
                backgroundImage: `url(${img2.src})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="h-60"
              style={{
                backgroundImage: `url(${img3.src})`,

                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
