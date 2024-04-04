import banner1 from '../../assets/images/banner/Banner 1.webp';
import banner2 from '../../assets/images/banner/Banner 2.webp';
import banner3 from '../../assets/images/banner/Banner3.webp';
import banner4 from '../../assets/images/banner/Banner4.webp';
import banner5 from '../../assets/images/banner/Banner5.webp';
import { BannerItems } from './bannerItems';

export const Banner = () => {
    const slides = [banner1, banner2, banner3, banner4, banner5];
    return (
      <div className=" relative w-full h-44 md:h-96 flex overflow-hidden my-1 rounded-lg">
        <BannerItems item = {slides}/>
      </div>
    );
  };