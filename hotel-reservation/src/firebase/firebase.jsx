import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  deleteDoc,
  getFirestore,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCKdKwCkdZJ983eydD4U_QlP0mu3xMlUbI",
  authDomain: "sarah-homestay.firebaseapp.com",
  projectId: "sarah-homestay",
  storageBucket: "sarah-homestay.firebasestorage.app",
  messagingSenderId: "322610968685",
  appId: "1:322610968685:web:143dd5b15a5b481025e764",
  measurementId: "G-07T55NEDQS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
const storage = getStorage(app);

////////////////////////  /////
// GlobalUploadImageFunction //
////////////////////////  /////

export const useUploadImage = () => {
  const [imageUploadProgress, setImageUploadProgress] = useState(0);
  const [imageURL, setImageURL] = useState(null);
  const [imageUploadLoading, setImageUploadLoading] = useState(false);

  const uploadImage = async (file, bucketName) => {
    const result = {
      data: null,
      status: "pending",
    };

    console.log("Uploading image >>", file);
    console.log("Storage bucket >>", bucketName);

    const metadata = {
      contentType: "image/jpeg",
    };
    const storageRef = ref(storage, bucketName + file.name);

    try {
      setImageUploadLoading(true);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
            setImageUploadProgress(parseInt(progress.toFixed(0)));

            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            result.status = "error";
            result.error = error;
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log("File available at", downloadURL);
            result.data = downloadURL;
            result.status = "success";
            setImageUploadLoading(false);
            resolve(downloadURL);
          }
        );
      });
    } catch (err) {
      console.error("Error occurred >>", err);
      result.status = "error";
      result.error = err;
    }

    return result;
  };

  return { imageUploadProgress, imageURL, imageUploadLoading, uploadImage };
};

////////////////////////  /////
// GlobalDateFormattingFunction //
////////////////////////  /////

const currentDate = new Date();
const options = {
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short",
};

export const formattedDate = currentDate.toLocaleString("en-US", options);

// ///////////////////////////
//   Auth Related Functions //
// //////////////////////////

export const useAuthenticationFunctions = () => {
  const logout = async () => {
    await signOut(auth);
    localStorage.clear();
  };

  const login = async (email, password) => {
    console.log("logging in ... ");
    console.log("email >> ", email);
    console.log("password >> ", password);

    try {
      // Authenticate the user with the provided email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Return a success message or code
      return {
        success: true,
        message: "Login successful",
        loggedInUser: userCredential.user,
      };
    } catch (error) {
      // Handle authentication errors
      console.error("Login failed", error);

      // Return an error message or code
      return {
        success: false,
        error: error.code,
        message: error.message,
        loggedInUser: null,
      };
    }
  };

  const createClientUser = async () => {
    const provider = new GoogleAuthProvider(); // Initialize GoogleAuthProvider

    try {
      // Sign in with Google popup
      const result = await signInWithPopup(auth, provider);

      // Extracting Google Access Token
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // Extracting signed-in user info
      const user = result.user;

      // You can access user info such as displayName, email, photoURL, etc.
      console.log("User signed in successfully: ", user);

      // Optional: handle additional user info if required
      // const additionalInfo = getAdditionalUserInfo(result);

      return {
        success: true,
        user,
        token,
      };
    } catch (error) {
      // Handle sign-in errors
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email; // Email used in the attempt
      const credential = GoogleAuthProvider.credentialFromError(error); // The AuthCredential used

      console.error("Error during Google sign-in:", errorMessage);

      return {
        success: false,
        errorCode,
        errorMessage,
        email,
        credential,
      };
    }
  };

  return {
    login,
    logout,
    createClientUser,
  };
};

