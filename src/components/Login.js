import React, { useState } from 'react'
import Header from './Header'
import { NETFLIX_BACKGROUND_LOGO } from '../utils/constant'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm =() =>{
    setIsSignInForm(!isSignInForm);
  }  
  return (
    <div><Header />
    <div className="absolute">
        <img className="w-screen h-screen object-cover" alt="netflix background logo" src = {NETFLIX_BACKGROUND_LOGO}  />
    </div>
    <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white"> 
    <h1 className="font-bold text-3xl p-2"> {isSignInForm ?  "Sign In":  "Sign Up"}</h1>
        {!isSignInForm &&<input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700"/>}
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
        <button className="p-4 my-4 bg-red-600 w-full" onClick={toggleSignInForm}>{isSignInForm ?  "Sign In":  "Sign Up"}</button>
        <div> {isSignInForm ?  "New to Netflix ? Sign Up Now":  "Already registered ? Sign In Now"} </div>
    </form>
    
    
    </div>
  )
}

export default Login