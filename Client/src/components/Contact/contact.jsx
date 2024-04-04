import { MdKeyboardArrowRight } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className=" md:w-10/12 md:m-auto md:py-10 py-10">
      <div className=" w-10/12 m-auto flex items-center gap-1 capitalize font-body text-sm md:text-sm lg:text-sm ">
        <Link to={"/"}>
          <p className=" cursor-pointer">home</p>
        </Link>
        <MdKeyboardArrowRight />
        <Link to={"/contact"}>
          <p className=" cursor-pointer">contact</p>
        </Link>
      </div>
      <div className=" w-full grid gap-3  md:w-full md:m-auto md:flex md:gap-4 md:justify-between md:py-20 py-10 ">
        <div className=" w-10/12 m-auto md:w-1/3 px-8 py-4 shadow-lg">
          <div className=" w-full grid gap-2 py-4 border-b-2 border-black capitalize font-body">
            <div className=" flex items-center gap-2">
              <IoCallOutline className=" w-10 h-10 bg-red-500 text-white rounded-full px-2 py-2" />
              <h2 className=" text-lg font-semibold cursor-pointer">call to us</h2>
            </div>
            <p className=" text-xs cursor-default ">we are available 24/7, 7 days a week</p>
            <p className=" text-xs cursor-default">phone +918567654387</p>
          </div>
          <div className=" w-full grid gap-2 py-4  capitalize font-body">
            <div className=" flex items-center gap-2">
              <MdOutlineMail className=" w-10 h-10 bg-red-500 text-white rounded-full px-2 py-2" />
              <h2 className=" text-lg font-semibold">write to us</h2>
            </div>
            <div className=" grid gap-4 py-2">
              <p className=" text-xs ">
                fill out our form and we will contact you within in 24 hours
              </p>
              <p className=" text-xs">email: customer@gadgetworld.com</p>
              <p className=" text-xs">email: support@gadgetworld.com</p>
            </div>
          </div>
        </div>
        <div className=" w-10/12 m-auto  md:w-2/3 grid gap-4 shadow-lg px-4  py-10">
          <div className=" w-full grid gap-3 md:w-full md:flex md:justify-between px-2 ">
            <input type="text" placeholder=" Your Name" className=" w-10/12 h-10 px-2  md:h-10 bg-slate-100"/>
            <input type=" email" placeholder=" Your Email" className=" w-10/12 h-10 px-2  md:h-10 bg-slate-100"/>
            <input type="number" placeholder=" Your Number" className=" w-10/12 h-10 px-2 md:h-10 bg-slate-100"/>
          </div>
          <div className=" w-full px-2">
            <input type=" text" placeholder=" Your Message" className=" px-2 w-full h-36 bg-slate-100  placeholder:" />
          </div>
          <div className=" w-full flex justify-end px-2 md:px-0">
            <button className=" px-2 py-3 capitalize font-body bg-red-500 text-xs text-white">send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};
