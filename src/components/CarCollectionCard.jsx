import React from 'react'
import car1 from '../../public/images/pradoland.png'
import {IoMdArrowForward} from 'react-icons/io'
import {useGlobalContext} from '../Context/GlobalContext'


const CarCollectionCard = ({carDatum}) => {
    const {name, img, price} = carDatum
    const {handleBookNow} = useGlobalContext()
  return (
    <div className='bordery bg-[rgba(34,73,82,0.3)] rounded-md flex flex-col gap-y-3 h-[100%] items-start px-3 py-5'>
            {/* img-container */}
            <div className='h-[50%]'>
               <img src={img} alt="toyota prado 2022" className='h-[100%]' />
            </div>
            {/* info div */}
            <div className='flex-1 items-start flex flex-col gap-2'>
                <h2 className='font-medium text-xs tracking-normal'>{name}</h2>
                <p className='text-xs'>{price}</p>
                <div >
                <button 
                className='flex items-center gap-1 btn-bookNow bg-[#D98E04] px-2 py-1'
                onClick={()=> handleBookNow()}
                >
                    <span>Book Now</span> 
                    <span className='icon'>
                        <IoMdArrowForward className='mt-0 text-[#D98E04]y text-white'/>
                    </span>
                </button>
                </div>
            </div>
         </div>
  )
}

export default CarCollectionCard