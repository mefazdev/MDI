import React, { useState } from "react";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor-v2";
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
export default function Counting() {
  const [didViewCountUp, setState] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setState({ didViewCountUp: true });
    }
  };
  return (
    <div className="px-4 md:px-0 md:w-11/12 m-auto   mt-11">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-cyan-900  p-8 text-white hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <div className="h-16 w-16 rounded-full bg-white m-auto flex justify-center    items-center">
            <HowToRegOutlinedIcon
              className="text-cyan-800"
              style={{ fontSize: "40px" }}
            />
          </div>
          <VisibilitySensor
            scrollCheck={true}
            onChange={onVisibilityChange}
            delayedCall
          >
            <h4 className="text-center text-4xl font-semibold mt-3">
              <CountUp start={0} end={didViewCountUp ? 8400 : 0} duration={2} />
              +
            </h4>
          </VisibilitySensor>
          {/* <h4 className="text-center text-4xl font-semibold">8600</h4> */}
          <h5 className="text-center text-lg">Enrolled Students</h5>
        </div>
        <div className="bg-cyan-900  p-8 text-white hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <div className="h-16 w-16 rounded-full bg-white m-auto flex justify-center    items-center">
            <SchoolOutlinedIcon
              className="text-cyan-800"
              style={{ fontSize: "40px" }}
            />
          </div>
          <VisibilitySensor
            scrollCheck={true}
            onChange={onVisibilityChange}
            delayedCall
          >
            <h4 className="text-center text-4xl font-semibold mt-3">
              <CountUp start={0} end={didViewCountUp ? 1400 : 0} duration={2} />
              +
            </h4>
          </VisibilitySensor>
          {/* <h4 className="text-center text-4xl font-semibold">8600</h4> */}
          <h5 className="text-center text-lg">Alumni</h5>
        </div>

        <div className="bg-cyan-900  p-8 text-white hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <div className="h-16 w-16 rounded-full bg-white m-auto flex justify-center    items-center">
            <NoteAltOutlinedIcon
              className="text-cyan-800"
              style={{ fontSize: "40px" }}
            />
          </div>
          <VisibilitySensor
            scrollCheck={true}
            onChange={onVisibilityChange}
            delayedCall
          >
            <h4 className="text-center text-4xl font-semibold mt-3">
              <CountUp start={0} end={didViewCountUp ? 120 : 0} duration={2} />
              +
            </h4>
          </VisibilitySensor>
          {/* <h4 className="text-center text-4xl font-semibold">8600</h4> */}
          <h5 className="text-center text-lg">Academic Staffs</h5>
        </div>
        <div className="bg-cyan-900  p-8 text-white hover:scale-105 transform transition-transform duration-300 ease-in-out">
          <div className="h-16 w-16 rounded-full bg-white m-auto flex justify-center    items-center">
            <GroupOutlinedIcon
              className="text-cyan-800"
              style={{ fontSize: "40px" }}
            />
          </div>
          <VisibilitySensor
            scrollCheck={true}
            onChange={onVisibilityChange}
            delayedCall
          >
            <h4 className="text-center text-4xl font-semibold mt-3">
              <CountUp start={0} end={didViewCountUp ? 50 : 0} duration={2} />
              +
            </h4>
          </VisibilitySensor>
          {/* <h4 className="text-center text-4xl font-semibold">8600</h4> */}
          <h5 className="text-center text-lg">Non Academic  Staffs</h5>
        </div>
      </div>
    </div>
  );
}
