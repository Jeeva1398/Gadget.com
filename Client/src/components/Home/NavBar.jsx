import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

export const NavBar = () => {
    const [open,setOpen]= useState(false);
    const handleClick = ()=>{
        setOpen(!open);
    }
    const [data,setData] = useState(null)

    const getUsersDetails = async ()=>{
      const token = localStorage.getItem('token');
      let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      console.log(config);
      
      await axios.get('http://localhost:2002/auth/usersdetails',config).then((res)=>{
          console.log(res.data,"navbar");
          setData(res.data);
      })
    }

    useEffect(()=>{
      getUsersDetails() 
    },[]);

  return (
    <div className=" w-full md:w-full p-0 m-0">
      <div className=" w-full h-10 bg-black flex justify-center items-center">
        <p className=" text-white font-dance text-lg font-semibold ">
          Where trends meet affordability.
        </p>
      </div>
      <div className=" w-full md:flex items-center lg:flex lg:items-center shadow-md">
        <div className=" w-full flex justify-between md:w-1/2">
          <div className=" w-3/4 flex gap-10 md:gap-20 items-center px-3  md:w-full lg:w-full">
            <Link to={'/'}>
            <img
              src={logo}
              alt="logo"
              className=" w-24 h-24 md:w-32 md:h-28  cursor-pointer"
            />
            </Link>
            <input
              type="text"
              placeholder="Search Here"
              className=" border border-solid border-sm border-gray-700 w-4/5 h-12 rounded-full px-2 "
            />
          </div>
          <div className=" md:hidden mt-6 mr-4">
            <button onClick={handleClick}>
              <GiHamburgerMenu className="w-10 h-10 cursor-pointer" />
            </button>
          </div>
        </div>
        <div >
          <ul className=" hidden md:flex mt-5 mr-10  capitalize">
            <li className=" menu">
              <Link to={'/'}>
                <h2 className="px-2 my-2">home</h2>
              </Link>
            </li>
            <li className=" menu">
              <Link to={'/products'}>
                <h2 className="px-2 my-2">products</h2>
              </Link>
            </li>
            <li className=" menu">
              <Link to={'/contact'}>
                <h2 className="px-2 my-2">contact</h2>
              </Link>
            </li>
            <li className=" menu">
              <Link to={'/about'}>
                <h2 className="px-2 my-2">about</h2>
              </Link>
            </li>
            <li className=" menu">
              <Link to={'/login'}>
                <h2 className="px-2 my-2">signup</h2>
              </Link>
            </li>
            <li >
                <Link to={'/cart'}>
                <FaShoppingCart className="w-8 h-10 hover:text-red-500 transform ease-in-out duration-300 mx-3" />
                </Link>
            </li>
            <li >
                <Link to={'/wishlist'}>
                <FaHeart className="w-8 h-10 hover:text-red-500 transform ease-in-out duration-300 mx-3" />
                </Link>
            </li>
            <li >
                <Link to={'/user'}>
                <FaUserCircle className="w-8 h-10 hover:text-red-500 transform ease-in-out duration-300 mx-3" />
                </Link>
            </li>
          </ul>
        </div>
        <div
            className={` flex  justify-end mt-4 ${open ? "block" : "hidden"}`}
          >
            <ul className=" md:flex md:space-x-8 space-y-3  md:space-y-0 capitalize">
              <li className=" menu">
                <Link to={'/'}>
                  <h2 className=" px-2 my-2">home</h2>
                </Link>
              </li>
              <li className=" menu">
                <Link to={'/products'}>
                  <h2 className=" px-2 my-2">produts</h2>
                </Link>
              </li>
              <li className=" menu">
                <Link to={'/contact'}>
                  <h2 className=" px-2 my-2">contact</h2>
                </Link>
              </li>
              <li className=" menu">
                <Link to={'/about'}>
                  <h2 className=" px-2 my-2">about</h2>
                </Link>
              </li>
              <li className=" menu">
              <Link to={'/login'}>
                  <h2 className=" px-2 my-2">signup</h2>
                </Link>
                </li>
              <li className=" flex justify-center" >
                <Link to={'/cart'}>
                <FaShoppingCart className="w-10 h-10 hover:text-orange-500 transform ease-in-out duration-300 my-2" />
                </Link>
              </li>
              <li className=" flex justify-center" >
                <Link to={`/wishlist`}>
                <FaHeart className="w-10 h-10 hover:text-orange-500 transform ease-in-out duration-300 my-2" />
                </Link>
              </li>
              <li className=" flex justify-center" >
                <Link to={'/user'}>
                <FaUserCircle className="w-10 h-10 hover:text-orange-500 transform ease-in-out duration-300 my-2" />
                </Link>
            </li>
            </ul>
          </div>
      </div>
    </div>
  );
};
