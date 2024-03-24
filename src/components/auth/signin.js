import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { auth, db } from "../../firebase";
import { AuthContext } from "../../contexts/authContext";
import { addDoc, collection, setDoc } from "firebase/firestore";

export default function SignIn() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const { authUser, logOut } = useContext(AuthContext)
  const [ loginSwitch, setLoginSwitch ] = useState(true);

  function signOut() {
    logOut();
  }

  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(`logged in as  ${userCredential.user.uid}`)
    }).catch((err) => {
      console.log(err)
    })
  }

  const signUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('success')
    }).catch((err) => {
      console.log(err)
    })
  }

  function switchForm() {
    loginSwitch ? setLoginSwitch(false) : setLoginSwitch(true);
  }

  return(
    <div>
      <button onClick={switchForm}>
        {!loginSwitch? 'login' : 'signup'}
      </button>
      {authUser != null
       ? <button onClick={signOut}>log out</button>
       : <></>
      }
      {loginSwitch
      ?
      <form onSubmit={signIn}>
        <h1>Sign In</h1>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
        />
        <button type="submit">Submit</button>
      </form>
      :
      <form onSubmit={signUp}>
        <h1>Sign Up</h1>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      }
    </div>
  )
}