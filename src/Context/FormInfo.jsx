import React from 'react'
import FormOneDate from './FormOneDate'
import TextInput from './TextInput'
import {useGlobalContext} from '../Context/GlobalContext'

const FormInfo = () => {
    const {handleBookNow} = useGlobalContext()

    const handleClose = (e) => {
        if(e.target.classList.contains('fixedContainer')){
          handleBookNow()
        }
    }

  return (
    <div 
    className='fixed top-0 left-0 bg-[rgba(0,0,0,0.8)] h-[100vh] w-[100vw] flex justify-center z-[200] fixedContainer'
    onClick={(e)=>handleClose(e)}
    >
        <div className='bg-[rgba(255,255,255,0.9)] w-[500px] h-[100%] overflow-y-auto'>
            <p className='w-[90%] mx-auto py-3 text-[rgba(0,0,0,0.8)] shadow-sm px-2 mt-2 noteWarning'>
                Note!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ad vero ut quis sint nam neque quibusdam culpa vitae ea.
            </p>
            <h2 className='font-semibold w-[90%] mx-auto py-1 mt-2 text-[rgba(0,0,0,0.8)] text-xl'>Contact Information</h2>
           <form className='pb-10 pt-3 flex flex-col items-center w-full text-[rgba(0,0,0,0.8)] gap-y-3' >
              <TextInput 
              type='text' 
              className='py-2 px-2 w-full' 
              label='First Name' 
              placeholder='Please Enter Your First Name'
              errorMessage='Please Enter Your Name'
              />
            <TextInput 
              type='text' 
              className='py-2 px-2 w-full' 
              label='Last Name' 
              placeholder='Please Enter Your Last Name'
              errorMessage='Please Enter Your Last Name'
              />
            {/* <TextInput 
              type='text' 
              className='py-2 px-2 w-full' 
              label='Address' 
              placeholder='Please Enter Your Address'
              errorMessage='Please Enter Your Address'
              /> */}
              <TextInput 
              type='email' 
              className='py-2 px-2 w-full' 
              label='Email' 
              placeholder='Please Enter Your Email'
              errorMessage='Please Enter Your Email'
              />
              <TextInput 
              type='text' 
              className='py-2 px-2 w-full' 
              label='Pick up Location' 
              placeholder='Enter Your Pick-up Location'
              errorMessage='Enter Your Pick-up Location'
              />
               <TextInput 
              type='text' 
              className='py-2 px-2 w-full' 
              label='Drop-off Location' 
              placeholder='Enter Your Drop-off Location'
              errorMessage='Enter Your Drop-off Location'
              />
              <FormOneDate />
           </form> 
        </div>
    </div>
  )
}

export default FormInfo