import  { useState } from 'react'
import Button from '../components/Button'
import Aos from 'aos'
const Newsletter = () => {
    Aos.init(
        {
            duration:100
        }
    )

 
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function handleChange(e){

    setEmail(e.target.value)
}

const checkValidation = ( event ) => {
    event.preventDefault()
      // default pop up alert 
    const rgExp=/^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/
    if(rgExp.test(email)){
        setMessage('✅ Email is Valid')
    }else if(email === ''){
        setMessage(' ❗❗ Please enter email')

    }else if (!rgExp.test(email)) {
        setMessage("❌ Email is not valid")
    }else {
        setMessage('')
    }
}
  return (
   <section className='max-container max-lg:flex-col gap-10' id="contact-us" data-aos="fade-down" >
   <div className='  flex max-lg:flex-col justify-between items-center  ' >
        
            <h3 className='text-4xl  leading-[68px] lg:max-w-md font-montserrat font-bold'> 
            Sign up for updates <span className='text-blue-900'>&</span> Newsletter
            </h3>

           <form onSubmit={checkValidation} className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full' >

            <input type='email' className='input' 
                placeholder='Email address' 
                 value={email} onChange={handleChange} />
            
          <div className='flex max-sm:justify-end items-center max-sm:w-full'>
             <Button  label='sign up ' fullWidth /> 
          </div>
          
          </form>   
         
          

    </div>
    <div className=' flex flex-col m-1 pl-10 items-start text-lg'>
          <p >
                {message} 
                </p>
                </div>
    </section>
  )
}

export default Newsletter