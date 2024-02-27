import React from 'react'
import { v4 } from 'uuid'

const Solutions = () => {
    const data = [
        {
            id:'01',
            title:'Fleet Management',
            description:'we help you manage your fleet of vehicles, from cars to truck our management structure is robust and is suited to make sure we meet your logistics need and manage your fleet properly'
        },
        {
            id:'02',
            title:'Inter-State Travels',
            description:'we are your best bet for your inter state travels, from our professional drivers to our clean well maintained vehicles and security detail. we are the best in what we do.'
        },
        {
            id:'03',
            title:'Intra-State Travels',
            description:'For your intra state travels, look on further as we have the best range of vehicle to choose from depending on your budget and logistics need'
        },
        {
            id:'04',
            title:'Social Events',
            description:'we are also better suited to manage your logistics need for weddings, birthdays, burials, conferences and official meetings',
        },
        {
            id:'05',
            title:'Car delivery and relocation',
            description:'With our well trained and professional drivers, we offer car delivery and relocation services, where you might want your car to be relocated from one location to another.'
        },
    ]
  return (
    <div className='px-3 lg:w-[80%] mx-auto space-y-10 md:space-y-20'>
       <header>
         <p className='text-[#9ca3af] text-[18px] leading-[28px] font-semibold text-center capitalize'>What we offer</p>
         <h2 className='font-bold text-[32px] leading-[48px] text-white text-center '>Our Services</h2>
       </header>
       <section className='grid lg:grid-cols-2 gap-10 h-fit lg::h-[70vh]'>
        {/* image container */}
         <div className='h-[400px]  md:h-full  w-full md:w-[90%] md:mx-auto  lg:w-full border border-l-[#D98D06] border-b-[#D98D06]'>
           <img src="/images/chaff.jpeg" alt="services-image" className='h-full w-full object-cover relative top-3 left-2 md:top-5 md:left-5'  />
         </div>
         {/* services container */}
         <div className='h-full md:pr-20 lg:pr-0 flex flex-col justify-center gap-5'>
             {
                data.map(datum => (
                    <div key={v4()} className='grid md:grid-cols-[120px_1fr] gap-5'>
                      <p className='font-extrabold hidden md:block bordery text-center text-[80px] text-[rgba(34,73,82,0.23)]'>
                        {datum.id}
                      </p>
                      <div className='space-y-2 px-4 md:px-0 py-10 md:py-0 bg-[rgba(34,73,82,0.23)] md:bg-transparent border-l-[#D98D06] border-b-[#D98D06] border md:border-none'>
                        <p className='text-white text-2xl font-semibold'>{datum.title}</p>
                        <p className='text-[rgba(225,225,225,0.7)] text-sm font-normal text-wrap'>{datum.description}</p>
                      </div>
                    </div>
                ))
             }
           </div>
       </section>
    </div>
  )
}

export default Solutions
