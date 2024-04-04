import { FaIndianRupeeSign } from "react-icons/fa6";

export const Slider = ({ products }) => {
  return (
    <div className=" w-full ">
      <div className=" w-full px-4  grid grid-cols-2 md:grid-cols-4  gap-10 p-2  rounded-lg md:mx-24 my-2 shadow-xl  md:w-5/6 md:gap-8  ">
        {products?.map((product, index) => (
          <div
            key={index}
            className=" w-full h-56 md:h-auto  border rounded-lg my-1 relative bg-slate-300"
          >
            <div className=" w-full">
              <div className=" w-full z-0 cursor-pointer">
                <img
                  src={product.img}
                  alt="Product"
                  className=" w-full h-28 md:h-48 lg:h-48 rounded-xl cursor-pointer "
                />
              </div>
              <div className=" w-full  md:w-5/6 absolute z-10 -my-3 md:mx-3 lg:mx-3 cursor-pointer">
                <h2 className=" font-body bg-yellow-500 rounded-xl text-center text-sm md:text-lg ">
                  {product.desc}
                </h2>
              </div>
              <div className=" w-full  my-4 first-letter:text-lg md:text-2xl lg:text-2xl ">
                <h2 className=" text-center font-semibold font-body cursor-default">
                  {product.tittle}
                </h2>
              </div>
              <div className=" w-full flex justify-between items-center px-1 gap-1">
                <div className=" w-fit flex  gap-1 py-2 justify-around items-center cursor-default">
                  <FaIndianRupeeSign className=" w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6" />
                  <p className=" font-body font-medium text-lg md:text-xl">
                    {product.price}
                  </p>
                </div>
                <div className=" w-3/4 flex justify-center">
                  <button className=" capitalize border px-2 py-1 text-sm md:text-lg rounded-lg font-body bg-green-700 text-white">
                    buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};
