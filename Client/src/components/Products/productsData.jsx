import React from "react";
import air1 from "../../assets/images/Airpods/Airpods1.webp";
import air2 from "../../assets/images/Airpods/Airpods2.webp";
import air3 from "../../assets/images/Airpods/Airpods3.webp";
import air4 from "../../assets/images/Airpods/Airpods4.webp";
import air5 from "../../assets/images/Airpods/Airpods5.gif";
import air6 from '../../assets/images/Airpods/Airpods6.gif';
import head1 from '../../assets/images/headphones/head1.webp';
import head2 from '../../assets/images/headphones/head2.webp';
import head3 from '../../assets/images/headphones/head3.webp';
import head4 from '../../assets/images/headphones/head4.webp';
import head5 from '../../assets/images/headphones/head5.webp';
import head6 from '../../assets/images/headphones/head6.jpg';
import band1 from '../../assets/images/neckbands/neckband1.webp';
import band2 from '../../assets/images/neckbands/neckband2.webp';
import band3 from '../../assets/images/neckbands/neckband3.webp';
import band4 from '../../assets/images/neckbands/neckband4.webp';
import band5 from '../../assets/images/neckbands/neckband5.jpg';
import band6 from '../../assets/images/neckbands/neckband6.jpg'
import speaker1 from '../../assets/images/speakers/speaker1.webp';
import speaker2 from '../../assets/images/speakers/speaker2.webp';
import speaker3 from '../../assets/images/speakers/speaker3.webp';
import speaker4 from '../../assets/images/speakers/speaker4.webp';
import speaker5 from '../../assets/images/speakers/speaker5.webp';
import speaker6 from '../../assets/images/speakers/speaker6.webp';
import watch1 from '../../assets/images/watches/watch1.webp';
import watch2 from '../../assets/images/watches/watch2.webp';
import watch3 from '../../assets/images/watches/watch3.webp';
import watch4 from '../../assets/images/watches/watch4.webp';
import watch5 from '../../assets/images/watches/watch5.webp';
import watch6 from '../../assets/images/watches/watch6.webp';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import { Products} from './products';

