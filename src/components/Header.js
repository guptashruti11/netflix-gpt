import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser , removeUser} from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const user=useSelector(store=>store.user);
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
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10  flex justify-between">
        <img className="w-44 " 
        src={LOGO}
        alt="logo-1"></img>
       {user && (<div className="flex p-4">
            <div className="w-12 h-12 bg-blue-400 border-spacing-3  text-white text-3xl px-6 py-2 rounded-sm">:)</div>
            <button className="font-bold text-white" 
            onClick={handleSignOut}
            >(Sign Out)</button>
            </div>
        )}
        </div>
    );
};
export default Header;