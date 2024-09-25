import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import React from "react";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AddProductPage from "./pages/AddProductPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign_up" element={<SignUpPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/add_product/" element={<AddProductPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
