import Aos from "aos";
import PopularCard from "../components/PopularCard";
import { Carproducts } from "../constants";
const Popular = () => {
  Aos.init({
    duration: 1700,
    
  })
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5"   >
        <h2 className="text-4xl font-palanquin font-bold" data-aos='fade-down'> Our 
          Our <span className="text-blue-900"> Iconic </span> Cars
        </h2>

        <p className="lg:max-w-lg mt-2 font-montserrat "> 
          {" "}
          Experience , top notch quality and luxury with our Top sells BMW.
          Discover a world of comfort , design and high value.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-1  " data-aos='flip-left'>
         {Carproducts.map((product)=> (
            <PopularCard key={product.name} {...product}  />
         ))}
      </div>
    </section>
  );
};

export default Popular;
