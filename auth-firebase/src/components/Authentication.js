import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Authentication(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [loginOrSginup, setLoginOrSginup] = useState("login");
  const nevigate = useNavigate();
  const [loginSignupError, setLoginSignupError] = useState("");

  const changeloginSignup = (ans,e) => {
    e.preventDefault();
    setEmail("")
    setPassword("")
    setCurrentUser("")
    setLoginOrSginup(ans);
    setLoginSignupError("")

  };

  const handlenevigate = () => {
      nevigate("/dashboard")
  }

  const handleSignup = (e) => {
    if(email === "" || password === "" || currentUser === ""){
      alert("Please fill all the fields")
    }
    else{

      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
      .then(async(response) => {
        const user= response.user
        await updateProfile(user, {
          displayName: currentUser
        })
        handlenevigate()

        // const user = userCredential.user
      }).catch((error) => {
        console.log(error.message);
      });
    }
  }

  const handleLogin = async(e) => {
    if(email === "" || password === ""){
      alert("Please fill all the fields")
    }
    else{
  
      e.preventDefault();
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      const user =  userCredential.user
      setCurrentUser(user.displayName)
      setLoginSignupError("")
      handlenevigate()
    }).catch((error) => {
      setLoginSignupError(error.message)
    });
  }

  }

  if (loginOrSginup === "signup") {
    return (
      <div className="LoginPage">
        <h2 className="headingeventbrite">iqnaught</h2>
        <h1>SignUp</h1>

        <form >
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={currentUser}
            onChange={(e) => setCurrentUser(e.target.value)}
          />

          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter you email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleSignup}>Continue</button>
        </form>
        <div className="">
          <p>
            Already have an account?{" "}
            <button type="submit" onClick={e => changeloginSignup("login",e)}>
              login
            </button>
          </p>
        </div>
      </div>
    );
  }

  return (
    
    <div className="LoginPage">
      <h2 className="headingeventbrite">iqnaught</h2>
      <h1>Login</h1>

      <form >
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Enter you email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label> 
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {<p>{loginSignupError}</p>}

        <button type="submit" onClick={handleLogin}>Continue</button>
      </form>

      <div className="">
        <p>
          Don't have an account?{" "}
          <button type="submit" onClick={e => changeloginSignup("signup",e)}>
            SignUp
          </button>
        </p>
       
      </div>
    </div>
  );
}
