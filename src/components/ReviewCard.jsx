import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL, feedback,ratings,name}) => {
  return (
    <div className='flex justify-center items-center flex-col '>
        <img  src={imgURL} alt="customer" className="rounded-full object-cover w-[120px]  h-[120px]" />
        <p className=' mt-6 max-w-sm text-center info-text ' > {feedback} </p>
        
        <div className='mt-3 flex justify-center items-center gap-2.5 '>
            <img src={star} alt="star" className=' object-contain m-0 '/>
            <p className=' text-xl font-montserrat text-slate-gray '> {ratings} </p>
        </div>
        <h3 className=' mt-1 font-palanquin text-3xl text-center font-bold '>{name} </h3>


    </div>
  )
}

export default ReviewCard