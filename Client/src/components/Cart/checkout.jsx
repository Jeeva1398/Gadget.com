import { Link } from "react-router-dom";
import headphone from "../../assets/images/headphones/list.png";
import speaker from "../../assets/images/speakers/list2.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import bank from "../../assets/images/cards/card.png";
import gpay from "../../assets/images/cards/gpay.png";
import phonepe from "../../assets/images/cards/phonepe.png";

export const Checkout = () => {
  const items = [
    {
      img: headphone,
      title: "stone spinix",
      price: 3499,
    },

    {
      img: speaker,
      title: "ultima select",
      price: 2999,
    },
  ];
  return (
    <div className=" my-9">
      <div className=" flex items-center gap-1 capitalize font-body text-xs">
        <Link to={"/home"}>
          <p className=" cursor-pointer">home</p>
        </Link>
        <MdKeyboardArrowRight />
        <Link to={"/user"}>
          <p className=" cursor-pointer">my account</p>
        </Link>
        <MdKeyboardArrowRight />
        <Link to={"/cart"}>
          <p className=" cursor-pointer">cart</p>
        </Link>
        <MdKeyboardArrowRight />
        <Link to={"/checkout"}>
          <p className=" cursor-pointer">checkout</p>
        </Link>
      </div>

      <div className=" w-5/6 my-8 m-auto">
        <h2 className=" font-body capitalize md:text-2xl font-semibold cursor-default">
          billing details
        </h2>
        <div className=" w-full grid place-content-center gap-8 md:gap-0 lg:gap-0 md:flex md:justify-between lg:flex lg:justify-between">
          <div className=" w-full md:w-2/5 grid gap-2">
            <div className=" w-full py-2 grid gap-2">
              <label className=" capitalize font-body text-sm font-normal">
                first name<span className=" text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                className=" w-full border h-8 bg-gray-100"
              />
            </div>
            <div className=" w-full py-2 grid gap-2">
              <label className=" capitalize font-body text-sm font-normal">
                company name<span className=" text-red-600">*</span>
              </label>
              <input type="text" className=" w-full border h-8 bg-gray-100" />
            </div>
            <div className=" w-full py-2 grid gap-2">
              <label className=" capitalize font-body text-sm font-normal">
                street address<span className=" text-red-600">*</span>
              </label>
              <input type="text" className=" w-full border h-8 bg-gray-100" />
            </div>
            <div className=" w-full py-2 grid gap-2">
              <label className=" capitalize font-body text-sm font-normal">
                appartment,floor,etc<span></span>
              </label>
              <input type="text" className=" w-full border h-8 bg-gray-100" />
            </div>
            <div className=" w-full py-2 grid gap-2">
              <label className=" capitalize font-body text-sm font-normal">
                town/city<span>*</span>
              </label>
              <input type="text" className=" w-full border h-8 bg-gray-100" />
            </div>
            <div className=" w-full py-2 grid gap-2">
              <label className=" capitalize font-body text-sm font-normal cursor-default">
                phone number<span className=" text-red-600">*</span>
              </label>
              <input type="number" className=" w-full border h-8 bg-gray-100" />
            </div>
            <div className=" w-full py-2 grid gap-2">
              <label className=" capitalize font-body text-sm font-normal cursor-default">
                email address<span className=" text-red-600">*</span>
              </label>
              <input type="email" className=" w-full border h-8 bg-gray-100" />
            </div>
            <div className=" flex gap-2">
              <input type="checkbox" className=" w-4 h-4" />
              <p className=" capitalize text-xs cursor-default">
                save this inforamtion for faster checkout next time
              </p>
            </div>
          </div>
          <div className=" w-full md:w-6/12 grid gap-4 md:gap-2 ">
            <h2 className=" font-body capitalize text-xl font-semibold md:hidden lg:hidden">product details</h2>
            <div className=" w-11/12 flex justify-between">
              <div className=" flex items-center">
                <img
                  src={headphone}
                  alt="headphone"
                  className=" w-12 cursor-pointer"
                />
                <h2 className=" capitalize font-body text-sm cursor-pointer">
                  rokerz 254F
                </h2>
              </div>
              <div className=" flex items-center cursor-default">
                <MdOutlineCurrencyRupee />
                <p>1499</p>
              </div>
            </div>
            <div className=" w-11/12 flex justify-between">
              <div className=" flex items-center">
                <img
                  src={speaker}
                  alt="headphone"
                  className=" w-12 cursor-pointer"
                />
                <h2 className=" capitalize font-body text-sm cursor-pointer">
                  stone pro
                </h2>
              </div>
              <div className=" flex items-center cursor-default">
                <MdOutlineCurrencyRupee />
                <p>1999</p>
              </div>
            </div>
            <div className=" w-11/12 flex justify-between items-center border-b-2 border-gray-500 capitalize font-body py-2">
              <h2 className=" capitalizen font-body text-sm">subtotal:</h2>
              <div className=" flex items-center">
                <MdOutlineCurrencyRupee />
                <p>3498</p>
              </div>
            </div>
            <div className=" w-11/12 flex justify-between border-b-2 border-gray-500 capitalize font-body cursor-default text-sm py-2 ">
              <p>shipping:</p>
              <p>free</p>
            </div>
            <div className=" w-11/12 flex justify-between items-center ">
              <p className=" capitalize font-body text-sm">total:</p>
              <div className=" flex items-center">
                <MdOutlineCurrencyRupee />
                <p>3498</p>
              </div>
            </div>
            <div className=" w-11/12 flex justify-between items-center">
              <div className=" flex justify-between items-center capitalize gap-2">
                <input type="radio" className=" border-gray-500" />
                <p className=" cursor-default">bank</p>
              </div>
              <div>
                <img
                  src={bank}
                  alt="bank payments"
                  className=" w-14 h-14 cursor-pointer"
                />
              </div>
            </div>
            <div className=" w-11/12 flex justify-between items-center">
              <div className=" flex justify-center items-center gap-2 uppercase">
                <input type="radio" />
                <p className=" cursor-default font-body">upi</p>
              </div>
              <div className=" flex items-center">
                <img
                  src={gpay}
                  alt="gapy"
                  className=" w-14 h-14 cursor-pointer"
                />
                <img
                  src={phonepe}
                  alt="phonepe"
                  className=" w-10 h-10 cursor-pointer"
                />
              </div>
            </div>
            <div className=" w-11/12 flex justify-start items-center capitalize gap-2">
              <input type="radio" />
              <p className=" cursor-default font-body">cash on dedlivery</p>
            </div>
            <div className=" flex items-center gap-2">
              <input type="text" className=" border border-red-500 h-10" />
              <button className=" border px-2 capitalize py-2 bg-red-500 text-white font-body">
                apply coupon
              </button>
            </div>

            <div>
              <Link>
                <button className=" w-56 border px-2 capitalize py-2 bg-red-500 text-white font-body text-lg">
                  place order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
