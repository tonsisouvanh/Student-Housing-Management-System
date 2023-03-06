import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

import { getAuth, signOut } from "firebase/auth";

// Create new user
const loginUser = async (userData) => {
  return userData;
};
const logoutUser = async () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      sessionStorage.removeItem("user");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const updateUser = async (userData) => {
  try {
    const updateDocRef = doc(db, "users", userData.id);
    await updateDoc(updateDocRef, {
      stuid: userData.stuid,
      fullname: userData.fullname,
      nickname: userData.nickname,
      bod: userData.bod,
      sex: userData.sex,
      nation: userData.nation,
      university: userData.university,
      major: userData.major,
      studyLevel: userData.studyLevel,
      studyRange: userData.studyRange,
      phone: userData.phone,
      passport: userData.passport,
      room: userData.room,
      comment: userData.comment,
    });

    return userData;
  } catch (err) {
    console.log(err);
  }
};

// users
const getUser = async (id) => {
  // const response = await axios.get(API_URL+id);
  // return response.data;

  const docRef = doc(db, "users", id);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("Document does not exist");
    }
  } catch (error) {
    console.log(error);
  }
};

const UserService = {
  loginUser,
  logoutUser,
  updateUser,
  getUser,
};

export default UserService;
