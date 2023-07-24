import React from 'react';
import img1 from '../../../assets/banner/img1.jpg';
import img2 from '../../../assets/banner/img2.jpg';
import img3 from '../../../assets/banner/img3.jpg';
import './Banner.css';
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel }, true );


const Banner = () => {
    return (
        <>
<div>
      

      <div
  id="carouselExampleSlidesOnly"
  className="relative"
  data-te-carousel-init
  data-te-carousel-slide>
 
  <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    
    <div
      className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item
      data-te-carousel-active>
      <img
        src={img1}
        className="car-img block w-full"
        alt="" />
        <div
        className="absolute inset-x-[15%] bottom-10 hidden py-5 text-center align-middle  md:block text-white bg-blue-200 bg-opacity-50">
        <h5 className="text-5xl text-white font-bold ">Modern Education</h5>
        <h1 className="text-8xl font-bold text-lime-500">For Everyone</h1>
        
      </div>
    </div>
    {/* <!--Second item--> */}
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src={img2}
        className=" car-img block w-full"
        alt="" />
       
    </div>
    {/* <!--Third item--> */}
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-te-carousel-item>
      <img
        src={img3}
        className="car-img block w-full"
        alt="" />
       
    </div>
  </div>
</div>
    </div>
            
        </>
    );
};

export default Banner;