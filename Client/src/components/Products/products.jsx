import React from "react";
import { FaStar } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import { MdVerified } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import banner from "../../assets/images/Airpods/banner2.jpg";
import headBanner from "../../assets/images/headphones/banner2.jpg";
import bandBanner from "../../assets/images/neckbands/banner.webp";
import speakerBanner from "../../assets/images/speakers/banner.jpg";
import watchBanner from "../../assets/images/watches/banner.jpg";
import { FaArrowCircleRight } from "react-icons/fa";

export const Products = ({ datas }) => {
  console.log(datas);
  const [airpods, headphones, neckband, speaker, smartwatch] = datas;
  console.log(airpods, headphones, neckband, speaker, smartwatch);

  return (
    <div className=" w-full ">
      <div className="">
        <div className=" w-full  m-auto px-2 flex justify-between  ">
          <h1 className=" font-display text-center my-2 font-semibold tracking-wider cursor-default mx">
            airpopds
          </h1>
          <div className=" flex items-center gap-1 capitalize font-body cursor-pointer  ">
            <p className=" text-cyan-500">view all</p>
            <FaArrowCircleRight className=" text-cyan-500" />
          </div>
        </div>
        <img
          src={banner}
          alt="Wireless Airpods"
          className=" w-full h-36 md:h-72 object-fill my-2 md:px-5 px-1"
        />
        <div className=" w-11/12  grid grid-cols-2 mx-3 md:m-auto   gap-3  md:w-[90%] md:grid-cols-3 md:gap-2 ">
          {airpods?.map((value, index) => (
            <div
              key={index}
              className=" w-full h-60 bg-slate-300 rounded-lg md:h-[170px] md:flex md:gap-3 my-3 "
            >
              <div className=" w-full md:w-1/2 md:h-40 p-1 md:p-0">
                <img
                  src={value.img}
                  alt={value.title}
                  className=" w-full h-36  md:h-40 md:m-1  rounded-lg "
                />
              </div>
              <div className=" md:w-1/2 ">
                <div className=" md:hidden">
                  <div className=" flex justify-start items-center mx-1   ">
                    <FaStar className=" w-3 h-3 text-yellow-300" />
                    <p className=" font-body font-extralight text-xs">
                      {value.rating}
                    </p>
                    <div className=" flex justify-start items-center text-xs">
                      <TbMinusVertical />
                      <p className=" font-body font-extralight">
                        {value.verified}
                      </p>
                      <MdVerified className=" text-cyan-400" />
                    </div>
                  </div>
                  <div className=" border-b-2 border-black  w-5/6 mx-4 ">
                    <h2 className=" font-bold text-lg font-body">
                      {value.title}
                    </h2>
                  </div>
                  <div className="flex justify-around">
                    <div className=" flex items-center justify-center">
                      <FaIndianRupeeSign />
                      <p>{value.price}</p>
                    </div>
                    <div className=" bg-black my-1 rounded-lg flex py-1">
                      <button className=" capitalize  text-white px-2 py-1 font-body text-xs font-semibold">
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-full hidden md:block">
                  <div className=" flex justify-start items-center mx-4 my-1   ">
                    <FaStar className=" w-3 h-3 text-yellow-300" />
                    <p className=" font-body font-semibold text-xs">
                      {value.rating}
                    </p>
                    <div className=" flex justify-start items-center text-xs">
                      <TbMinusVertical />
                      <p className=" font-body font-semibold">
                        {value.verified}
                      </p>
                      <MdVerified className=" text-cyan-400" />
                    </div>
                  </div>
                  <div className=" border-b border-black w-full justify-start ">
                    <h2 className=" font- text-lg font-body font-semibold">
                      {value.title}
                    </h2>
                    <div className=" flex items-center">
                      <FaIndianRupeeSign />
                      <p className=" text-lg font-semibold">{value.price}</p>
                    </div>
                  </div>
                  <div className=" my-3 rounded-lg w-full ">
                    <p className=" bg-slate-400 w-5/6 rounded-lg text-center text-sm font-light">
                      {value.desc}
                    </p>
                    <div className=" flex items-end justify-end ">
                      <button className=" capitalize bg-black  text-white px-2 py-1 font-body font-semibold my-4 mx-2 rounded-lg ">
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full my-5 md:mx-0">
        <div className=" w-full px-2 flex justify-between ">
          <h1 className=" font-display text-center my-2 font-semibold md:text-3xl tracking-wider cursor-default mx">
            headphones
          </h1>
          <div className=" flex items-center gap-1 capitalize font-body cursor-pointer  ">
            <p className=" text-cyan-500">view all</p>
            <FaArrowCircleRight className=" text-cyan-500" />
          </div>
        </div>
        <img
          src={headBanner}
          alt="Wireless Airpods"
          className=" w-full h-36 md:h-72 object-fill my-2 px-2"
        />
        <div className=" w-11/12 md:m-auto  grid grid-cols-2 gap-3 mx-4 my-5 md:w-[90%] md:grid-cols-3 md:gap-5 ">
          {headphones?.map((value, index) => (
            <div
              key={index}
              className="  h-60 bg-slate-300 rounded-lg w-full md:h-[170px] md:flex md:gap-3 md:my-3 "
            >
              <div className=" w-full md:w-1/2 md:h-40 p-1 md:p-0">
                <img
                  src={value.img}
                  alt={value.title}
                  className=" w-full h-36  md:h-40 md:m-1  rounded-lg "
                />
              </div>
              <div className=" md:w-1/2 ">
                <div className=" md:hidden">
                  <div className=" flex justify-start items-center mx-1   ">
                    <FaStar className=" w-3 h-3 text-yellow-300" />
                    <p className=" font-body md:font-extralight lg:font-extralight text-xs">
                      {value.rating}
                    </p>
                    <div className=" flex justify-start items-center text-xs">
                      <TbMinusVertical />
                      <p className=" font-body md:font-extralight lg:font-extralight">
                        {value.verified}
                      </p>
                      <MdVerified className=" text-cyan-400" />
                    </div>
                  </div>
                  <div className=" border-b-2 border-black  w-5/6 mx-4  ">
                    <h2 className=" font-bold md:text-lg lg:text-lg font-body text-nowrap truncate ">
                      {value.title}
                    </h2>
                  </div>
                  <div className="flex justify-around">
                    <div className=" flex items-center justify-center">
                      <FaIndianRupeeSign />
                      <p>{value.price}</p>
                    </div>
                    <div className=" bg-black my-1 rounded-lg">
                      <button className=" capitalize  text-white px-2 py-1 font-body font-semibold">
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-full hidden md:block">
                  <div className=" w-full flex justify-start items-center mx-4 my-1   ">
                    <FaStar className=" w-3 h-3 text-yellow-300" />
                    <p className=" font-body font-semibold  text-xs capitalize">
                      {value.rating}
                    </p>
                    <div className=" flex justify-start items-center text-xs">
                      <TbMinusVertical />
                      <p className=" font-body font-semibold">
                        {value.verified}
                      </p>
                      <MdVerified className=" text-cyan-400" />
                    </div>
                  </div>
                  <div className=" border-b border-black w-full justify-start ">
                    <h2 className=" font- text-lg font-body font-semibold text-nowrap truncate">
                      {value.title}
                    </h2>
                    <div className=" flex items-center">
                      <FaIndianRupeeSign />
                      <p className=" text-lg font-semibold">{value.price}</p>
                    </div>
                  </div>
                  <div className=" my-3 rounded-lg w-full ">
                    <p className=" bg-slate-400 w-5/6 rounded-lg text-center text-sm font-light">
                      {value.desc}
                    </p>
                    <div className=" flex items-end justify-end ">
                      <button className=" capitalize bg-black  text-white px-2 py-1 font-body font-semibold my-4 mx-2 rounded-lg ">
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full  my-5 md:mx-0">
        <div className=" w-full px-2 flex justify-between ">
          <h1 className=" font-display text-center my-2 font-semibold md:text-3xl tracking-wider cursor-default ">
            bluetooth neckbands
          </h1>
          <div className=" flex items-center gap-1 capitalize font-body cursor-pointer  ">
            <p className=" text-cyan-500">view all</p>
            <FaArrowCircleRight className=" text-cyan-500" />
          </div>
        </div>
        <img
          src={bandBanner}
          alt="neckbands"
          className="w-full h-36 md:h-72 object-fill my-2 px-2 cursor-pointer"
        />
        <div className=" w-11/12 md:m-auto   grid grid-cols-2 gap-4 mx-4 my-5 md:w-[90%] md:grid-cols-3 md:gap-5 ">
          {neckband?.map((value, index) => (
            <div
              key={index}
              className=" w-full h-64 bg-slate-300 rounded-lg px-1 md:px-0 lg:px-0  md:h-[170px] md:flex md:gap-3 shadow-lg md:my-3  "
            >
              <div className=" w-full md:w-1/2 md:h-40 p-1 md:p-0">
                <img
                  src={value.img}
                  alt={value.title}
                  className=" w-full h-36  md:h-40 md:m-1  rounded-lg cursor-pointer "
                />
              </div>
              <div className=" md:w-1/2 ">
                <div className=" md:hidden lg:hidden cursor-default">
                  <div className=" flex justify-start items-center mx-1   ">
                    <FaStar className=" w-3 h-3 text-yellow-300" />
                    <p className=" font-body md:font-extralight lg:font-extralight text-xs cursor-default">
                      {value.rating}
                    </p>
                    <div className=" flex justify-start items-center text-xs cursor-default">
                      <TbMinusVertical />
                      <p className=" font-body md:font-extralight lg:font-extralight">
                        {value.verified}
                      </p>
                      <MdVerified className=" text-cyan-400" />
                    </div>
                  </div>
                  <div className=" border-b-2 border-black  w-5/6 mx-4 cursor-default">
                    <h2 className=" font-bold text-lg font-body">
                      {value.title}
                    </h2>
                  </div>
                  <div className=" py-2 flex justify-around">
                    <div className=" flex items-center justify-center cursor-default">
                      <FaIndianRupeeSign />
                      <p className=" font-body font-medium">{value.price}</p>
                    </div>
                    <div className=" bg-black my-1 rounded-lg">
                      <button className=" capitalize  text-white px-2 py-1 font-body font-semibold">
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-full hidden md:block">
                  <div className=" w-full flex justify-start items-center mx-4 my-1 cursor-default  ">
                    <FaStar className=" w-3 h-3 text-yellow-600" />
                    <p className=" font-body font-semibold text-xs capitalize">
                      {value.rating}
                    </p>
                    <div className=" flex justify-start items-center text-xs">
                      <TbMinusVertical />
                      <p className=" font-body font-semibold">
                        {value.verified}
                      </p>
                      <MdVerified className=" text-cyan-400" />
                    </div>
                  </div>
                  <div className=" border-b border-black w-full justify-start  ">
                    <h2 className=" font- text-lg font-body font-semibold cursor-default">
                      {value.title}
                    </h2>
                    <div className=" flex items-center cursor-default">
                      <FaIndianRupeeSign />
                      <p className=" text-xl font-semibold">{value.price}</p>
                    </div>
                  </div>
                  <div className=" my-5 rounded-lg w-full cursor-default ">
                    <p className=" bg-slate-400 w-5/6 rounded-lg text-center text-sm font-light">
                      {value.desc}
                    </p>
                    <div className=" flex items-end justify-end ">
                      <button className=" capitalize bg-black  text-white px-2 py-1 font-body font-semibold my-4 mx-2 rounded-lg cursor-pointer ">
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full my-5 md:mx-0">
        <div className=" w-full flex justify-between px-2 ">
          <h1 className=" font-display text-center my-2 font-semibold md:text-3xl tracking-wider cursor-default mx">
            speakers
          </h1>
          <div className=" flex items-center gap-1 capitalize font-body cursor-pointer  ">
            <p className=" text-cyan-500">view all</p>
            <FaArrowCircleRight className=" text-cyan-500" />
          </div>
        </div>
        <img
          src={speakerBanner}
          alt="Wireless Airpods"
          className=" w-full h-40 md:h-72 object-fill my-2 px-2"
        />
        <div className=" w-11/12 md:m-auto grid grid-cols-2 gap-3 mx-4 my-5 md:w-[90%] md:grid-cols-3 md:gap-5 ">
          {speaker?.map((value, index) => (
            <div
              key={index}
              className=" h-60 bg-slate-300 rounded-lg w-full md:h-[170px] md:flex md:gap-3 md:my-3   "
            >
              <div className=" w-full md:w-1/2 md:h-40 p-1 md:p-0">
                <img
                  src={value.img}
                  alt={value.title}
                  className=" w-full h-36  md:h-40 md:m-1  rounded-lg cursor-pointer "
                />
              </div>
              <div className=" md:w-1/2 ">
                <div className=" md:hidden cursor-default">
                  <div className=" flex justify-start items-center mx-1   ">
                    <FaStar className=" w-3 h-3 text-yellow-300" />
                    <p className=" font-body md:font-extralight lg:font-extralight text-xs cursor-default">
                      {value.rating}
                    </p>
                    <div className=" flex justify-start items-center text-xs cursor-default">
                      <TbMinusVertical />
                      <p className=" font-body md:font-extralight lg:font-extralight">
                        {value.verified}
                      </p>
                      <MdVerified className=" text-cyan-400" />
                    </div>
                  </div>
                  <div className=" border-b-2 border-black  w-5/6 mx-4 cursor-default">
                    <h2 className=" font-bold text-lg font-body capitalize">
                      {value.title}
                    </h2>
                  </div>
                  <div className="flex justify-around">
                    <div className=" flex items-center justify-center cursor-default">
                      <FaIndianRupeeSign />
                      <p className=" font-body font-medium">{value.price}</p>
                    </div>
                    <div className=" bg-black my-1 rounded-lg">
                      <button className=" capitalize  text-white px-2 py-1 font-body font-semibold">
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-full hidden md:block">
                  <div className=" w-full flex justify-start items-center mx-4 my-1 cursor-default  ">
                    <FaStar className=" w-3 h-3 text-yellow-600" />
                    <p className=" font-body font-semibold text-xs capitalize ">
                      {value.rating}
                    </p>
                    <div className=" flex justify-start items-center text-xs">
                      <TbMinusVertical />
                      <p className=" font-body font-semibold">
                        {value.verified}
                      </p>
                      <MdVerified className=" text-cyan-400" />
                    </div>
                  </div>
                  <div className=" border-b border-black w-full justify-start  ">
                    <h2 className=" font- text-lg font-body font-semibold cursor-default">
                      {value.title}
                    </h2>
                    <div className=" flex items-center cursor-default">
                      <FaIndianRupeeSign />
                      <p className=" text-lg font-semibold">{value.price}</p>
                    </div>
                  </div>
                  <div className=" my-3 rounded-lg w-full cursor-default ">
                    <p className=" bg-slate-400 w-5/6 rounded-lg text-center text-sm font-light">
                      {value.desc}
                    </p>
                    <div className=" flex items-end justify-end ">
                      <button className=" capitalize bg-black  text-white px-2 py-1 font-body font-semibold my-4 mx-2 rounded-lg cursor-pointer ">
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" w-full my-5 md:mx-0">
        <div className=" w-full flex justify-between px-2 ">
          <h1 className=" font-display md:text-3xl text-center my-2 font-semibold tracking-wider cursor-default mx">
            smartwatches
          </h1>
          <div className=" flex items-center gap-1 capitalize font-body cursor-pointer  ">
            <p className=" text-cyan-500">view all</p>
            <FaArrowCircleRight className=" text-cyan-500" />
          </div>
        </div>
        <img
          src={watchBanner}
          alt="Wireless Airpods"
          className=" w-full h-40 md:h-72 object-fill my-2 px-2"
        />
        <div className="w-11/12 md:m-auto  grid grid-cols-2 gap-3 mx-4 my-5 md:w-[90%] md:grid-cols-3 md:gap-5 ">
          {smartwatch?.map((value, index) => (
            <div
              key={index}
              className=" h-60 bg-slate-300 rounded-lg w-full md:h-[170px] md:flex md:gap-3 md:my-3  "
            >
              <div className=" w-full md:w-1/2 md:h-40 p-1 md:p-0">
                <img
                  src={value.img}
                  alt={value.title}
                  className=" w-full h-36  md:h-40 md:m-1  rounded-lg cursor-pointer "
                />
              </div>
              <div className=" md:w-1/2 ">
                <div className=" md:hidden cursor-default">
                  <div className=" flex justify-start items-center mx-1   ">
                    <FaStar className=" w-3 h-3 text-yellow-300" />
                    <p className=" font-body md:font-extralight lg:font-extralight text-xs cursor-default">
                      {value.rating}
                    </p>
                    <div className=" flex justify-start items-center text-xs cursor-default">
                      <TbMinusVertical />
                      <p className=" font-body md:font-extralightm lg:font-extralight">
                        {value.verified}
                      </p>
                      <MdVerified className=" text-cyan-400" />
                    </div>
                  </div>
                  <div className=" border-b-2 border-black  w-5/6 mx-4 cursor-default">
                    <h2 className=" font-bold text-lg font-body">
                      {value.title}
                    </h2>
                  </div>
                  <div className="flex justify-around">
                    <div className=" flex items-center justify-center cursor-default">
                      <FaIndianRupeeSign />
                      <p className=" font-body font-medium">{value.price}</p>
                    </div>
                    <div className=" bg-black my-1 rounded-lg">
                      <button className=" capitalize  text-white px-2 py-1 font-body font-semibold">
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-full hidden md:block">
                  <div className=" w-full flex justify-start items-center mx-4 my-1 cursor-default  ">
                    <FaStar className=" w-3 h-3 text-yellow-600" />
                    <p className=" font-body font-semibold text-xs capitalize ">
                      {value.rating}
                    </p>
                    <div className=" flex justify-start items-center text-xs">
                      <TbMinusVertical />
                      <p className=" font-body font-semibold">
                        {value.verified}
                      </p>
                      <MdVerified className=" text-cyan-400" />
                    </div>
                  </div>
                  <div className=" border-b border-black w-full justify-start  ">
                    <h2 className=" font- text-lg font-body font-semibold cursor-default">
                      {value.title}
                    </h2>
                    <div className=" flex items-center cursor-default">
                      <FaIndianRupeeSign />
                      <p className=" text-lg font-semibold">{value.price}</p>
                    </div>
                  </div>
                  <div className=" my-3 rounded-lg w-full cursor-default ">
                    <p className=" bg-slate-400 w-5/6 rounded-lg text-center text-sm font-light">
                      {value.desc}
                    </p>
                    <div className=" flex items-end justify-end ">
                      <button className=" capitalize bg-black  text-white px-2 py-1 font-body font-semibold my-4 mx-2 rounded-lg cursor-pointer ">
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
