import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <section className='flex flex-col justify-center'>
          <p className='text-white flex justify-center items-center '> Yasmine</p> 
    <div className=' flex justify-center items-center gap-1'> 
    <img src={copyrightSign} alt="" className=" " />

    <p className='text-white  '>  All Rights Reserved</p> 

    </div>
    </section>
  )
}

export default Footer