import React from "react";

export const CategoreyItems = ({ item }) => {
  return (
    <div className=" w-5/6 h-2/4  mx-auto grid  sm: grid-cols-2 md:grid-cols-4 gap-14 md:gap-10">
      {item?.map((value, index) => (
        <div
          key={index}
          className=" border-solid border-4 rounded-2xl shadow-2xl h-48 md:h-64"
        >
          <img
            src={value.image}
            className=" w-full h-full rounded-2xl cursor-pointer"
          />
          <div>
            <span className=" flex justify-center font-body py-3 font-bold cursor-default">
              {value.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
