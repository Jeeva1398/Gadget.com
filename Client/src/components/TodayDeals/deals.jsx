import { useEffect, useRef, useState } from 'react';
import headphone from '../../assets/images/DealsHeadphone.png';
import watch from '../../assets/images/DealsWatch.png';

export const Deals = ()=>{
    const [hours,setHours]=useState('00:00')
    const [minutes,setMinutes]=useState('00:00');
    const [seconds,setSeconds]=useState('00:00');

    let interval = useRef();

    const startTimer =()=>{
        const countDown = new Date('Mar 29, 2024 00:00:00').getTime();

        interval = setInterval(()=>{
          const now  = new Date().getTime();
          const distance = countDown - now;
          const hrs = Math.floor((distance % (1000 * 60 * 60 *24)/(1000 * 60 * 60)));
          const mins = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
          const sec = Math.floor((distance % (1000 * 60))/ 1000);
          
          if(distance < 0){
              clearInterval(interval.current);
          }else{
            setHours(hrs);
            setMinutes(mins);
            setSeconds(sec);
          }
        },1000);
    }

    useEffect(()=>{
        startTimer();
        return ()=>{
          clearInterval(interval.current);
        };
    },[])


    return(
      <div className=" my-14">
        <div className=" mx-5 flex capitalize justify-between">
          <h2 className=" font-display text-lg font-bold tracking-widest cursor-default">today dea<span className=" underline decoration-orange-700">ls</span></h2>
          <div className=" flex font-body gap-2 text-sm  cursor-pointer">
            <p className=" text-blue-500">view all</p>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-4 h-4 text-blue-600"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>

        </div>
        <div className=" w-full h-fit bg-gray-600 rounded-lg my-4 flex flex-col md:flex-row gap-2 justify-between cursor:pointer md:justify-between p-3 lg:flex-row lg:justify-between">
          <div className=" font-body capitalize mx-2 text-white  py-2  justify-center md:px-5">
            <h2 className=" tracking-widest text-xl md:text-2xl cursor-default">daily dea<span className=" underline decoration-orange-600">ls</span></h2>
            <p className=" text-sm px-3 cursor-default">up to<span className=" text-xl text-orange-600 md:text-3xl">70%</span>off</p>
          </div>
          <div className=" w-full md:w-3/4 lg:w-3/4 flex  px-4 md:gap-48">
          <div className=" w-1/2 text-white font-body flex items-center mx-1 capitalize gap-1 cursor-default">
              <span className=" text-2xl font-semibold md:text-5xl">{hours}</span>
              <span className=" md:text-3xl">hrs:</span>
              <span className="text-2xl font-semibold md:text-5xl">{minutes}</span>
              <span className="md:text-3xl">mins:</span>
              <span className="text-2xl font-semibold md:text-5xl">{seconds}</span>
              <span className="md:text-3xl">sec</span>
          </div>
          <div className=" w-1/2 flex justify-center items-center ">
            <img className=" w-20 h-20" src={watch} alt=""/>
            <img className=" w-20 h-20" src={headphone} alt=""/>
          </div>
          </div>
          
        </div>
      </div>
    )

}