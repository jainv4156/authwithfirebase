import { signOut } from "firebase/auth";
import React, { useState,useEffect } from "react";
import {  collection, where, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Dashboard(props) {
  const nevigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      props.setUser("");
      nevigate("/");
    });
  };
   const prfiedatailref = collection(db, "profileDetail");
  const [data, setData] = useState([]);
  const getdata = async () => {
    const q = query(
      prfiedatailref,
      where("email", "==", props.user)
    );
    const querySnapshot = await getDocs(q);
    if(querySnapshot.empty){
      nevigate("/profile")
    }
    querySnapshot.forEach((doc) => {
      const data=doc.data()
      if(data.firstname===""||data.lastname===""||data.email===""||data.phoneNo===""||data.age===""||data.education===""||data.occupation===""||data.hobby===""||data.address===""||data.password===""){
        nevigate("/profile")
      }
    
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div
        className=" offcanvas-start show"
        tabIndex="-1"
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasLabel">
            <Link to={'/dashboard'} >Dashboard</Link>
          </h5>
        </div>
        <div className="offcanvas-body">
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );  
}
