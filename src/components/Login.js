import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkvalidate } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userslice';
import { BG_LOGIN } from '../utils/Constants';

const Login = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [sigin, setsignin] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const fullname = useRef(null);
    const [message, setmessage] = useState(null);

    const togglesign = () => {
        setsignin(!sigin);
    };

    const handleclick = () => {
        const name = !sigin ? fullname?.current?.value : "";
        const errorMessage = checkvalidate(email.current.value, password.current.value, name);
        setmessage(errorMessage);

        if (errorMessage === null) {
            if (!sigin) {
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        updateProfile(auth.currentUser, {
                        displayName: fullname.current.value
                        }).then(() => {
                       // Profile updated!
                      dispatch(addUser(auth.currentUser));
                      }).catch((error) => {
                     // An error occurred
                     // ...
                    });
                        navigate("/");
                        // console.log("User signed up:", userCredential.user);
                    })
                    .catch((error) => {
                        setmessage(`${error.code} - ${error.message}`);
                    });
            } else {
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // console.log("User signed in:", userCredential.user);
                        navigate("/browse");
                    })
                    .catch((error) => {
                        setmessage(`${error.code} - ${error.message}`);
                    });
            }
        }
    };

    return (
        <div className="relative h-screen w-screen">
            <Header />

            {/* Fullscreen background image */}
            <div className="fixed inset-0 -z-10">
                <img
                    src={BG_LOGIN}
                    alt="loginpage"
                    className="h-screen object-cover md:h-auto"
                />
            </div>

            {/* Centered login form */}
            <form
                onSubmit={(e) => e.preventDefault()}
                className="absolute w-11/12 max-w-md bg-black my-28 mx-auto right-0 left-0 p-12 text-white bg-opacity-80 rounded-lg"
            >
                <h1 className="font-bold text-3xl mb-6">{sigin ? "Sign In" : "Sign Up"}</h1>

                {!sigin && (
                    <input
                        ref={fullname}
                        className="p-4 my-3 w-full bg-gray-500 rounded"
                        type="text"
                        placeholder="Full Name"
                    />
                )}

                <input
                    ref={email}
                    className="p-4 my-3 w-full bg-gray-500 rounded"
                    type="email"
                    placeholder="Email Address"
                />

                <input
                    ref={password}
                    className="p-4 my-3 w-full bg-gray-500 rounded"
                    type="password"
                    placeholder="Password"
                />

                {/* Error message - allows wrapping without breaking layout */}
                {message && (
                    <p className="font-bold text-lg text-red-500 break-words my-3">{message}</p>
                )}

                <button
                    onClick={handleclick}
                    className="p-4 my-4 w-full rounded-lg bg-red-600 hover:bg-red-700 transition"
                >
                    {sigin ? "Sign In" : "Sign Up"}
                </button>

                {sigin ? (
                    <p>
                        New to Netflix?{" "}
                        <span
                            className="cursor-pointer hover:underline"
                            onClick={togglesign}
                        >
                            Sign up now.
                        </span>
                    </p>
                ) : (
                    <p>
                        Already registered?{" "}
                        <span
                            className="cursor-pointer hover:underline"
                            onClick={togglesign}
                        >
                            Sign In now.
                        </span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default Login;
