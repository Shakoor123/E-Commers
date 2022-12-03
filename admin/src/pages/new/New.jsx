import "./new.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const New = () => {
  const [image, setImage] = useState("");
  const location = useLocation();
  const type = location.pathname.split("/")[2];
  return (
    <div className="new">
      <Sidebar />
      <div className="newConntainer">
        <Navbar />
        {type == "product" ? (
          <div className="tableConatiner">
            <div className="left">
              <h1 className="title">Add new {type}</h1>
              <label htmlFor="files">
                <img
                  src={
                    image
                      ? URL.createObjectURL(image)
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT8-e9Jpr1AyNwkdf_iE_zQjknFwrn3kBbQQ&usqp=CAU"
                  }
                  alt=""
                  className="img"
                />
              </label>

              <input
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
                className="file"
                id="files"
              />
            </div>
            <div className="right">
              <form action="" className="form">
                <div className="formContainer">
                  <label>Enter product title</label>
                  <input type="text" placeholder="enter product name" />
                </div>
                <div className="formContainer">
                  <label>Enter product desc</label>
                  <input type="text" placeholder="enter product name" />
                </div>
                <div className="formContainer">
                  <label>Enter product price</label>
                  <input type="text" placeholder="enter product name" />
                </div>
                <div className="formContainer">
                  <label>Enter product instock</label>
                  <input type="checkbox" />
                </div>
                <div className="formContainer">
                  <label>Enter product size</label>
                  <input type="text" placeholder="enter product name" />
                  <span>+</span>
                </div>
                <div className="formContainer">
                  <label>Enter product color</label>
                  <input type="text" placeholder="enter product name" />
                  <span>+</span>
                </div>
              </form>
              <button className="button">submit</button>
            </div>
          </div>
        ) : (
          <div className="tableConatiner">
            <div className="left">
              <h1 className="title">Add new {type}</h1>
            </div>
            <div className="right">
              <form action="" className="form">
                <div className="formContainer">
                  <label>Enter User name</label>
                  <input type="text" />
                </div>
                <div className="formContainer">
                  <label>Enter Email</label>
                  <input type="text" />
                </div>
                <div className="formContainer">
                  <label>Enter password</label>
                  <input type="text" />
                </div>
                <div className="formContainer">
                  <label>Enter Repeate password</label>
                  <input type="text" />
                </div>
              </form>
              <button className="button">submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default New;
