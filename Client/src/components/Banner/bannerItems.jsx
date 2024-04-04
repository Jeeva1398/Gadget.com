import React, { useEffect, useState } from "react";

export const BannerItems = ({item})=>{
    const [currentSlide,setCurrentSlide]= useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentSlide((prevSlide)=>
                prevSlide === item.length -1 ? 0:prevSlide+1
            );
        },6000);
        return ()=> clearInterval(interval);
    },[item.length])
        

        return(
            <div>
                {
                    item.map((imge,index)=>(
                        <img 
                            key={index} 
                            src={imge} 
                            alt=""
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                              }`}
                        />
                    ))
                }
            </div>
        )
}