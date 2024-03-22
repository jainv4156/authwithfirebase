import React, { useEffect, useState } from "react";
import ProfileElement from "./ProfileElement";
import {
  addDoc,
  collection,
  where,
  doc,
  query,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Profile(props) {
  const nevigate = useNavigate();
  const [page, setPage] = useState(1);
  const [profileDetail, setProfileDetail] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNo: "",
    age: "",
    education: "",
    occupation: "",
    hobby: "",
    address: "",
    bio: "",
  });
  const prfiedatailref = collection(db, "profileDetail");
  const [documentid, setDocumentid] = useState("");

  const handlePageIncreement = async () => {
    // getdata();
    setPage(page + 1);
  };

  const handlePageDecreement = () => {
    setPage(page - 1);
  };

  const addProfileDetailindb = async () => {
    try {
      if (documentid === "") {
        const docref = await addDoc(
          collection(db, "profileDetail"),
          profileDetail
        );
        console.log("Document written with ID: ", docref.id);
      } else {
        const updateref = collection(db,"profileDetail")
        const ref=doc(updateref,documentid);
        await updateDoc(ref, profileDetail);
        console.log("hi");
      }

      nevigate("/dashboard");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getdata = async () => {
    const q = query(prfiedatailref, where("email", "==", props.user));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      setProfileDetail(data);
      setDocumentid(doc.id);
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <ProfileElement
        page={page}
        profileDetail={profileDetail}
        setProfileDetail={setProfileDetail}
      />
      <button
        disabled={page <= 1}
        type="button"
        onClick={handlePageDecreement}
        className="btn btn-primary"
      >
        &larr;
      </button>
      {page === 7 ? (
        <button
          type="button"
          onClick={addProfileDetailindb}
          className="btn btn-primary"
        >
          Submit
        </button>
      ) : (
        <button
          type="button"
          onClick={handlePageIncreement}
          className="btn btn-primary"
        >
          &rarr;
        </button>
      )}
    </div>
  );
}
