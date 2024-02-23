import React from 'react'
import { useState, forwardRef } from 'react'

const TextInputOne = forwardRef(({field, InputStyle, label,errorMessage,...props }, ref) => {
    const [focused, setFocused] = useState(false)

    const handleFocused = () => {
        setFocused(!focused)
    }

  return (
    <div className='w-[90%] '>
        <label className='font-semibold text-[1rem] capitalize block mb-2 w-fit'>{label}</label>
        <input type={field} className={InputStyle} {...props} ref={ref} />
        <span className='text-[12px] text-red-500 font-normal mt-2 capitalize hidden'>{errorMessage}</span>  
    </div>
  )
})

export default TextInputOne


{/* <div className='w-[90%] '>
<label className='font-semibold text-[1rem] capitalize block mb-2 w-fit'>{label}</label>
<input type={field} className={InputStyle} {...props} required onBlur={handleFocused} focused={focused.toString()} onKeyUp={()=> setFocused(false)} ref={ref} />
<span className='text-[12px] text-red-500 font-normal mt-2 capitalize hidden'>{errorMessage}</span>  
</div> */}