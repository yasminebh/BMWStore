import { exceptional } from "../assets";
import Aos from "aos";
import Button from "../components/Button";

const Exceptional = () => {
    Aos.init()
    
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container' data-aos='fade-down'>
    
      <div className="flex-1" >
        <img src={exceptional} alt="exceptional offer" width={400} height={400} className="object-contain rounded-md shadow-sm shadow-blue-800 "/>
      </div>
    
      <div className="flex flex-1 flex-col ">
        <h3 className="font-palanquin text-blue-600 ">BMW &#39;s Summer Showcase</h3>
        <h1 className="text-4xl font-montserrat text-blue-900 font-bold max-w-lg  ">We Provide Exceptionnal OFFER</h1>
        <p className=" mt-10 max-w-lg font-montserrat text-xl">
          From sleek designs to cutting-edge technology, our products are
          crafted with precision to elevate your summer experience.
        </p>
        <p className=" mt-20 info-text">
          {" "}
          Don&apos;t miss out on our exclusive summer deals. Experience BMW like
          never before!
        </p>
        <div className='mt-11 flex flex-wrap gap-4 '> 
         <Button label='shop now'  />
         <button label='Learn more'  className="border-solid border-blue-900 rounded-full bg-white flex items-center justify-center font-montserrat text-sm border gap-2 px-7 py-4  hover:bg-blue-200 hover:shadow-sm hover:shadow-blue-300 hover:duration-200 font-semibold" > Learn more</button>

         </div>

      </div>
    </section>
  );
};

export default Exceptional;
