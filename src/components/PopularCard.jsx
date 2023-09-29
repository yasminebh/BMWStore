import Aos from "aos";
import { star } from "../assets/icons";
import { useEffect } from "react";
const PopularCard = ({ imgURL, name, price }) => {
  return (
    <div
      className="flex flex-1 flex-col w-full max-sm:w-full 
             hover:rotate-12  justify-center items-center   rounded-2xl outline
              outline-slate-400 -outline-offset z-10"
    >
      <div
        className="
      hover:shadow-lg group 
    overflow-hidden  relative after:duration-500 before:duration-500  duration-500
     hover:after:duration-500 hover:after:translate-x-14 hover:before:translate-y-5
      hover:before:-translate-x-32 hover:duration-500 after:absolute 
      after:w-10 after:h-13 after:bg-sky-700 after:rounded-full 
       after:blur-xl after:bottom-36 after:right-5 after:w-10 after:h-12
         before:absolute before:w-10  before:bg-sky-400 before:rounded-full
           before:blur-xl before:top-2 before:right-20 before:w-10 before:h-12"
      >
        <img
          src={imgURL}
          alt={name}
          width={400}
          height={400}
          className="rounded-2xl "
        />{" "}
      </div>
      <div className="mt-8 flex justify-start gap-2.5 ">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-blue-900">
          (4.5)
        </p>
      </div>

      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <h2 className="mt-2 font-semibold font-montserrat text-blue-900 text-2xl leading-normal">
        {" "}
        {price}{" "}
      </h2>
    </div>
  );
};

export default PopularCard;
