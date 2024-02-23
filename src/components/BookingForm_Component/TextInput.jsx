import React from 'react'
import { useState, forwardRef } from 'react'

const TextInput = ({field, InputStyle, label,errors,id, placeholder, register}) => {
  return (
    <div className='w-[90%] mx-auto '>
        <label className='font-semibold text-[1rem] capitalize block mb-2 w-fit'>{label}</label>
        <input type={field} className={InputStyle}  placeholder={placeholder} {...register(id)} />
        {errors[id] && <span className='text-[12px] text-red-500 font-normal mt-2 capitalize'>{errors[id].message}</span> } 
    </div>
  )
}

export default TextInput


