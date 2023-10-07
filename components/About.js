import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="m-auto  mt-10 px-4 md:px-0 md:w-11/12 ">
      <div className="home__subhead">
        <div className="home__subhead bg-cyan-800 ">
          <h3>About us</h3>
        </div>
      </div>
      <div className="home__about__content grid   gap-5 lg:gap-10 lg:grid-cols-3">
        {/* <div className="home__about__img"></div> */}
        <iframe
          className="h-52 lg:h-full"
          id="if"
          width={"100%"}
          // height="100%"
          src="https://www.youtube.com/embed/YxgOkTCVhFo?si=DnvPSLzib0HFobGt"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
           <div className="home__about__content__right lg:col-span-2">
          <p className="home__about__p text-gray-700">
            MDI (registered as Madaru Da&apos;awathil Islamiyya under the
            Societies Registration Act of 1860)is a unique religious ,socio
            cultural, educational and charitable organization with a laudable
            mission and vision..MDI situated in Karulai besides the reserve
            forest area of Nilambur Tehsil., Malappuram District of Kerala
            state..MDI was established in 1997as a non political, non
            profitable, and non-government Organization (NGO).MDI has over 12
            educational and other institutions under its auspices and has now
            transformed itself into a mass movement of smart learning. With 21
            years since its inception, has now grown enough to support and
            nourish numerous sections of humanity. From 25 cents of minimum land
            at its beginning, the campus spread over three acres of lush
            greenery and has State-of-the-Art Infrastructure facilities.
          </p>
          <Link href="/About">
            <button className="bg-cyan-800 hover:bg-cyan-700 ">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

{
  /* MDI (Madaru Da'wathil Islamiyya), an Islamic institution, has been
            operating in the eastern part of Nilambur sub-district in the
            Malappuram district of Kerala for the past two decades. Under the
            leadership of MDI, it has been actively involved in the fields of
            religious, physical, and technical education, primarily focusing on
            women's education and empowerment in the rural villages of eastern
            Nilambur.Under the leadership of MDI (Madaruddeen Institute), for
            the past 20 years, a remarkable service has been provided in the
            field of women's education and empowerment in the rural villages of
            eastern Nilambur. MDI's women's wing, known as "Vanitha Agathi
            Mandiram," has been rendering exceptional services in areas related
            to women's education, empowerment, and socio-economic development.
            In addition to that, MDI oversees the operation of the "Vanitha Arts
            & Hadiya Academy," which operates under its auspices, further
            contributing to the betterment of women in the region.. */
}
{
  /* We work to enable
students from backward sections to have the skill to do higher studies, start a business, engage
with the modern world and lead their community. Our goal is to empower the deprived sections
of society by developing young leaders. */
}
