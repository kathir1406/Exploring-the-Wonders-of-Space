import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Signup() {
  const navigate = useNavigate();
  const [Msg, setMsg] = useState("");
  const [Data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(Data);
    axios
      .post("http://localhost:3001/users/signup", Data)
      .then((res) => {
        alert("Signup Successfully Redirecting to Login....");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      })
      .catch((err) => {
        alert("Something went wrong");
        console.log(err);
      });
  };
  return (
    <div className="signup-body">
      <div className="signup-form">
        <form>
          <table>
            {" "}
            {/* <tr><td>Sign-up Form</td></tr> */}{" "}
            <tr>
              <td>
                {" "}
                <label> Name: </label>
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name="name"
                  value={Data.name}
                  onChange={handlechange}
                />
              </td>
            </tr>{" "}
            <tr>
              <td>
                {" "}
                <label> Email: </label>
              </td>
              <td>
                {" "}
                <input
                  type="email"
                  name="email"
                  value={Data.email}
                  onChange={handlechange}
                />
              </td>
            </tr>{" "}
            <tr>
              <td>
                {" "}
                <label> Password: </label>
              </td>
              <td>
                {" "}
                <input
                  type="password"
                  name="password"
                  value={Data.password}
                  onChange={handlechange}
                />
              </td>
            </tr>{" "}
            <tr>
              <td> </td>{" "}
              <td>
                {" "}
                <button onClick={handlesubmit} className="signup-btn">
                  {" "}
                  Signup{" "}
                </button>
              </td>
            </tr>{" "}
          </table>{" "}
        </form>{" "}
        {Msg}{" "}
      </div>{" "}
    </div>
  );
}
