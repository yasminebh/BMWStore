import React from 'react'
import { luxury } from '../assets'
import Button from '../components/Button'
import Aos from 'aos'
const Quality = () => {
  Aos.init({
    duration:1000
  })
  return (
    <section  id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container' data-aos='fade-down' >
    
    <div className='flex flex-1 flex-col justify-start'>
        <p className='font-montserrat text-blue-500 text-xl pb-8'> 2023 Models</p>
        <h1 className='text-4xl font-bold  capitalize max-w-lg '>
            Check our <span className='text-blue-900 capitalize text-center'>latest BMW </span><br/> cars on the market
        </h1>
        <p className=' text-lg leading-7 font-montserrat  lg:max-w-lg  mt-10'>Experience the epitome of automotive engineering, where 
          cutting-edge technology meets timeless elegance. 
          Step into a world of unparalleled performance, 
          craftsmanship, and sophistication. Discover the art of 
          driving redefined, exclusively with BMW.




</p>
        <p className='font-palanquin text-lg text-gray-500  leading-7 lg:max-lg mt-20'>Our commitment to precision and attention to detail guarantees your complete satisfaction.

</p>
        <div className='mt-11 '> 
          <Button label='View Details'  />

          </div>
      
    </div>
    <div className='mt-20 shadow-xl sm:mt-6'>
      <img src={luxury}  width={450} height={450} alt="" className=" rounded-xl  object-top" />
    </div>

   
    </section>
  )
}

export default Quality