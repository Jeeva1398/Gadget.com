import airpods from '../../assets/images/category/WirelessEarbuds.webp';
import neckband from '../../assets/images/category/Neckbands.png';
import watch from '../../assets/images/category/Smartwatches.webp';
import speaker from '../../assets/images/category/Soundbars.webp';
import headphone from '../../assets/images/category/WirelessHeadphones.webp';
import headphone2 from '../../assets/images/category/Wired Headphones.webp';
import speaker2 from '../../assets/images/category/WirelessSpeaker.webp';
import party from '../../assets/images/category/party.webp';
import { ShopByCategory } from './ShopbyCate2';



export const ShopBycate = ()=>{
    const datas = [
        {
            tittle:"Airpods",
            tittle2:"",
            img: airpods
        },
        {
            tittle:"Party",
            tittle2:"Speakers",
            img: party
        },
        {
            tittle:"Neckbands",
            tittle2:"",
            img: neckband
        },
        {
            tittle:"Smart watches",
            tittle2:"",
            img: watch
        },
        {
            tittle:"Wireless",
            tittle2:"HeadPhones",
            img: headphone
        },
        {
            tittle:"SoundBars",
            img: speaker
        },
        {
            tittle:"Wired",
            tittle2:"Headphones",
            img: headphone2
        },
        {
            tittle:"Wireless",
            tittle2:"speakers",
            img: speaker2
        }
    
    ]
         return(
            <div className=" w-full  my-7">
                <h2 className=" font-display text-2xl font-bold tracking-widest text-center cursor-default">shop by category</h2>
                <ShopByCategory datas ={datas}/>
            </div>
         )
    }