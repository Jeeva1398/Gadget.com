import React, { useState } from "react";
import logo from "../../assets/images/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/register.jpg";
import axios from 'axios'

export const Register = () => {
  const navigate = useNavigate();
  const inital = {
    firstName: "",
    lastName:"",
    email: "",
    mobile: "",
    password: "",
    confirmpass: "",
  };
  const [datas, setDatas] = useState(inital);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setDatas({ ...datas, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(datas.password === datas.confirmpass){
      await axios
      .post("http://localhost:2002/user/register", datas)
      .then((res) => {
        setDatas(inital);
        navigate('/')
        // console.log(res)
      })
      .catch((err) => console.log(err));
    }else{
      alert('Password Does Not Match')
    }
    
  };
  return (
    <div className="w-full grid  md:flex md:items-center gap-2 h-svh md:h-auto ">
      <form
        onSubmit={handleSubmit}
        className="  w-full md:w-1/2 m-auto md:m-0 "
      >
        <div className=" w-3/5 md:w-2/3  m-auto grid gap-3   ">
          <div className=" flex items-center w-full">
            <h2 className=" font-display font-semibold text-2xl">
              create account in{" "}
            </h2>
            <img src={logo} alt="logo" className=" w-32 h-32" />
          </div>
          <div>
            <h2 className=" capitalize font-body text-sm">
              enter your details here
            </h2>
          </div>
          <div className=" w-full">
            <input
              type="text"
              placeholder="Fisrt Name"
              name="firstName"
              required
              value={datas.firstName}
              onChange={handleChange}
              className=" border-b border-solid-4 border-gray-600 w-full h-12  "
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              required
              value={datas.lastName}
              onChange={handleChange}
              className=" border-b border-solid-4 border-gray-600 w-full h-12  "
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              value={datas.email}
              onChange={handleChange}
              className=" border-b border-solid-4 border-gray-600 w-full h-12  "
            />
            <input
              type="number"
              placeholder="Mobile"
              name="mobile"
              required
              value={datas.mobile}
              onChange={handleChange}
              className=" border-b border-solid-4 border-gray-600 w-full h-12  "
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              value={datas.password}
              onChange={handleChange}
              className=" border-b border-solid-4 border-gray-600 w-full h-12"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmpass"
              required
              value={datas.confirmpass}
              onChange={handleChange}
              className=" border-b border-solid-4 border-gray-600 w-full h-12"
            />
          </div>
          <div className=" flex justify-between md:my-4">
            <button className="  px-5 py-2 capitalize font-body text-xl shadow-md bg-slate-200 font-semibold ">
              sumbit
            </button>
            <Link>
              <p className=" capitalize font-body text-orange-600">
                forgot password?
              </p>
            </Link>
          </div>
          <div className=" mb-9">
            <Link to={"/login"}>
              <p className=" capitalize">
                already have acoount?
                <span className=" font-body text-blue-600">login here</span>
              </p>
            </Link>
          </div>
        </div>
      </form>
      <div className=" hidden md:block w-3/5  my-8">
        <img src={login} alt="login" className=" w-full h-96" />
      </div>
    </div>
  );
};
