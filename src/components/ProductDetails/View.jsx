import "./View.css";
import BikeImg from "/bike.jpg";

const View = ({ data }) => {
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={data.imageUrl || BikeImg} alt={data.name || "Product Image"} /> {/* Use dynamic image */}
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {data.price || "N/A"}</p> {/* Use dynamic price */}
          <span>{data.name || "Unknown Product"}</span> {/* Use dynamic name */}
          <p>{data.category || "Unknown Category"}</p> {/* Use dynamic category */}
          <span>{new Date().toDateString()}</span> {/* Use current date */}
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>faraz shafi</p> {/* If available, show seller name */}
          <p>1234567890</p> {/* If available, show seller phone */}
        </div>
      </div>
    </div>
  );
};

export default View;
