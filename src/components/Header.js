import React from 'react'
import { NETFLIX_LOGO, USER_ICON } from '../utils/constant'
import {auth} from '../utils/firebase'
import {signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = ()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
      }).catch((error) => {
        navigate("/error");
      });
}
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className ="w-52" alt="netflix logo" src = {NETFLIX_LOGO}  />
        {user &&
        <div className="flex p-4"> 
          <img className = "w-12 h-12" alt ="usericon" src={user && user.photoURL} /> 
          <button className='font-bold text-white px-2' onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header