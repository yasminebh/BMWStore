import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../constants'
import Aos from 'aos'
const Services = () => {
   
  Aos.init()
    
  return (


    <section className='max-container flex justify-center flex-wrap gap-9' data-aos='fade-down' >
      {services.map((service) => (
       <ServiceCard key= {service.label} {...service}   />
      ))}
    </section>
  )
}

export default Services