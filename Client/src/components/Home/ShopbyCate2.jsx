import React from "react";

export const ShopByCategory = ({ datas }) => {
  return (
    <div className="w-full grid grid-cols-4 gap-2 md:grid-cols-8 lg:grid-cols-8 mx-4 my-3">
      {datas?.map((value, index) => (
        <div
          key={index}
          className="w-full flex flex-col justify-center items-center "
        >
          <div>
            <img
              src={value.img}
              alt={value.title}
              className=" cursor-pointer w-16 md:w-auto"
            />
          </div>
          <div className=" capitalize font-body font-semibold text-sm md:text-lg lg:text-lg cursor-default">
            <div className=" mx-3 text-center">
              <h2>{value.tittle}</h2>
            </div>
            <div className=" -my-1">
              <h2>{value.tittle2}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
