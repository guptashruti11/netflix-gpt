import Header from "./Header"
import { useState,useRef } from "react";
import { checkValidData } from "../utils/validate";
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login=()=>{
   const navigate=useNavigate();
    const [isSignIn,setisSignIn]=useState(true);
    const [errorMes,seterrMes]=useState(null);
    const dispatch=useDispatch();

    const displayName=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    
    const handleButtonClick=()=>{
        //Check validate form using reges
        // if not correct create error message
       
      const message=checkValidData(email.current.value,password.current.value);
      seterrMes(message);
      if(message)   return;
       
       
       // Now Check for Sign In /SignUp
      if(!isSignIn) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: displayName.current.value, photoURL: "https://1drv.ms/i/s!Al1wN5kIBxFoiHiWo2M0UU381CMS?e=cXe0Zg"
          }).then(() => {
            const {uid,displayName,email,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,
              displayName:displayName,photoURL:photoURL
            })
            );
            navigate("/browse");
         }).catch((error) => {
         seterrMes(error.message);
         });
        
        })
       .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrMes(errorCode+"-"+errorMessage);
       });
      }
      else {
       
        //Sign In
       signInWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
        })
       .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrMes(errorCode+"-"+errorMessage);
        
        });
      }
    };
    const toggleSignInform=()=>{
        setisSignIn(!isSignIn);
};
    return(
        
        <div>
            <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="bg-img"></img>
            </div>
            <form id="form" name="lname" onSubmit={(e)=>{e.preventDefault()}}
           className="absolute p-14 h-100 bg-black w-1/4 mx-auto right-0 left-0 my-40 text-white font-sans rounded-lg bg-opacity-80">
           
           <h1 
           className="font-bold text-2xl py-3">{isSignIn ? "Sign In":"Sign Up"}
           </h1>
        
           {!isSignIn && ( <input type="text" ref={displayName}  placeholder="Full Name" 
           className="p-2 my-2 w-full bg-gray-700"></input>
           )}

           <input
            type="text"
            ref={email}
            placeholder="Email or phone number"
            className="p-3 my-2 w-full bg-gray-700">
            </input>

            <input 
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-2 w-full  bg-gray-700 ">
            </input>
            <p className="text-red-500 font-bold p-2">{errorMes}</p>
            <button 
            className="p-3 my-2 bg-red-600 w-full rounded-lg" 
            onClick={handleButtonClick}
            >
                  {isSignIn ? "Sign In":"Sign Up"}
            </button>

            <h3 className="cursor-pointer py-4"  onClick={toggleSignInform} >

            {isSignIn ? "New to Netflix? Sign up now.":"Already Register? Sign in now."}</h3>
           </form>
        </div>
       
    );
};
export default Login;