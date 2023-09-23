import Link from "next/link";
import React, { useEffect, useState } from "react";
import {  collection, getDocs, query } from "firebase/firestore";
import { db } from "@/firebase";
export default function News() {

  const [link, setLink] = useState([]);
  const fetchData = async () => {
    const q = await query(collection(db, "link"),query("timestamp", "desc"));
    const data = await getDocs(q);
    setLink(data.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="embed   mt-14 pb-44 px-4 md:px-0 md:w-11/12 m-auto">
        <div className="home__subhead bg-cyan-800">
          <h3>What&apos;s new</h3>
        </div>
        <div className=" mt-5 grid gap-8  lg:grid-cols-3 xl:grid-cols-4">
        {link.map((data, index) => {
          if (index < 3) {
            return (
              <iframe
              key={index}
                src={data.link}
                id={index}
               height={400}
                allowFullScreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            );
          }
        })}
          
           
        </div>
      </div>
    </div>
  );
}
