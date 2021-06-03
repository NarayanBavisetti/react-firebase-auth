import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { firebase } from "../firebase";

const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext);
}
export { useAuth };

function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);

     const usersRef = db.collection("Users").doc(user.uid);
      usersRef.get().then((docSnapshot) => {
        if (docSnapshot.exists) {
          // console.log("exists", docSnapshot);
        } else {
          usersRef.set({
            fullname: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          });
        }
      });
    });
    return unubscribe;
  }, []);

  // function signup(email, password, fullname, semester, branch) {
  //   return auth.createUserWithEmailAndPassword(email, password).then((auth) => {
  //     db.collection("members").doc(auth.user.uid).set({
  //       fullname: fullname,
  //       email: auth.user.email,
  //       id: 2,
  //       branch: branch,
  //       semester: semester,
  //       member: null,
  //       skills: null,
  //       contactNo: null,
  //       projects: null,
  //       experience: null,
  //       workshops: null,
  //       interest: null,
  //       payment: false,
  //       registrationApply: false,
  //     });
  //   });
  // }

  function signup(email, password, fullname) {
    return auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      db.collection("Users").doc(auth.user.uid).set({
        fullname: fullname,
        email: auth.user.email,
      });
    });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  const value = {
    user,
    signup,
    login,
    logout,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
export { AuthProvider };
