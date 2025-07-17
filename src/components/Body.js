import React from 'react'
import Login from './Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
 import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser,removeUser } from '../utils/userslice';

const Body = () => {
  const dispatch=useDispatch();

    const approuter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ]);
  
  return (
    <div><RouterProvider router={approuter}/></div>
  );
};

export default Body