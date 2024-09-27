import { Fragment,useState } from "react";
import "./AddProduct.css";
import { addProduct } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const AddProduct = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    await addProduct(name, category, price, image);
    setLoading(false)
    navigate("/");
    
  };

  return (
    <Fragment>
      <div className="centerDiv">
        <h1 style={{ textAlign: "center" }}>Sell a Product</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            required
            className="input"
            type="text"
            name="name"
            placeholder="product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="category">Category</label>
          <br />
          <input
            required
            className="input"
            type="text"
            name="category"
            placeholder="product category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label htmlFor="price">Price</label>
          <br />
          <input
            required
            className="input"
            type="number"
            placeholder="product price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <label htmlFor="image">Image</label>
          <br />
          <input required type="file" onChange={handleImageChange} />
          <br />
          {image && (
            <div style={{ marginTop: "10px" }}>
              <img
                src={image}
                alt="Selected"
                style={{ width: "100px", height: "100px", marginTop: "10px" }}
              />
            </div>
          )}
          <br />
          <button type="submit" className="uploadBtn">
           {loading ? "Uploading....." : "Upload and Submit"}
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddProduct;
