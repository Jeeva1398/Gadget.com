import airpods from "../../assets/images/categories/Cat 01.gif";
import watch from "../../assets/images/categories/Cat 02.gif";
import speaker from "../../assets/images/categories/Cat 03.gif";
import headphone from "../../assets/images/categories/Cat 04.gif";
import { CategoreyItems } from "./categoryItems";

export const Category = () => {
  const items = [
    {
      id: 1,
      image: airpods,
      name: "Airpods",
    },
    {
      id: 2,
      image: watch,
      name: "Smartwatch",
    },
    {
      id: 3,
      image: speaker,
      name: "Speakers",
    },
    {
      id: 4,
      image: headphone,
      name: "HeadPhones",
    },
  ];

  return (
    <div className=" my-8">
      <h2 className=" font-display capitalize text-center font-semibold tracking-widest cursor-default">
        categori
        <span className=" underline decoration-orange-700">es</span>
      </h2>
      <CategoreyItems item = {items}/>
    </div>
  );
};
