import React, { useState } from "react";
import logimg from "../../Images/group1.jpg";
import "./Login.css";
import {useHistory} from "react-router-dom"
import axios from "axios"

function Login() {
  const [email,setemail]=useState();
  const [pass,setpass]=useState();
  const history=useHistory();
  function onSubmit(e) {
    e.preventDefault();
    const ob = {
      email,
      pass
    };
    axios
      .post("http://localhost/login_backend/login.php", ob)
      .then((res) =>{
        if(res.data===1)
        {
          alert("User LoggedIn Successfully");
          history.push("/");
        }
        else{
          alert("Invalid Signin");
          setemail("")
          setpass("")
          console.log(res.data)
        }
    } 
    );
  }
  return (
    <div>
      <div className="login">
        <div className="loginmain">
          <figure>
            <img src={logimg} alt="" className="logimg" />
            <p className="figtext">
              Designed by <a href="https://www.freepik.com/">Freepik</a>
            </p>
          </figure>
          <form>
            <p className="loghead">Login</p>
            <div className="logdiv">
              <span>
                <i class="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                className="forminput"
                name="email"
                autoComplete="off"
                placeholder="Email"
                required
                value={email}
                onChange={(e)=>{setemail(e.target.value)}}
              />
            </div>
            <div className="signdiv">
              <span>
                <i class="fas fa-key"></i>
              </span>
              <input
                type="password"
                className="forminput"
                name="pass"
                placeholder="Password"
                required
                value={pass}
                onChange={(e)=>{setpass(e.target.value)}}
              />
            </div>
            <button type="submit"  onClick={onSubmit} className="btn btn-primary loginbtn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

