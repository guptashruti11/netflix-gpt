import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser , removeUser} from "../utils/userSlice";
import { LOGO, Language_Supported } from "../utils/constants";
import { togglegptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header=()=>{
   
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(store=>store.user);
    const showgptSearch=useSelector(store=>store.gpt.showgptSearch);
    const handleLanguageChange=(e)=>{
        dispatch(changeLanguage(e.target.value));
    };
    const handleGptSearchClick=()=>{
      // Toggle gpt search
      // first we need to store 
      // use redux store
        dispatch(togglegptSearchView());
    };
    const handleSignOut=()=>{
    signOut(auth).then(() => {
     // Sign-out successful.
    }).catch((error) => {
    navigate("/error");
    });

    };

    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,displayName,email,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,
            displayName:displayName,photoURL:photoURL}));
            navigate("/browse");
          } else {
           dispatch(removeUser());
           navigate("/");
          }
        });
        // unsubscribe when components unmounts
        return ()=>unsubscribe();
  },[]);
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10  flex flex-col md:flex-row justify-between ">
        {/* <img className="w-44 " 
        src={LOGO}
        alt="logo-1"></img> */}
        <p className="text-3xl text-red-700 pt-5 mx-auto md:mx-0">Netflix-GPT</p>
       {user && (
       <div className="flex p-4 justify-between">
       {showgptSearch && (<select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
          {Language_Supported.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          
        </select>)}
          <button
           className="py-2 px-4 m-2 mx-4 my-2 bg-purple-800 rounded-lg text-white"
           onClick={handleGptSearchClick}>{!showgptSearch ?"GPT Search":"Home Page"}</button>
            <div className="w-12 h-12 bg-blue-400 border-spacing-3  text-white text-3xl px-6 py-2 rounded-sm hidden md:block">:)</div>
            <button className="font-bold text-white" 
            onClick={handleSignOut}
            >(Sign Out)</button>
            </div>
        )}
        </div>
    );
};
export default Header;