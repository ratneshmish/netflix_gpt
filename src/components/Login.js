import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkvalidate } from '../utils/validate';
import { auth } from '../utils/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userslice';
import { BG_LOGIN } from '../utils/Constants';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sigin, setsignin] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);
  const [message, setmessage] = useState(null);

  const togglesign = () => setsignin(!sigin);

  const handleclick = () => {
    const name = !sigin ? fullname?.current?.value : '';
    const errorMessage = checkvalidate(email.current.value, password.current.value, name);
    setmessage(errorMessage);

    if (errorMessage === null) {
      if (!sigin) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then(() => {
            updateProfile(auth.currentUser, {
              displayName: fullname.current.value,
            }).then(() => {
              dispatch(addUser(auth.currentUser));
            });
            navigate('/');
          })
          .catch((error) => {
            setmessage(`${error.code} - ${error.message}`);
          });
      } else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then(() => {
            navigate('/browse');
          })
          .catch((error) => {
            setmessage(`${error.code} - ${error.message}`);
          });
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      <Header />

      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          src={BG_LOGIN}
          alt="loginpage"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Form Container */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full sm:w-3/4 md:max-w-md bg-black/10 backdrop-blur-md border border-white/30 border-solid shadow-xl text-white p-6 sm:p-8 md:p-10 rounded-2xl"
        >
          <h1 className="font-bold text-2xl sm:text-3xl mb-6 text-black">
            {sigin ? 'Sign In' : 'Sign Up'}
          </h1>

          {!sigin && (
            <input
              ref={fullname}
              className="p-3 sm:p-4 my-2 w-full bg-white/20 text-white placeholder-black rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            ref={email}
            className="p-3 sm:p-4 my-2 w-full bg-white/20 text-white placeholder-black rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
            type="email"
            placeholder="Email Address"
          />

          <input
            ref={password}
            className="p-3 sm:p-4 my-2 w-full bg-white/20 text-white placeholder-black rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
            type="password"
            placeholder="Password"
          />

          {message && (
            <p className="text-sm sm:text-base text-red-400 font-medium my-3 break-words">
              {message}
            </p>
          )}

          <button
            onClick={handleclick}
            className="p-3 sm:p-4 my-4 w-full bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all"
          >
            {sigin ? 'Sign In' : 'Sign Up'}
          </button>

          <p className="text-sm sm:text-base text-white text-center">
            {sigin ? 'New to Netflix?' : 'Already registered?'}{' '}
            <span
              className="font-semibold cursor-pointer hover:underline"
              onClick={togglesign}
            >
              {sigin ? 'Sign up now.' : 'Sign In now.'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
