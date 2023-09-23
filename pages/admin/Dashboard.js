import React from "react";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
 
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  doc,
  serverTimestamp,
  deleteDoc,
} from "@firebase/firestore";
import CloseIcon from "@mui/icons-material/Close";
// import { parseCookies } from "./api/parseCookies";
import { useRouter } from "next/router";
import { auth, db } from "@/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
// import Cookies from "js-cookie";
export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState("");
  const [social, setSocial] = useState([]);
  const [user,setUser] = useState({})
const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)
           if(!currentUser){
            router.push('/admin')
           }
        });
      }, []);

      const logout = () => {
        signOut(auth)
          .then(() => {
            router.push("/admin");
        
     
          })
          .catch((error) => {
            console.log(error);
       
          });
      };
 
  const addLink = async () => {
    const docRef = await addDoc(collection(db, "link"), {
      link: link,
      timestamp: serverTimestamp(),
    });

    setLink("");
    setOpen(false);
  };

  const fetchData = async () => {
    const q = await query(collection(db, "link"), orderBy("timestamp", "desc"));
    onSnapshot(q, (snapshot) => {
      setSocial(snapshot.docs.map((doc) => doc));
    });
  };
  const deletItem = async (id) => {
    await deleteDoc(doc(db, "link", id));
  };
  useEffect(() => {
    fetchData();
  }, []);
 
  return (
    <>
    {user ? <div>
      
      <div className="admin__na bg-cyan-950">
        <div className="px-4 md:px-0 md:w-11/12 m-auto  py-4 flex justify-between">
        <div></div>
        <div className="admin__add ">
          <button className="bg-white p-1 px-8 rounded-sm mr-5" onClick={() => setOpen(!open)}>Add Post</button>
          <button onClick={logout} className="bg-red-600 p-1 px-6 rounded-sm text-white"   id="logout">
            Logout
          </button>
        </div>
        </div>
      
      </div>

      <div className="admin__content px-4 md:px-0 md:w-11/12 m-auto pt-16 ">
        <div className="admin__row grid lg:grid-cols-4">
          {social.map((link, index) => {
            return (
              <div key={index} className="w-fit m-auto">
                <iframe
                  src={link.data().link}
                  style={{ border: "none", overflow: "hidden" }}
                  width="200"
                  height='100%'
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
                <button
                  className="bg-red-700 text-white p-1 w-full mt-2"
                  value={link.id}
                  onClick={(e) => deletItem(e.target.value)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <Modal open={open}>
        <div className="outline-none pb-16  w-4/12 bg-lime-100 m-auto mt-36 p-7 rounded">
          <CloseIcon className="float-right text-orange-600" onClick={() => setOpen(false)} />
          <div className="mt-5 ">
            <p>Past the link</p>
            <input className="mt-2 w-full outline-none border pl-2 p-2 " autoFocus  value={link} onChange={(e) => setLink(e.target.value)} />
          </div>
          <button className="bg-emerald-700  text-white p-1 px-7 mt-3 rounded-sm float-right" onClick={addLink}>Add</button>
        </div>
      </Modal>
   
</div> : ''}
    </>
    
  );
}

// Dashboard.getInitialProps = ({ req }) => {
//   const cookies = parseCookies(req);

//   return {
//     admin: cookies.Admin,
//   };
// };