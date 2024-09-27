// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore"; 
import { toast } from "react-toastify";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxeLmS15BErg00gUGUPIV9Ts3UyLqOXEM",
  authDomain: "hadithsoul.firebaseapp.com",
  databaseURL:
    "https://hadithsoul-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hadithsoul",
  storageBucket: "hadithsoul.appspot.com",
  messagingSenderId: "641142030282",
  appId: "1:641142030282:web:9e2907bd1d9d5900411933",
  measurementId: "G-RDVLCXJJLB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Correct Firestore initialization
const storage = getStorage(app); // Initialize Storage

// Sign up function
const signUp = async (name, email, password, number) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      number,
      authProvider: "local",
      email,
    });
    toast.success("User created successfully!");
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logged in successfully!");
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Logout function
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Add product function
const addProduct = async (name, category, price, image) => {
  try {
    // Step 1: Upload the image to Firebase Storage
    console.log(image.name)
    const imageRef = ref(storage, `products/${image.name}`);
    await uploadBytes(imageRef, image);
    const imageUrl = await getDownloadURL(imageRef); // Step 2: Get the image URL

    // Step 3: Add the product details to Firestore
    await addDoc(collection(db, "products"), {
      name,
      category,
      price,
      imageUrl, // Use the image URL from Firebase Storage
    });
    toast.success("Product added successfully!");
  } catch (err) {
    console.error(err);
    toast.error("Failed to add product.");
  }
};

const getProducts = async () => {
  try {
    const productsCollection = collection(db, "products");
    const snapshot = await getDocs(productsCollection);
    console.log("snapshot", snapshot)
    // Map through the documents to create an array of products
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return products; // Return the array of products
  } catch (error) {
    console.error("Error fetching products: ", error);
    toast.error("Failed to fetch products.");
    return []; // Return an empty array in case of an error
  }
};

export { auth, db, login, signUp, logout, addProduct, getProducts };