export const ProductData = () => {
    const aipods = [
      {
        title: "Airdopes 131",
        img: air1,
        price: 899,
        desc: "60 Hours PlayBack",
        rating:4.9,
        verified:600
      },
      {
        title: "Airdopes 141",
        img: air2,
        price: 1299,
        desc: "42 Hours PlayBack",
        rating:4.5,
        verified:425
      },
      {
        title: "Airdopes 121",
        img: air3,
        price: 1299,
        desc: "45 Hours PlayBack",
        rating:4.8,
        verified:1200
      },
      {
        title: "Airdopes 161",
        img: air4,
        price: 999,
        desc: "40 Hours PlayBack",
        rating:4.6,
        verified:560
      },
      {
        title: "Airdopes 181",
        img: air5,
        price: 999,
        desc: "60 Hours PlayBack",
        rating:4.7,
        verified:1600
      },
      {
        title: "Immortal ",
        img: air6,
        price: 1999,
        desc: "40 Hours PlayBack",
        rating:4.9,
        verified:600
      },
    ];
    const headphone = [
      {
        title: "Rockid Rush",
        img: head1,
        price: 1499,
        desc: "10 Hours PlayBack",
        desc2:'85 dB loundness limit',
        rating:"be first review",
        verified:600
      },
      {
        title: "Rokerz 551",
        img: head2,
        price: 3299,
        desc: "42 Hours PlayBack",
        desc2:'ASAP Charge',
        rating:4.5,
        verified:425
      },
      {
        title: "Immprtal 300",
        img: head3,
        price: 1999,
        desc: "Limited Edition",
        desc2:'Dual EQ Modes',
        rating:4.8,
        verified:1200
      },
      {
        title: "Rokckers 450 Superman",
        img: head4,
        price: 999,
        desc: "Limited Edition",
        desc2:'300mAh battery',
        rating:4.6,
        verified:560
      },
      {
        title: "Nirvanaa 1007",
        img: head5,
        price: 2999,
        desc: "40 mm Dynamic Drivers",
        desc2:"Over-Ear Earcups",
        rating:4.7,
        verified:1600
      },
      {
        title: "Rockerz 518 ",
        img: head6,
        price: 1599,
        desc: "20 Hours PlayBack",
        desc2:'Master Control',
        rating:4.9,
        verified:600
      },
    ];
  
    const neckband = [
      {
        title: "Rockerz 235",
        img: band1,
        price: 999,
        desc: "8 Hours PlayBack",
        desc2:'Fast Charging',
        rating:"be first review",
        verified:600
      },
      {
        title: "Rokerz 245",
        img: band2,
        price: 1299,
        desc: "30 Hours PlayBack",
        desc2:'Metalic Control Panel',
        rating:4.5,
        verified:425
      },
      {
        title: "Rokerz 255",
        img: band3,
        price: 1099,
        desc: "8Hours Playback",
        desc2:'IPX5 Water Resistance',
        rating:4.8,
        verified:1200
      },
      {
        title: "Rokerz 333",
        img: band4,
        price: 1799,
        desc: "60Hours Playback",
        desc2:'IPX5 water Resistance',
        rating:4.6,
        verified:560
      },
      {
        title: "Rokerz Neo",
        img: band5,
        price: 1299,
        desc: "25 Hours playback",
        desc2:"BEAST Mode",
        rating:4.7,
        verified:1600
      },
      {
        title: "Rockerz Trinity ",
        img: band6,
        price: 1499,
        desc: "20 Hours PlayBack",
        desc2:'ASAP Charge',
        rating:4.9,
        verified:600
      },
    ];
  
    const speaker = [
      {
        title: "Stone 650",
        img: speaker1,
        price: 1299,
        desc: "12 Hours PlayBack",
        desc2:'Huge 22- mAh Battery',
        rating:"be first review",
        verified:600
      },
      {
        title: "stone 105",
        img: speaker2,
        price: 999,
        desc: "11 Hours PlayBack",
        desc2:'TWS Functionality',
        rating:4.5,
        verified:425
      },
      {
        title: "stone 1200F",
        img: speaker3,
        price: 3699,
        desc: "Limited Edition",
        desc2:'RGB Led Lights',
        rating:4.8,
        verified:1200
      },
      {
        title: "stone spinix pro",
        img: speaker4,
        price: 3499,
        desc: "8 Hours Playback",
        desc2:'Dynamic RGB Lights',
        rating:4.6,
        verified:560
      },
      {
        title: "party pal200",
        img: speaker5,
        price: 8299,
        desc: "70W Rms Sound",
        desc2:"muti compatability",
        rating:4.7,
        verified:1600
      },
      {
        title: "Stone ignite",
        img: speaker6,
        price: 1599,
        desc: "20 Hours PlayBack",
        desc2:'Master Control',
        rating:4.9,
        verified:600
      },
    ];
    const smartwatch =[
      {
        title: "Storm",
        img: watch1,
        price: 999,
        desc: "Activity Tracker",
        desc2:'2.5D curved Dispaly',
        rating:"be first review",
        verified:600
      },
      {
        title: "Wave Call",
        img: watch2,
        price: 1199,
        desc: "BT Calling",
        desc2:'HD Curved Display',
        rating:4.5,
        verified:425
      },
      {
        title: "Xplorer O2",
        img: watch3,
        price: 1299,
        desc: "Health Monitaring",
        desc2:'30 days Battery Life',
        rating:4.8,
        verified:1200
      },
      {
        title: "Wave Arcade",
        img: watch4,
        price: 2199,
        desc: "Built in Games",
        desc2:'1.8HD Display',
        rating:4.6,
        verified:560
      },
      {
        title: "Primea Celestial",
        img: watch5,
        price: 1999,
        desc: "BT Calling",
        desc2:"10 Days Battery Life",
        rating:4.7,
        verified:1600
      },
      {
        title: "Wave Electra",
        img: watch6,
        price: 1299,
        desc: "BT Calling",
        desc2:'Built-in Games',
        rating:4.9,
        verified:600
      },
    ];
    
    const datas = [aipods,headphone,neckband,speaker,smartwatch];
    return (
      <div className=" w-fit md:w-full my-4">
       
        <div className=" w-1/4 flex justify-center items-center gap-1 capitalize rounded-sm font-body text-xs font-extralight ">
          <Link to={`/`}>
            <button className=" capitalize">home</button>
          </Link>
          <FaAngleRight />
          <button className=" capitalize">products</button>
        </div>
        <div className=" w-1/3 md:w-32 bg-slate-300 flex my-5 justify-between items-center gap-1 rounded-sm capitalize font-body mx-3">
          <RxHamburgerMenu />
          <p>filter by</p>
          <FaChevronDown />
        </div>
            <Products datas={datas}/>
      </div>
    );
  };
  