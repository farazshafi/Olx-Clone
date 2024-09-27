import { useEffect, useState } from "react";
import MyContext from "./MyContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const MyContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const test = "test message"
  useEffect(() => {
    onAuthStateChanged(auth, async (data) => {
      if (data) {
        setUser(data);
      } else {
        setUser(null);
      }
    });
  });
  return <MyContext.Provider value={{ user, test }}>{children}</MyContext.Provider>;
};

export default MyContextProvider;
