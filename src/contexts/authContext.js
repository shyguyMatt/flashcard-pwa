import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [ authUser, setAuthUser ] = useState(null);

  function logOut() {
    signOut(auth).then(() => {
      console.log('signed out successfully!')
    })
  }

  useEffect(() =>{
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    });

    return() => {
      listen();
    }
  }, []);

  return(
    <AuthContext.Provider value={{authUser, logOut}}>
      {authUser == null
      ? children
      : children}
    </AuthContext.Provider>
  )
}