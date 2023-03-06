import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

// Create new student
const createStudent = async (studentData) => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,a
  //     },
  //   };
  //   const response = await axios.post(API_URL, studentData, config);
  //   return response.data;
};

const updateStudent = async (studentData) => {
  try {
    const updateDocRef = doc(db, "students", studentData.id);
    await updateDoc(updateDocRef, {
      stuid: studentData.stuid,
      fullname: studentData.fullname,
      nickname: studentData.nickname,
      bod: studentData.bod,
      sex: studentData.sex,
      nation: studentData.nation,
      university: studentData.university,
      major: studentData.major,
      studyLevel: studentData.studyLevel,
      studyRange: studentData.studyRange,
      phone: studentData.phone,
      passport: studentData.passport,
      room: studentData.room,
      comment: studentData.comment,
    });

    return studentData;
  } catch (err) {
    console.log(err);
  }
};

// students
const getStudents = async () => {
  // try {
  const listingRef = collection(db, "students");
  const q = query(listingRef);
  const querySnap = await getDocs(q);

  const studentData = [];
  querySnap.docs.forEach((doc) => {
    return studentData.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  // } catch (error) {
  //   console.log("Could not fetch listing");
  // }
  return studentData;
};
// students
const getStudent = async (id) => {
  // const response = await axios.get(API_URL+id);
  // return response.data;

  const docRef = doc(db, "students", id);
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

// Delete user student
const deleteStudent = async (studentId, token) => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   const response = await axios.delete(API_URL + studentId, config);
  //   return response.data;
};

const StudentService = {
  createStudent,
  updateStudent,
  getStudents,
  getStudent,
  deleteStudent,
};

export default StudentService;
