import Button from "../components/Button";
import { cars, statistics } from "../constants";
import { blackbmw } from "../assets";
import { useState } from "react";
import CarCard from "../components/CarCard";

const Hero = () => {
  const [transtbmw, setTranstbmw] = useState(blackbmw);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative capitalize xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className=" font-palanquin text-blue-900 text-xl pb-10">
          Our New products
        </p>
        
        <h1 className="mt-10  font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className=" xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The most luxirious
          </span>
          <br />
           <span className=" text-blue-800 inline-block mt-3  "> BMW </span> cars.
        
        </h1>
        
        
        <p className=" text-start font-montserrat py-10 sm:max-w-sm ">
          {" "}
          Discover our luxirious collection , ensuring quality , confort , Top
          engine and innovation for your life.
        </p>
        <Button label="Reserve Now"  textColor='text-white' className='' />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className=" font-bold font-montserrat text-3xl ">
                {" "}
                {stat.value}{" "}
              </p>
              <p className="leading-7 font-palanquin text-gray-600">
                {" "}
                {stat.label}{" "}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative flex-1 flex justify-center
        items-center xl:min-h-screen max-xl:py-40  bg-primary 
        bg-hero bg-cover bg-center object-cover   "
      >
        <img
          src={transtbmw}
          alt="transt"
          width={700}
          height={502}
          className="object-cover  relative z-10 "
        />

<div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
{cars.map((image, index) => (
            <div key={index}>
              <CarCard
                index={index}
                imgURL={image}
                changeCartranstImage={(car) => setTranstbmw(car)}
                transtbmwImg={transtbmw}
                
              />
            </div>
          ))}
          
    
        </div>
    
    

      </div>

      {/*  changing between cars pics in hero  */}
    </section>
  );
};

export default Hero;
