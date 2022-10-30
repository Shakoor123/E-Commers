import './new.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { useState } from 'react'
const New = () => {
  const [image, setImage] = useState("")
  return (
    <div className="new">
      <Sidebar />
      <div className="newConntainer">
        <Navbar />
        <div className="tableConatiner">
          <div className="left">
          <h1 className="title" >Add new Product</h1>
          <label htmlFor="files">

            <img  src={image ? URL.createObjectURL(image) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT8-e9Jpr1AyNwkdf_iE_zQjknFwrn3kBbQQ&usqp=CAU"} alt="" className="img" />
            </label>

            <input type="file" onChange={e=>{
              setImage(e.target.files[0])
            }} className='file' id='files' />
          </div>
          <div className="right">
          <form action="" className="form">
            <div className="formContainer">
              <label>Enter product name</label>
              <input type="text" placeholder='enter product name' />
            </div>
            <div className="formContainer">
              <label>Enter product name</label>
              <input type="text" placeholder='enter product name' />
            </div>
            <div className="formContainer">
              <label>Enter product name</label>
              <input type="text" placeholder='enter product name' />
            </div>
            <div className="formContainer">
              <label>Enter product name</label>
              <input type="text" placeholder='enter product name' />
            </div>
            <div className="formContainer">
              <label>Enter product name</label>
              <input type="text" placeholder='enter product name' />
            </div>
          </form>
          <button className="button">submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New