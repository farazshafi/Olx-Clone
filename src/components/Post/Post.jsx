import Heart from "../../assets/Heart"
import bikeImg from "/bike.jpg"
import "./Post.css"
import { useNavigate } from "react-router-dom"
const Post = () => {
  const navigate = useNavigate()
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          <div
            className="card"
            onClick={()=>navigate("/product/123")}
          >
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={bikeImg} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
          <div
            className="card"
            onClick={()=>navigate("/product/123")}
          >
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={bikeImg} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
          <div
            className="card"
            onClick={()=>navigate("/product/123")}
          >
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={bikeImg} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
          <div
            className="card"
            onClick={()=>navigate("/product/123")}
          >
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={bikeImg} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
          <div
            className="card"
            onClick={()=>navigate("/product/123")}
          >
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={bikeImg} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
          <div
            className="card"
            onClick={()=>navigate("/product/123")}
          >
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={bikeImg} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card"
          onClick={()=>navigate("/product/123")}>
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={bikeImg} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card"
          onClick={()=>navigate("/product/123")}>
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={bikeImg} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card"
          onClick={()=>navigate("/product/123")}>
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={bikeImg} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card"
          onClick={()=>navigate("/product/123")}>
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={bikeImg} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          <div className="card"
          onClick={()=>navigate("/product/123")}>
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={bikeImg} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post