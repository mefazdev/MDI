import Image from "next/image";
import logo from "../assets/images/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FavoriteIcon from "@mui/icons-material/Favorite";
export default function Navbar() {
  const router = useRouter();

  const [collapse, setCollapse] = useState(false);
  const [about, setAbout] = useState(false);
  const [media, setMedia] = useState(false);
  const [social, setSocial] = useState(false);
  const [weDo, setWeDo] = useState(false);

  const changeNavBar = () => {
    if (window.scrollY >= 8) {
      setCollapse(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavBar);
  });
  const controlAbout = () => {
    setAbout(!about);
  };

  const controlMedia = () => {
    setMedia(!media);
  };
  return (
    <div className="navba  border   text-cyan-900">
      <div className="nav__content p-2 pl-5 md:pl-0 m-auto md:w-11/12">
        <div className="nav__container grid grid-cols-3 xl:grid-cols-2 ">
          <div className="">
            <div
              className="log  h-9 w-9 lg:w-12 lg:h-12"
              style={{ cursor: "pointer" }}
            >
              <Link href="/">
                <Image src={logo} />
              </Link>
            </div>
          </div>

          <div className="w-full col-span-2 xl:col-span-1">
            <div className="nav__item__row hidden lg:flex    justify-between">
              <span className="flex">
                <Link href="/">
                  <h6>Home</h6>
                </Link>
              </span>

              <span className="flex">
                <Link href="/About">
                  <h6>About</h6>
                </Link>
              </span>

              <span className="flex nav__item__span group cursor-pointer">
                <h6>Institutions</h6>
                <ArrowDropDownIcon id="nav__icon" />
                <ul className="dropdown-menu absolute hidden pt-2   group-hover:block  ">
                  <span className="development__head cursor-pointer group">
                    <Link href="/School">
                      <div
                        className={
                          router.pathname == "/Photos"
                            ? "active__dropdown py-2"
                            : "service__group__span py-2"
                        }
                      >
                        <li className=" px-4 block whitespace-no-wrap text-sm ">
                          MDI Public School
                        </li>
                      </div>
                    </Link>
                    <Link href="/Hadiya">
                      <div
                        className={
                          router.pathname == "/Photos"
                            ? "active__dropdown py-2"
                            : "service__group__span py-2"
                        }
                      >
                        <li className=" px-4 block whitespace-no-wrap text-sm ">
                          Hadiya Academy
                        </li>
                      </div>
                    </Link>

                    <Link href="/Orphanage">
                      <div
                        className={
                          router.pathname == "/Photos"
                            ? "active__dropdown py-2"
                            : "service__group__span py-2"
                        }
                      >
                        <li className=" px-4 block whitespace-no-wrap text-sm ">
                          Womens Orphanage & Destitute Home
                        </li>
                      </div>
                    </Link>
                    <Link href="/Zahrath">
                      <div
                        className={
                          router.pathname == "/Photos"
                            ? "active__dropdown py-2"
                            : "service__group__span py-2"
                        }
                      >
                        <li className=" px-4 block whitespace-no-wrap text-sm ">
                          Zahrathul Qur&apos;an
                        </li>
                      </div>
                    </Link>
                  </span>
                </ul>
              </span>
              <span className="flex nav__item__span group cursor-pointer">
                <h6>Media</h6>
                <ArrowDropDownIcon id="nav__icon" />
                <ul className="dropdown-menu absolute hidden   group-hover:block  ">
                  <span className="development__head cursor-pointer group">
                  <a href="https://www.youtube.com/@mdikarulai714"> <div className="pt-2">
                      <li className=" px-4 block whitespace-no-wrap text-sm ">
                        Youtube
                      </li>
                    </div>
                    </a>

                    <Link href="/Photos">
                      <div
                        className={
                          router.pathname == "/Photos"
                            ? "active__dropdown py-2"
                            : "service__group__span py-2"
                        }
                      >
                        <li className=" px-4 block whitespace-no-wrap text-sm ">
                          Photos
                        </li>
                      </div>
                    </Link>
                    <Link href="/Videos">
                      <div
                        className={
                          router.pathname == "/Video"
                            ? "active__dropdown py-2"
                            : "service__group__span py-2"
                        }
                      >
                        <li className=" px-4 block whitespace-no-wrap text-sm ">
                          Video Gallery
                        </li>
                      </div>
                    </Link>
                  </span>
                </ul>
              </span>

              <span className="flex">
                <Link href="/Contact">
                  <h6>Contact us</h6>
                </Link>
              </span>

              <Link href={'/Donate'}><button className="bg-cyan-800 rounded p-2 px-3 text-white">
                Donate
                <FavoriteIcon className="ml-1" />
              </button></Link>
              
            </div>

            <div className="float-right lg:hidden">
               
            <Link href={'/Donate'}><button className=" mr-4  p-0.5 text-cyan-800 px-3 border border-cyan-900 ">
               Give
                 
              </button></Link>
  
  <MenuIcon  style={{fontSize:'40px'}}
                onClick={() => setCollapse(!collapse)}
                
              />
  
            
            </div>
          </div>
        </div>
      </div>

      {/* <<<<<<<<< COLLAPSE>>>>>>>>>>>>>> */}

      {collapse ? (
        <div className="nav__collapse">
          <Link href="/">
            <div className="collapse_row">
              <p>Home</p>
            </div>
          </Link>
          <Link href="/About">
            <div className="collapse_row">
              <p>About</p>
            </div>
          </Link>
          <Link href="/Programmes">
            <div className="collapse_row">
              <p>Institutions</p>
            </div>
          </Link>

          <div className="collapse_row flex">
            <div className="flex" onClick={() => controlMedia()}>
              <p>Media</p>
              <ArrowRightIcon id="collapse__arrow" />
            </div>

            {media ? (
              <div className="collapse__collapse">
                <a href="https://www.youtube.com/@mdikarulai714">
                  <div className="collapse_collapse__row">
                    <p>Yotube</p>
                  </div>
                </a>

                <Link href="/Photos">
                  <div className="collapse_collapse__row">
                    <p>Photo Gallery</p>
                  </div>
                </Link>

               

                <Link href="/Videos">
                  <div className="collapse_collapse__row">
                    <p>Video Gallery</p>
                  </div>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>

          <Link href="/Contact">
            <div className="collapse_row">
              <p>Contact us</p>
            </div>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

{
  /* <a
              href="whatsapp://send?phone=+919605407078"
              data-action="share/whatsapp/share"
            > */
}
