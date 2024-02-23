import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { IoMdClose } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import {motion} from 'framer-motion'

const CarAmount = ({data, remove}) => {
    const [quantity, setQuantity] = useState(1)

    const addMore = () => {
        if(quantity === 10){
          return
        } else {
            setQuantity(prev => prev + 1)
        }
    }

    const minusMore = () => {
        if(quantity === 1){
          return
        } else {
            setQuantity(prev => prev - 1)
        }
    }

  return (
    <div className='flex justify-start gap-3 items-center'>
    <h2 className='text-[15px] font-semibold'>{data}</h2>
    <div className='ml-auto flex items-center'>
      <span 
      className='px-3 py-2 text-[rgba(0,0,0,0.5)]'
      onClick={addMore}
      >
        <AiOutlinePlus/>
    </span>
      <span className='px-3 py-1 border border-primaryBluet border-[rgba(0,0,0,0.5)] text-[15px] text-black font-semibold'>{quantity}</span>
      <span 
      className='px-3 py-2 text-[rgba(0,0,0,0.5)]'
      onClick={minusMore}
      >
        <AiOutlineMinus/>
      </span>
    </div>
    {/* DELETE BTN */}
    {/* <div onClick={()=> remove(data)}>
    <motion.span whileHover={{scale:1.05}} whileTap={{scale:0.95}} className='text-red-700 text-xl cursor-pointer'>
      <MdOutlineDeleteOutline />
   </motion.span>
    </div> */}
 </div>
  )
}

export default CarAmount