import item1 from "../../assets/images/Airpods/list.png";
import item2 from "../../assets/images/headphones/list.png";
import item3 from "../../assets/images/watches/list.png";
import item4 from "../../assets/images/speakers/list2.png";
import airpod from "../../assets/images/Airdopes6.gif";
import watch from "../../assets/images/watch6.webp";
import neckband from "../../assets/images/neckband3.webp";
import speaker from "../../assets/images/speaker2.webp";
import { MdDelete } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const WishList = () => {
  const items = [
    {
      img: item1,
      title: "Immortal",
      price: 2799,
    },
    {
      img: item4,
      title: "stone spinix",
      price: 3499,
    },
    {
      img: item2,
      title: "rockid rush",
      price: 1499,
    },
    {
      img: item3,
      title: "ultima select",
      price: 2999,
    },
  ];

  const datas = [
    
    {
      title: "Rokerz 1200F",
      img: neckband,
      price: 2099,
      rating:4.8,
      
    },
    {
      title: "stone pro",
      img: airpod,
      price: 1499,
      rating:4.6,
    },
    {
      title: "Lunar Wave",
      img: watch,
      price: 2299,
      rating:4.7,
      
    },
    {
      title: "Stone ignite",
      img: speaker,
      price: 1599,
      rating:4.5
      
    },
  ];
  return (
    <div className=" w-4/5 m-auto my-11">
      <div className=" w-full flex justify-between items-center">
        <h2 className=" capitalize font-body text-lg font-medium cursor-default">
          wishlist(4)
        </h2>
        <Link to={"/cart"}>
          <button className=" capitalize  py-2 px-2 font-body text-lg shadow-md">
            move all to bag
          </button>
        </Link>
      </div>
      <div className=" w-full grid grid-cols-3 md:grid-cols-4 gap-4 my-4 ">
        {items?.map((lists, index) => (
          <div key={index} className=" w-full md:w-11/12 h-52 md:h-60 shadow-md ">
            <div className="w-full h-32 md:h-40  flex flex-row justify-end  bg-slate-200">
              <img src={lists.img} alt={lists.title} className=" w-4/5" />
              <div className=" bg-white h-7 rounded-full p-1 flex justify-center items-center">
                <MdDelete className=" w-5 h-5" />
              </div>
            </div>
            <div className=" w-full bg-black flex  justify-center items-center gap-1">
                <FaCartArrowDown  className=" text-white"/>
                <Link to={'/cart'}>
                <button className=" text-white capitalize font-body text-xs">add to cart</button>
                </Link>
            </div>
            <div className=" cursor-default">
                <h2 className=" capitalize font-body text-lg font-medium">{lists.title}</h2>
                <h2 className=" font-body ">{lists.price}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full flex justify-between items-center">
        <h2 className=" capitalize font-body text-lg font-medium cursor-default">
          for you
        </h2>
        <Link to={"/products"}>
          <button className=" capitalize  py-2 px-2 font-body text-lg shadow-md">
            view all
          </button>
        </Link>
      </div>
      <div className=" w-full grid grid-cols-3 md:grid-cols-4 gap-4 my-4">
            {
                datas?.map((values,index)=>(
                    <div key={index} className=" w-full md:w-11/12 h-52 md:h-64 my-2 shadow-md ">
            <div className="w-full h-32  flex flex-row justify-end  bg-slate-200">
              <img src={values.img} alt={values.title} className=" w-full" />
              
            </div>
            <div className=" w-full bg-black flex  justify-center items-center gap-1">
                <FaCartArrowDown  className=" text-white"/>
                <Link to={'/cart'}>
                <button className=" text-white capitalize font-body text-xs">add to cart</button>
                </Link>
            </div>
            <div className=" cursor-default">
                <h2 className=" capitalize font-body text-lg font-medium">{values.title}</h2>
                <h2 className=" font-body ">{values.price}</h2>
                <div className=" flex items-center">
                <FaStar className=" text-yellow-400 w-4 h-4" />
                <FaStar className=" text-yellow-400 w-4 h-4"/>
                <FaStar className=" text-yellow-400 w-4 h-4"/>
                <FaStar className=" text-yellow-400 w-4 h-4"/>
                <FaStar className=" text-yellow-400 w-4 h-4"/>
                <p>(55)</p>
                </div>
            </div>
          </div>
                ))
            }
      </div>
      
    </div>
  );
};
