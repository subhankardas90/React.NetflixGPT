import React, { useRef, useState} from 'react'
import Header from './Header'
import { NETFLIX_BACKGROUND_LOGO, PHOTO_URL } from '../utils/constant'
import { checkValidSignInData, checkValidSignUpData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSilce';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef("");
  const dispatch = useDispatch();

  const toggleSignInForm =() =>{
    setIsSignInForm(!isSignInForm);
  }  
  const handleButtonClick =() =>{
    //validation
    const message = isSignInForm ? checkValidSignInData(email.current.value, password.current.value) 
        : checkValidSignUpData(email.current.value, password.current.value, name.current.value, isSignInForm)
    setErrorMessage(message);
    if(message)
        return; 
    if(!isSignInForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            
            updateProfile(auth.currentUser, {
                displayName: name.current.value, photoURL: PHOTO_URL
              }).then(() => {
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid, email: email, displayName:displayName, photoURL:photoURL}))
              }).catch((error) => {
                setErrorMessage(error.message);
              });
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode +":"+ errorMessage);
            // ..
        });
    }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +":"+ errorMessage);
        });
    }


  }
  return (
    <div><Header />
    <div className="absolute">
        <img className="w-screen h-screen object-cover" alt="netflix background logo" src = {NETFLIX_BACKGROUND_LOGO}  />
    </div>
    <form onSubmit= {(e) => e.preventDefault()} className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"> 
        <h1 className="font-bold text-3xl p-2"> {isSignInForm ?  "Sign In":  "Sign Up"}</h1>
        {!isSignInForm &&<input ref={name} type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700"/>}
        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
        <p className="font-bold text-red-600 w-full text-lg"> {errorMessage}</p>
        <button className="p-4 my-4 bg-red-600 w-full" onClick={handleButtonClick}>{isSignInForm ?  "Sign In":  "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
    </form>
    
    
    </div>
  )
}

export default Login