import React, { useEffect } from 'react'
import { NETFLIX_LOGO, SUPPORTED_LANGUAGE } from '../utils/constant'
import {auth} from '../utils/firebase'
import {onAuthStateChanged, signOut} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSilce'
import { toggleGptSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'
import { addMovieDetails } from '../utils/movieSlice'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const gptShow = useSelector(store => store.gpt?.showGptSearch);
  
  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid:uid, email: email, displayName:displayName, photoURL:photoURL}));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
      //unsubscribe when component unmount
      return () => unsubscribe();
  }, []);
  
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
      }).catch((error) => {
        navigate("/error");
      });
  }
  const handleGptSearchClick = ()=>{
    dispatch(addMovieDetails(null));
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange =(e) =>{
    dispatch(changeLanguage(e.target.value));
  }
  const handleImageClick =(e) =>{
    dispatch(addMovieDetails(null));
    navigate("/browse");
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className ="w-52 mx-auto md:mx-0 cursor-pointer" alt="netflix logo" src = {NETFLIX_LOGO} onClick={handleImageClick} />
        {user &&
        <div className="flex p-4"> 
        {gptShow && <select className="py-2 px-2 mx-2 mb-2 bg-blue-500 text-white" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGE.map(option => <option key ={option.identifier} value ={option.identifier}>{option.name}</option>)}
        </select>}
        <button className="py-2 px-4 mx-4 mb-2 bg-red-500 text-white" onClick={handleGptSearchClick}>{gptShow?"Home Page" : "GPT Search"}</button>
          <img className = "w-12 h-12 md:block" alt ="usericon" src={user && user.photoURL} /> 
          <button className='font-bold text-white px-2' onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header