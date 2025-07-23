import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser, addUser } from '../utils/userslice';
import { addtogglefeature } from '../utils/Gptslice';
import { LANG_SELECT, LOGO_URL } from '../utils/Constants';
import { changelang } from '../utils/configslice';

const Header = () => {
  const user = useSelector((store) => store.user);
  const gptsearchselector = useSelector((store) => store?.gpt?.togglefeature);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, []);

  const handlesignout = () => {
    signOut(auth)
      .then(() => dispatch(removeUser()))
      .catch((error) => console.error(error));
  };

  const handlegpt = () => {
    dispatch(addtogglefeature());
  };

  const handlechangelanguage = (e) => {
    dispatch(changelang(e.target.value));
  };

  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-gradient-to-b from-black px-4 sm:px-6 py-3">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 w-full">
        <img src={LOGO_URL} alt="Netflix Logo" className="w-40 sm:w-44" />

        {user && (
          <div className="flex flex-wrap md:flex-nowrap gap-[1/2] md:gap-2 items-center w-screen ">
            <div className='flex gap-3 justify-end  w-full md:w-[90%] justify-center md:justify-end'>
              <div className='flex gap-3'>
                         {gptsearchselector && (
              <select
                className="p-2 rounded-md text-white bg-gray-600"
                onChange={handlechangelanguage}
              >
                {LANG_SELECT.map((lan) => (
                  <option key={lan.identifier} value={lan.identifier}>
                    {lan.name}
                  </option>
                ))}
              </select>
            )}

            <button
              onClick={handlegpt}
              className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition"
            >
              {gptsearchselector ? 'Homepage' : 'GPT Search'}
            </button>

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="User Avatar"
              className="w-9 h-9 rounded-full"
            />

            <button
              onClick={handlesignout}
              className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition"
            >
              Sign Out
            </button>
              </div>
    

            </div>
            
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
