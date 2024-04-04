import { Banner } from "../Banner/banner"
import { Card } from "../NewArrivals/Card"
import { Deals } from "../TodayDeals/deals"
import { Category } from "../category/category"
import { ShopBycate } from "./ShopbyCate"
import { Service } from "./service"


export const Home = ()=>{
    return(
        <div  className=" w-fit md:w-full lg:w-full">
            <Banner/>
            <Category/>
            <Deals/>
            <ShopBycate/>
            <Card/>
            <Service/>
        </div>
    )
}