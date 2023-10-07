import Link from "next/link";
import React from "react";

export default function Instituions() {
  return (
    <div className="h__prgm   mt-10 lg:mt-20  md:px-0 md:w-11/12 m-auto  ">
      <h3 className="text-cyan-900 font-extrabold  text-2xl text-center underline underline-offset-8">
        OUR INSTITUTIONS
      </h3>

      <div className="prgm__content__row px-4 lg:px-0 lg:w-11/12   m-auto mt-10 gap-10 grid md:grid-cols-2 xl:grid-cols-3 ">
        <div className="bg-zinc-100 mt-10   px-8 pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
          <Link href="/Orphanage">
            <div>
              <div className="orphanage__box h-52 -mt-10"></div>
              <div className="mt-7">
                <h3 className="text-cyan-900 font-bold text-lg">
                  Womens Orphanage & Destitute home
                </h3>

                <p className="mt-1">
                  Presently, MDI Destitute Home provides comfort to 95 girls and
                  women those who are destitute and have been abandoned or
                  exploited by society, community, family, relatives etc
                </p>
              </div>

              <button className=" mt-3   flex m-auto   bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                Know More
              </button>
            </div>
          </Link>
        </div>
        <div className="bg-zinc-100 mt-10   px-8 pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
          <Link href="/Hadiya">
            <div>
              <div className="hadiya__box h-52 -mt-10"></div>
              <div className="mt-7">
                <h3 className="text-cyan-900 font-bold text-lg">
                  Womens Arts & Hadiya Academy
                </h3>

                <p className="mt-1">
                  MDI women&apos;s college was inaugurated by Karulai Grama
                  panchayath President in Pallippadi campus and opened its gates
                  for education in June 2003, with 57 students.
                </p>
              </div>

              <button className="mt-3  flex m-auto bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                Know More
              </button>
            </div>
          </Link>
        </div>
        <div className="bg-zinc-100 mt-10   px-8 pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
          <Link href="/School">
            <div>
              <div className="school__box h-52 -mt-10"></div>
              <div className="mt-7">
                <h3 className="text-cyan-900 font-bold text-lg">
                  Englsih School (CBSE)
                </h3>

                <p className="mt-1">
                  MDI Public School adds another golden feather to the
                  educational cap of Nilambur constituency with its exemplary
                  academic performance and amazing results.
                </p>
              </div>

              <button className="mt-3  flex m-auto bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                Know More
              </button>
            </div>
          </Link>
        </div>

        <div className="bg-zinc-100  mt-10  px-8 pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
          <Link href="/Zahrath">
            <div>
              <div className="zahra__box h-52 -mt-10"></div>
              <div className="mt-7">
                <h3 className="text-cyan-900 font-bold text-lg">
                  Zahra Preschool
                </h3>

                <p className="mt-1">
                  Zahratul Qur&apos;an Preschool is constituted with an aim of
                  helping future generation mould their lives according to
                  Islamic values enhanced through child friendly mentoring.
                </p>
              </div>

              <button className="mt-3  flex m-auto bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                Know More
              </button>
            </div>
          </Link>
        </div>
        <div className="bg-zinc-100 mt-10  px-8 pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
          <Link href="/Madrassa">
            <div>
              <div className="madrassa__box h-52 -mt-10"></div>
              <div className="mt-7">
                <h3 className="text-cyan-900 font-bold text-lg">
                  Masjids & Madrasas
                </h3>

                <p className="mt-1">
                  We have already constructed number of Masjids in the different
                  area of Karulai. We also started Madrassas alongside of
                  Masjids to have an everlasting solution for the spiritual and
                  moral education. 
                </p>
              </div>

              <button className="mt-3  flex m-auto bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                Know More
              </button>
            </div>
          </Link>
        </div>
        <div className="bg-zinc-100 mt-10  px-8 pb-4 border-b-4 border-cyan-700 hover:scale-105 transform transition-transform duration-300 ease-in-out hover:bg-white hover:shadow-xl">
          <Link href="/Homecare">
            <div>
              <div className="care__box h-52 -mt-10"></div>
              <div className="mt-7">
                <h3 className="text-cyan-900 font-bold text-lg">Home Care</h3>

                <p className="mt-1">
                  {/* Zahratul Qur'an Preschool is constituted with an aim of helping future generation mould their lives according to Islamic values enhanced through child friendly mentoring.  */}
                </p>
              </div>

              <button className="mt-3  flex m-auto bg-yellow-600 text-white p-1.5 px-5 rounded-sm">
                Know More
              </button>
            </div>
          </Link>
        </div>

        {/* <Link href="/Orphanage">
            <div className="orphanage__box hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <div className="prgm__row__caption flex justify-between px-2">
                <h3> Womens Orphanage & Destitute home</h3>
                <p className="text-gray-300 text-sm">Know More</p>
              </div>
            </div>
          </Link>{" "}
          <Link href="/Hadiya">
            <div className="hadiya__box hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <div className="prgm__row__caption flex justify-between px-2">
                <h3>Womens Arts & Hadiya Academi</h3>
                <p className="text-gray-300 text-sm">Know More</p>
              </div>
            </div>
          </Link>
          <Link href="/School">
            <div className="school__box hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <div className="prgm__row__caption flex justify-between px-2">
                <h3>Englsih School (CBSE)</h3>
                <p className="text-gray-300 text-sm ">Know More</p>
              </div>
            </div>
          </Link>
          <Link href="/Zahrath">
            <div className="zahra__box hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <div className="prgm__row__caption flex justify-between px-2">
                <h3> Zahrathul Qur&apos;an </h3>
                <p className="text-gray-300 text-sm">Know More</p>
              </div>
            </div>
          </Link>
          <Link href="/Homecare">
            <div className="care__box hover:scale-105 transform transition-transform duration-300 ease-in-out">
              <div className="prgm__row__caption flex justify-between px-2">
                <h3>Home Care</h3>
                <p className="text-gray-300 text-sm">Know More</p>
              </div>
            </div>
          </Link> */}
      </div>
    </div>
  );
}
