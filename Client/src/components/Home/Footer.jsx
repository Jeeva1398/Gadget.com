import logo from "../../assets/images/logo/logo.png";
import { VscSend } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export const Footer = () => {
  return (
    <div>
      <div className=" w-full md:h-52 bg-slate-600">
        <div className=" w-full md:h-52 bg-slate-600 flex justify-center md:justify-around gap-6 ">
          <div className=" grid gap-1 w-1/2 md:w-1/4 h-40 px-1 ">
            <img src={logo} alt="logo" className=" w-20 h-20 md:w-24 md:h-24" />
            <p className=" text-white font-body text-sm md:text-lg lg:text-lg font-semibold capitalize cursor-default ">
              subscribe
            </p>
            <p className=" text-red-500 text-xs md:text-sm font-dance capitalize cursor-default ">
              get your 10% offer on first order
            </p>
            <div className=" w-full flex  items-center">
              <input
                type="text"
                placeholder="Enter Your Email"
                className=" w-3/4 h-8 px-2 border-solid border-t-2 border-b-2 border-l-2 rounded-l-lg bg-slate-600"
              />
              <div className="  h-8 border-solid border-b-2 border-t-2 border-r-2 rounded-r-lg flex items-center">
                <VscSend className=" text-white w-6 h-6 px-1" />
              </div>
            </div>
          </div>
          <div className=" hidden md:block text-left my-2">
            <h2 className=" capitalize text-xl font-body font-semibold cursor-default">
              account
            </h2>
            <ul>
              <li className="style">
                <Link>
                  <p>my account</p>
                </Link>
              </li>
              <li className=" style">
                <Link to={"/login"}>
                  <p>login/Register</p>
                </Link>
              </li>
              <li className="style">
                <Link to={"/cart"}>
                  <p>cart</p>
                </Link>
              </li>
              <li className=" style">
                <Link to={"/wishlist"}>
                  <p>wishlist</p>
                </Link>
              </li>
              <li className=" style">
                <Link to={"/home"}>
                  <p>shop</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className=" hidden md:block my-2">
            <h2 className=" capitalize text-xl font-body font-semibold cursor-default">
              quick link
            </h2>
            <ul>
              <li className="style">
                <Link>
                  <p>privacy policy</p>
                </Link>
              </li>
              <li className=" style">
                <Link>
                  <p>terms of use</p>
                </Link>
              </li>
              <li className="style">
                <Link>
                  <p>FAQ</p>
                </Link>
              </li>
              <li className=" style">
                <Link>
                  <p>contact</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className=" w-1/2 md:w-1/4 ">
            <h2 className=" text-2xl capitalize font-semibold text-center cursor-default">
              shop
            </h2>
            <div className=" w-full grid grid-cols-2">
              <ul>
                <li className="style">
                  <Link to={"/airpods"}>
                    <p>wireless airpods</p>
                  </Link>
                </li>
                <li className=" style">
                  <Link to={"/headphones"}>
                    <p>wireless headphones</p>
                  </Link>
                </li>
                <li className=" style">
                  <Link to={"/watches"}>
                    <p>smart watches</p>
                  </Link>
                </li>
              </ul>
              <ul>
                <li className=" style">
                  <Link to={"/headphones"}>
                    <p>wired headphones</p>
                  </Link>
                </li>
                <li className=" style">
                  <Link to={"/speakers"}>
                    <p>wireless speakers</p>
                  </Link>
                </li>
                <li className=" style">
                  <Link to={"/speakers"}>
                    <p>home audio</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" hidden md:block lg:block w-3/4  m-auto">
              <h2 className=" w-full capitalize font-body text-xs md:text-sm cursor-default ">
                connect with social media
              </h2>
              <div className=" w-full flex gap-5 my-1">
                <FaFacebook className=" md:w-6 md:h-6 lg:w-6 lg:h-6 hover:text-red-500 cursor-pointer" />
                <FaYoutube className="md:w-6 md:h-6 lg:w-6 lg:h-6 hover:text-red-500 cursor-pointer" />
                <FaInstagramSquare className="md:w-6 md:h-6 lg:w-6 lg:h-6 hover:text-red-500 cursor-pointer" />
                <FaXTwitter className="  md:w-6 md:h-6 lg:w-6 lg:h-6 hover:text-red-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className=" md:hidden lg:hidden w-full flex items-center justify-center gap-2">
          <h2 className="  capitalize font-body text-xs md:text-sm ">
            connect with social media
          </h2>
          <div className="  flex gap-5 my-1">
            <FaFacebook className=" w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 hover:text-red-500" />
            <FaYoutube className=" w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 hover:text-red-500" />
            <FaInstagramSquare className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 hover:text-red-500" />
            <FaXTwitter className=" w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 hover:text-red-500" />
          </div>
        </div>
      </div>
      <div className=" w-full bg-slate-600">
        <p className=" capitalize text-xs text-center text-slate-400">
          All rights rerserved @
          <span className=" text-orange-600 capitalize font-body">
            gadget world
          </span>
        </p>
      </div>
    </div>
  );
};
