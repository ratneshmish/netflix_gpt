import React from 'react'
import { auth } from '../utils/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { removeUser,addUser } from '../utils/userslice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { LOGO_URL } from '../utils/Constants';
import { addtogglefeature } from '../utils/Gptslice';
import { LANG_SELECT } from '../utils/Constants';
import { changelang } from '../utils/configslice';
const Header = () => {
  const user=useSelector((store)=>store.user);
  const gptsearchselector=useSelector((store)=>store?.gpt?.togglefeature);
  const dispatch=useDispatch();
  const navigate=useNavigate();
 const handlegpt=()=>{
    dispatch(addtogglefeature());
 }
 const handlechangelanguage=(e)=>{
 dispatch(changelang(e.target.value));
 }
  useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const {uid,email,displayName} = user;
   dispatch( addUser({uid:uid,email:email,displayName:displayName}));
navigate("/browse");
    // ...
  } else {
    // User is signed out
    // ...
    navigate("/");
  dispatch(removeUser());

  }
});
 return()=>unsubscribe();
  },[])
  const handlesignout=()=>{
  signOut(auth).then(() => {
  // Sign-out successful.
  dispatch(removeUser());
  

}).catch((error) => {
  // An error happened.
});
  }
  return (
    <div className=' w-screen absolute bg-gradient-to-b from-black px-8 py-2 z-20' >
      <div className='flex justify-between flex-col md:flex-row'>
      <img className='w-44 mx-auto md:mx-0'
      src={LOGO_URL}/>
 {user && <div className='flex p-2 my-1 gap-1'>
      <div className='flex gap-2 items-center'>
        {gptsearchselector && <select className='m-2 p-2 rounded-lg text-white bg-gray-400 font-serif'
        onChange={handlechangelanguage}>
       {LANG_SELECT.map((lan) => (
    <option key={lan.identifier} value={lan.identifier}>
      {lan.name}
    </option>
  ))}
        </select>}
        <button className='py-2 px-4 bg-purple-800 text-white rounded-lg font-serif' onClick={handlegpt}>{gptsearchselector?"Homepage":"GPT Search"}</button>
       <img 
          className='w-9 h-9' 
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
          alt="User Avatar"
        />
        
        <button className='bg-red-600 bg-opacity-50 text-white  p-2 rounded font-bold font-serif hover:underline ' onClick={handlesignout}>Sign Out</button>
        </div>
        </div>}
        </div>
   
    </div>
  )
}

export default Header