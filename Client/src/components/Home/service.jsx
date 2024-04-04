import ship from "../../assets/images/services/free-shipping.png";
import replacement from "../../assets/images/services/replacement.png";
import tax from "../../assets/images/services/tax.png";
import warrenty from "../../assets/images/services/warranty.png";

export const Service = () => {
  const datas = [
    {
      img: ship,
      title: "free shipping",
    },
    {
      img: replacement,
      title: "7 days replacement",
    },
    {
      img: tax,
      title: "G.S.T Billing",
    },
    {
      img: warrenty,
      title: "1 year warranty",
    },
  ];

  return (
    <div className=" w-full md:w-4/5 m-auto my-10 flex items-center justify-around">
      {datas?.map((value, index) => (
        <div key={index} >
          <div className=" flex justify-center items-center">
            <img src={value.img} alt="image" className=" w-14 h-14 md:w-20 md:h-20 lg:w-20 lg:h-20" />
          </div>
          <div>
            <h2 className=" font-body  font-semibold md:text-xl lg:text-xl capitalize text-center">{value.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
