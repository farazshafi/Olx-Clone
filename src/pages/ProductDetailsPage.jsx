import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import View from "../components/ProductDetails/View";
import { getSingleProduct } from "../firebase";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  const navigate = useNavigate()
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getSingleProduct(id);
      if (product) {
        setProduct(product);
      }else{
        console.log("No product found with id:", id);
        navigate("/");
      }
    };
    fetchProduct();
  }, []);
  return (
    <>
      <Header />
      <View data={product}/>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
