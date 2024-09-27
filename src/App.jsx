import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AddProductPage from "./pages/AddProductPage";
import MyContextProvider from "./context/MyContextProvider";

function App() {
  return (
    <Router>
      <MyContextProvider>
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign_up" element={<SignUpPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/add_product/" element={<AddProductPage />} />
        </Routes>
      </MyContextProvider>
    </Router>
  );
}

export default App;
