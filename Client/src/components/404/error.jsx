import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

export const PageNotFound = () => {
  return (
    <div className=" w-full py-16 ">
      <div className=" w-3/4 m-auto grid place-content-center gap-16">
        <h2 className=" capitalize font-body text-7xl font-medium cursor-default">
          404 page not found
        </h2>
        <p className=" capitalize font-body text-lg text-center cursor-default">
          your visited page not found. you may go home page.{" "}
        </p>
        <div className=" w-full flex justify-center">
          <Link to={"/"}>
            <button className=" bg-red-500 px-2 py-2 capitalize font-body text-sm text-white">
              back to home page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
