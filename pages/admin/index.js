import { auth } from '@/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function index() {
const router = useRouter()
    const [username,setUsername]  = useState('')
    const [password,setPasword] = useState('')

    const signIn = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, username, password);
         
        router.push({
          pathname: "/admin/Dashboard",
        });
      };
   
  return (
      <div className='bg-cyan-800 h-screen pt-28'
    style={{fontFamily:'Nunito'}}
    >

        <div className='bg-white w-3/12 m-auto p-5 rounded '>
              <p className='text-center text-lg'>Admin Login</p>
              <p className='mt-4'>Username</p>
<input onChange={(e)=>setUsername(e.target.value)} value={username} className='border w-full  mt-1 rounded pl-2 p-1 ' placeholder='Username'/>
<p className='mt-4'>Password</p>
<input onChange={(e)=>setPasword(e.target.value) } value={password} className='border w-full  mt-1 rounded pl-2 p-1 ' placeholder='Password' type='passwod'/>
       
       <button onClick={signIn} className='bg-cyan-800 p-2  px-5 w-full text-white  rounded mt-3'>Login</button>
        </div>
    </div> 
  
  )
}


// const signUp = (event) => {
//     event.preventDefault();
//     createUserWithEmailAndPassword( auth,username, password)
//       .then(() => {
       
//        alert('it ok')
//       })
//       .catch((error) => alert(error.message));

//   };