import { StyleSheet, Text, SafeAreaView, Button } from "react-native";
import * as firebase from "firebase/app";
import { deleteUser, EmailAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SaveLogin } from "../Local Storage/AsyncStorage";
import {
  deleteField,
  deleteDoc,
  collection,
  addDoc,
  query,
  where,
  setDoc,
  getDocs,
  arrayUnion,
  arrayRemove,
  getDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCn5nCGoZKzc9TpCRA0qUqcOdqqJ6zhw1E",
  authDomain: "test-1e0fe.firebaseapp.com",
  projectId: "test-1e0fe",
  storageBucket: "test-1e0fe.appspot.com",
  messagingSenderId: "471857485313",
  appId: "1:471857485313:web:a5909a2d1a5ece9d579200",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getFirestore();

export const initialize = () => {
  console.log(auth.currentUser);
  return auth.currentUser;
};

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // console.log(uid);
//     // console.log(user.displayName);
//     // const uid = user.uid;
//     // console.log(user.email);
//     // ...
//   } else {
//     console.log("You've been Signed Out Dude!");
//     // User is signed out
//     // ...
//   }
// });

export const Create_Account = (
  userEmail,
  userPass,
  Name,
  setResponse,
  setModalVisible
) => {
  console.log("here");
  createUserWithEmailAndPassword(auth, userEmail, userPass)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, { displayName: Name });
      sendEmailVerification(user).then(() => {
        setModalVisible(true);
        console.log("Verification Link Send");
        console.log(user);
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == "auth/email-already-in-use")
        setResponse("Account already exists");
      console.log(errorCode);
      // ..
    });
};

export const SignIn = (userEmail, userPass, setResponse, navigation) => {
  console.log("Signing In");
  signInWithEmailAndPassword(auth, userEmail, userPass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      SaveLogin(user);
      if (user.emailVerified) navigation.replace("Home");
      else {
        navigation.navigate("Verification", { tempuser: user });
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      setResponse("Invalid Credidentials");
    });
};
export const SignOut = () => {
  console.log("Signing Out");
  auth.signOut().then(
    function () {
      AsyncStorage.removeItem("@Doctor-Sahab:Current-User");
      console.log("Signed Out");
    },
    function (error) {
      console.error("Sign Out Error", error);
    }
  );
  auth;
};
export const verifyUser = (user) => {
  sendEmailVerification(user).then(() => {
    console.log("Verification Link Sent..");
  });
};
const reAuthenticate = () => {
  var cred = EmailAuthProvider.credential(
    "usamayak1@outlook.com",
    "testpassword"
  );
  reauthenticateWithCredential(auth.currentUser, cred)
    .then(() => {
      console.log("User ReAuthenticated");
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};
export const deleteAccount = () => {
  var cred = EmailAuthProvider.credential(
    "usamayak1@outlook.com",
    "testpassword"
  );
  if (auth.currentUser !== null) {
    reauthenticateWithCredential(auth.currentUser, cred)
      .then(() => {
        console.log("User ReAuthenticated");
        deleteUser(auth.currentUser)
          .then(() => {
            console.log("User Deleted..");
          })
          .catch((error) => {});
      })
      .catch((error) => {
        console.log(error.message);
      });
  } else {
    alert("User Not Signed In..");
  }
};
export const resetPassword = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("Password Reset Link Sent..");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const createnewgig = (data) => {
  const addnewgig = doc(db, "Gigs");
  updateDoc(addnewgig, {
    gig: data,
  });
};

export const addWithRandomID = (data, navigation) => {
  try {
    const collection_Users = collection(db, "Gigs");
    addDoc(collection_Users, data);
    navigation.goBack();
    alert("Gig added Successfully");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// export const getgigsdata = async (setgigs,setloading) => {
//   const snap = await getDoc(doc(db, "Doctors", "email"));
//   if (snap.exists()) {
//     // alert(JSON.stringify(snap.data()));
//     // console.log("Document data:", snap.data());
//     setgigs(snap.data().gig)
//     setloading(false)
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// };

export const getgigsdata = async (setgigs, setLoading) => {
  try {
    let q = query(
      collection(db, "Gigs"),
      where("Doctor_id", "==", "usamaYAK1@outlook.com")
    );
    const querySnapshot = await getDocs(q);
    let gigarr = [];
    querySnapshot.forEach((data) => {
      gigarr.push(data.data());
    });
    setgigs(gigarr);
    setLoading(false);
  } catch (e) {
    console.log("Catch an error: ", e);
  }
};

export const getdoctordata = async (setdoctor) => {
  const snap = await getDoc(doc(db, "Doctors", "ahsanashfaq01@icloud.com"));
  if (snap.exists()) {
    // alert(JSON.stringify(snap.data()));
    // console.log("Document data:", snap.data());
    setdoctor(snap.data());
    // setloading(false)
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};


export const getbookings = async (setgigs, setLoading) => {
  try {
    let q = query(
      collection(db, "Gigs"),
      where("Doctor_id", "==", "ahsanashfaq01@icloud.com")
    );
    const querySnapshot = await getDocs(q);
    let gigarr = [];
    querySnapshot.forEach((data) => {
      gigarr.push(data.data());
    });
    setgigs(gigarr);
    setLoading(false);
  } catch (e) {
    console.log("Catch an error: ", e);
  }
};

// export const getdoctordata = async (setDoctor) => {
//   try {
//     let doctor;
//     let q = query(
//       collection(db, "Doctor"),
//       where("Doctor_id", "==", "usamaYAK1@outlook.com")
//     );
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((data) => {
//       console.log(data.id, " => ", data.data());
//       alert(JSON.stringify(data.data()));
//       setDoctor(data.data())
//     });
//   } catch (e) {
//     console.log("Catch an error: ", e);
//   }
// };

export const SearchGigs = async () => {
  try {
    const q = query(
      collection(db, "Gigs"),
      where("Doctor_id", "==", "ahsanashfaq01@icloud.com")
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((data) => {
      console.log(data.id, " => ", data.data());
      alert(JSON.stringify(data.data()));
    });
  } catch (e) {
    console.log("Catch an error: ", e);
  }
};
