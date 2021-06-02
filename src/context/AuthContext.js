import React, { createContext, useContext, useState ,useEffect} from "react";
import { auth } from "../firebase";
import {firebase} from '../firebase'

const AuthContext = createContext();

 function useAuth() {
return useContext(AuthContext)
}
export {useAuth}

 function AuthProvider({ children })  {

  const [user, setUser] = useState("");

  useEffect(() => {
    const unubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });
    return unubscribe
},[])

function signup(email,password){
 return auth.createUserWithEmailAndPassword(email,password)
}

const value = {
    user,
    signup
}
  return (
  <AuthContext.Provider value={value}>
      {children}
      </AuthContext.Provider>);
};
export {AuthProvider}
