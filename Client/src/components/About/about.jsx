import { MdKeyboardArrowRight } from "react-icons/md";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { AiTwotoneShop } from "react-icons/ai";
import { Link } from "react-router-dom";
import about from "../../assets/images/about/about.jpg";

export const About = () => {
  return (
    <div className="  md:w-full py-4">
      <div className=" w-10/12 m-auto">
        <div className=" flex items-center gap-1 capitalize font-body text-sm md:text-sm lg:text-sm ">
          <Link to={"/home"}>
            <p className=" cursor-pointer">home</p>
          </Link>
          <MdKeyboardArrowRight />
          <Link to={"/user"}>
            <p className=" cursor-pointer">about</p>
          </Link>
        </div>
      </div>
      <div>
        <div className=" w-10/12 m-auto py-10 grid md:flex md:justify-between cursor-default">
          <div className=" w-10/12 md:w-1/2 px-4 py-4 grid  ">
            <h2 className=" capitalize font-body text-3xl md:text-5xl font-medium tracking-widest">
              Our Story
            </h2>
            <div className=" flex flex-col gap-3    ">
              <p className=" capitalize font-body text-sm font-light leading-loose">
                launched in 2015,gadget world is india's premier online shopping
                market place with an active presense in tamilnadu.supported by
                wide range of gadgets services. gadget has 10500 sallers and 100
                brands and serves 3 millions customer across the region
              </p>
              <p className=" capitalize font-body text-sm font-light leading-loose">
                gadget world has more than 1 million products to offer,growing
                at a very fast.gadget world offers a diverse assotment in
                categories ranging for customer.
              </p>
            </div>
          </div>
          <div className=" w-10/12 md:w-1/2">
            <img src={about} alt="image" />
          </div>
        </div>
        <div className=" w-10/12 m-auto grid grid-cols-2 gap-2  md:grid-cols-4 md:gap-10 ">
          <div className="group w-5/6 h-40 md:h-auto md:w-full border grid gap-2 place-content-center py-4  hover:bg-red-500 hover:text-white transition duration-300">
            <div className=" w-full flex justify-center">
              <AiTwotoneShop className="  w-16 h-16 border-8 border-slate-300 py-2 rounded-full bg-black text-white group-hover:bg-white group-hover:text-black " />
            </div>
            <h2 className=" text-center capitalize font-body text-3xl font-semibold cursor-default">
              10.5k
            </h2>
            <p className=" text-left capitalize font-body text-xs cursor-default">
              sallers active our site
            </p>
          </div>
          <div className=" group w-5/6 h-40 md:h-auto md:w-full border grid gap-2 place-content-center py-4  hover:bg-red-500 hover:text-white transition duration-300">
            <div className=" w-full flex justify-center">
              <HiOutlineCurrencyRupee className=" w-16 h-16 border-8 border-slate-300 py-2 rounded-full bg-black text-white group-hover:bg-white group-hover:text-black " />
            </div>
            <h2 className=" text-center capitalize font-body text-3xl font-semibold cursor-default">
              33k
            </h2>
            <p className=" text-left capitalize font-body text-xs cursor-default">
              monthly product sale
            </p>
          </div>
          <div className=" group w-5/6 h-40 md:h-auto md:w-full  border grid gap-2 place-content-center py-4  hover:bg-red-500 hover:text-white transition duration-300">
            <div className=" w-full flex justify-center">
              <HiOutlineCurrencyRupee className=" w-16 h-16 border-8 border-slate-300 py-2 rounded-full bg-black text-white group-hover:bg-white group-hover:text-black " />
            </div>
            <h2 className=" text-center capitalize font-body text-3xl font-semibold cursor-default">
              40.5k
            </h2>
            <p className=" text-left capitalize font-body  text-xs cursor-default">
              customer active in our site
            </p>
          </div>
          <div className=" group w-5/6 h-40 md:h-auto md:w-full border grid gap-2 place-content-center py-4 hover:bg-red-500 hover:text-white transition duration-300">
            <div className=" w-full flex justify-center">
              <HiOutlineCurrencyRupee className=" w-16 h-16 border-8 border-slate-300 py-2 rounded-full bg-black text-white group-hover:bg-white group-hover:text-black " />
            </div>
            <h2 className=" text-center capitalize font-body text-3xl font-semibold cursor-default">
              25k
            </h2>
            <p className=" capitalize font-body text-xs px-2 md:px-0  cursor-default">
              annual grosssale in our site
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