// ///////////////////////////
//   Booking Functions //
// //////////////////////////
export const useBookingFunctions = () => {
  // Fetch all bookings
  const getBookings = async () => {
    try {
      const bookingsRef = collection(db, "Bookings");
      const querySnapshot = await getDocs(bookingsRef);
      const bookingsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return { success: true, data: bookingsData };
    } catch (error) {
      console.error("Error fetching bookings:", error);
      return { success: false, error: error.message };
    }
  };

  // Fetch a single booking by ID
  const getBookingById = async (id) => {
    try {
      const bookingRef = doc(db, "Bookings", id);
      const bookingDoc = await getDoc(bookingRef);
      if (bookingDoc.exists()) {
        return { success: true, data: bookingDoc.data() };
      } else {
        return { success: false, error: "No such booking found" };
      }
    } catch (error) {
      console.error("Error fetching booking by ID:", error);
      return { success: false, error: error.message };
    }
  };

  const getBookingsForHotel = async (homeId) => {
    try {
      const bookingsRef = collection(db, "Bookings");
      const q = query(bookingsRef, where("homeId", "==", homeId)); // Filter by hotelId
      const querySnapshot = await getDocs(q);
      const bookingsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return { success: true, data: bookingsData };
    } catch (error) {
      console.error("Error fetching bookings:", error);
      return { success: false, error: error.message };
    }
  };

  // Post a new booking
  const postBooking = async (data) => {
    try {
      const bookingRef = collection(db, "Bookings");
      const newBookingRef = doc(bookingRef);
      await setDoc(newBookingRef, {
        ...data,
        createdAt: formattedDate,
        status: "pending",
      });
      return {
        success: true,
        id: newBookingRef.id,
        message: "Booking created successfully",
      };
    } catch (error) {
      console.error("Error creating booking:", error);
      return { success: false, error: error.message };
    }
  };

  // Approve a booking
  const approveBooking = async (id) => {
    try {
      const bookingRef = doc(db, "Bookings", id);
      await updateDoc(bookingRef, { status: "approved" });
      return { success: true, message: "Booking approved" };
    } catch (error) {
      console.error("Error approving booking:", error);
      return { success: false, error: error.message };
    }
  };

  // Reject a booking
  const rejectBooking = async (id) => {
    try {
      const bookingRef = doc(db, "Bookings", id);
      await updateDoc(bookingRef, { status: "rejected" });
      return { success: true, message: "Booking rejected" };
    } catch (error) {
      console.error("Error rejecting booking:", error);
      return { success: false, error: error.message };
    }
  };

  // Delete a booking
  const deleteBooking = async (id) => {
    try {
      await deleteDoc(doc(db, "Bookings", id));
      return { success: true, message: "Booking deleted successfully" };
    } catch (error) {
      console.error("Error deleting booking:", error);
      return { success: false, error: error.message };
    }
  };

  return {
    getBookings,
    getBookingById,
    postBooking,
    approveBooking,
    rejectBooking,
    deleteBooking,
    getBookingsForHotel,
  };
};

// //////////////////////////////////
//   Homes Related Functions //
// ////////////////////////////////
export const useHomeFunctions = () => {
  // Fetch all homes
  const getHomes = async () => {
    try {
      const homesRef = collection(db, "Homes");
      const querySnapshot = await getDocs(homesRef);
      const homesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return { success: true, data: homesData };
    } catch (error) {
      console.error("Error fetching homes:", error);
      return { success: false, error: error.message };
    }
  };

  // Fetch a single home by ID
  const getHomeById = async (id) => {
    try {
      const homeRef = doc(db, "Homes", id);
      const homeDoc = await getDoc(homeRef);
      if (homeDoc.exists()) {
        return { success: true, data: homeDoc.data() };
      } else {
        return { success: false, error: "No such home found" };
      }
    } catch (error) {
      console.error("Error fetching home by ID:", error);
      return { success: false, error: error.message };
    }
  };

  // Fetch homes by location
  const getHomesByLocation = async (location) => {
    try {
      const homesRef = collection(db, "Homes");
      const q = query(homesRef, where("location", ">=", location));

      const querySnapshot = await getDocs(q);
      const homesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return { success: true, data: homesData };
    } catch (error) {
      console.error("Error fetching homes by location:", error);
      return { success: false, error: error.message };
    }
  };

  // Fetch homes by location
  const getHomesByUnitType = async (unitType) => {
    try {
      const homesRef = collection(db, "Homes");
      const q = query(homesRef, where("unitType", ">=", unitType));

      const querySnapshot = await getDocs(q);
      const homesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return { success: true, data: homesData };
    } catch (error) {
      console.error("Error fetching homes by location:", error);
      return { success: false, error: error.message };
    }
  };

  // Post a new home
  const postHome = async (data) => {
    try {
      const homesRef = collection(db, "Homes");
      const newHomeRef = doc(homesRef);
      await setDoc(newHomeRef, {
        ...data,
        createdAt: formattedDate,
        featured: false,
      }); // Initially not featured
      return {
        success: true,
        id: newHomeRef.id,
        message: "Home created successfully",
      };
    } catch (error) {
      console.error("Error creating home:", error);
      return { success: false, error: error.message };
    }
  };

  // Mark a home as featured
  const markFeatured = async (id) => {
    try {
      // 1. Find existing featured home
      const homesRef = collection(db, "Homes");
      const q = query(homesRef, where("featured", "==", true));
      const querySnapshot = await getDocs(q);

      // 2. If a featured home exists, unmark it
      if (querySnapshot?.docs?.length > 0) {
        const featuredHomeDoc = querySnapshot.docs[0];
        const featuredHomeRef = doc(db, "Homes", featuredHomeDoc.id);
        await updateDoc(featuredHomeRef, { featured: false });
      }

      // 3. Mark the selected home as featured
      const homeRef = doc(db, "Homes", id);
      await updateDoc(homeRef, { featured: true });

      return { success: true, message: "Home marked as featured" };
    } catch (error) {
      console.error("Error marking home as featured:", error);
      return { success: false, error: error.message };
    }
  };

  // Delete a home
  const deleteHome = async (id) => {
    try {
      await deleteDoc(doc(db, "Homes", id));
      return { success: true, message: "Home deleted successfully" };
    } catch (error) {
      console.error("Error deleting home:", error);
      return { success: false, error: error.message };
    }
  };

  return {
    getHomes,
    getHomeById,
    postHome,
    markFeatured,
    deleteHome,
    getHomesByLocation,
    getHomesByUnitType,
  };
};
