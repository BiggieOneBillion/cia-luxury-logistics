import React from 'react'
import { howItWorksData } from '../data/FleetData'
import { v4 as uuidv4 } from 'uuid';


const HowItWorks = () => {
  return (
    <div className='mt-20 flex flex-col gap-y-5 containerz'>
                <div className='flex flex-col items-center gap-y-4'>
                    <p className='font-medium text-2xl'>How it Works</p>
                    <h2 className='text-[35px] font-bold capitalize text-center'>Quick & easy rental service</h2>
                </div>
                <div className='howitworks_section gap-5'>
                 {
                  howItWorksData.map((datum) => (
                    <div key={uuidv4()} className='flex flex-col gap-3 items-center'>
                        <div className="imgdiv bg-inherent">
                            <img src={datum.image} alt="" className='block mix-blend-screen' />
                        </div>
                        <div className='flex flex-col gap-4 items-center'>
                            <h2 className='font-bold text-[28px] text-center'>{datum.title}</h2>
                            <p className='text-[rgba(255,255,255,0.7)] text-base text-center'>{datum.description}</p>
                        </div>
                    </div>
                  )) 
                 }
                </div>
        </div>
  )
}

export default HowItWorks