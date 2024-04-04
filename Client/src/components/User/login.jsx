import React, { useState } from "react";
import logo from "../../assets/images/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/headphones.jpg";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const inital = {
    email: "",
    password: "",
  };

  const [datas, setDatas] = useState(inital);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    setDatas({ ...datas, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:2002/auth/users/login", datas)
      .then((res) => {
        console.log(res.data)
        const token = res.data.token;
        console.log(token ,"login");
        localStorage.setItem("token",token)
        navigate('/');
      });
  };
  return (
    <div className="w-full grid  md:flex md:items-center gap-2 h-svh md:h-auto ">
      <div className=" hidden md:block w-1/2 h-5/6  my-8">
        <img src={login} alt="login" className=" w-full h-96" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="  w-full md:w-1/2 m-auto md:m-0 "
      >
        <div className=" w-2/5 md:w-2/3  m-auto grid gap-3   ">
          <div className=" flex items-center w-full">
            <h2 className=" font-display font-semibold text-2xl">log in to </h2>
            <img src={logo} alt="logo" className=" w-32 h-32" />
          </div>
          <div>
            <h2 className=" capitalize font-body text-sm">
              enter your details here
            </h2>
          </div>
          <div className=" w-full">
            <input
              type="email"
              placeholder="Enter email or Mobile"
              name="email"
              required
              value={datas.email}
              className=" border-b border-solid-4 border-gray-600 w-full h-12  "
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              value={datas.password}
              className=" border-b border-solid-4 border-gray-600 w-full h-12"
              onChange={handleChange}
            />
          </div>
          <div className=" flex justify-between md:my-4">
            <button className="  px-5 py-2 capitalize font-body text-xl shadow-md bg-slate-200 font-semibold ">
              login
            </button>
            <Link>
              <p className=" capitalize font-body text-orange-600">
                forgot password?
              </p>
            </Link>
          </div>
          <div>
            <Link to={"/register"}>
              <p className=" capitalize">
                new user?
                <span className=" font-body text-blue-600">register here</span>
              </p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
