import airdopes from "../../assets/images/Airdops5.gif";
import neckband from "../../assets/images/neckband5.webp";
import speaker from "../../assets/images/speaker2.webp";
import watch from "../../assets/images/watch6.webp";
import airpods2 from '../../assets/images/Airdopes2.webp';
import neckband2 from '../../assets/images/neckband3.webp';
import watch2 from '../../assets/images/DealsWatch.png';
import speaker2 from '../../assets/images/speaker1.webp';
import { Slider } from "./Slider";

export const Card = () => {
    const products = [
      {
        tittle: "Immortal 131",
        img: airdopes,
        price: 1200,
        desc: "36 Hours Playback",
      },
      {
        tittle: "Boat Life",
        img: neckband,
        price: 1600,
        desc: "48 Hours Playback",
      },
      {
        tittle: "Sound BT",
        img: speaker,
        price: 2500,
        desc: "48 Hours Playback",
      },
      {
        tittle: "Wave Call",
        img: watch,
        price: 2000,
        desc: "BT Calling",
      },
      {
        tittle:"Nirvana ion",
        img: airpods2,
        price:2299,
        desc:"40 Hours Playback"
      },
      {
        tittle:"Rockerz max",
        img: neckband2,
        price:1299,
        desc:"60 Hours Playback"
      },
      {
        tittle:"Ultima Select",
        img:watch2,
        price:2999,
        desc:"AMOLED Display"
      },
      {
        tittle:"Avantae Bar",
        img:speaker2,
        price:6999,
        desc:"Dolby Atoms"
      }
    ];
  
    return (
      <div className=" w-full">
        <h1 className=" font-display text-xl font-bold text-center tracking-wider cursor-pointer">
          new arrivals
        </h1>
       <Slider products={products}/>
      </div>
    );
  };