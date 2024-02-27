import React from 'react'
import { useState, forwardRef,useRef } from 'react'
import DatePicker from 'react-datepicker'
// import subDays from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import{ AiOutlineCalendar }from 'react-icons/ai'



const FormOneDate = () => {
    // const FormOneDate = ({setFormInfo, formInfo}) => {


    const inputStartRef = useRef();
   
    const [show, setShow] = useState('return')
    // THIS USESTATE IS USED FOR CONDITIONALLY RENDERING THE RETURN DATE IN THE UI
    const [returnDate, setReturnDate] = useState(true)

    // const {toggle, handleToggle} = useToggle(true)
    // THE FUNCTION IS USED TO HANDLE THE RETURNDATE VALUE
    const handleReturn = () => {
        setShow('return')
        setReturnDate(true)
    }

    const handleOneway = () => {
        setShow('oneway')
        setReturnDate(false)
    }
    
    // THE DATEPICKER IMPLEMENTATION
    const [startDate, setStartDate] = useState(null)

    const [endDates, setEndDate] = useState(null)
    
    // THIS IS DONE TO GET THE AMOUNT OF DAYS BETWEEN THE CURRENT DATE AND THE LAST DAY OF THE YEAR 
    // SO AS TO SET THE INCLUDED DAYS LEFT IN THE CALENDAR

    const oneDay = 1000 * 60 * 60 * 24
    const presentDay = new Date()
    const yearEnd = new Date(presentDay.getFullYear, 11, 31)
    const amountOfDaysLeft = Math.round(yearEnd.getTime() - presentDay.getTime()) / oneDay
    const finalResult = amountOfDaysLeft.toFixed(0)

    const ExampleDateContainer = forwardRef(({value, onClick}, ref) => (
      <>
        <label className='text-base font-semibold mb-2 text-[rgb(34,64,114)]'>Start Date:</label>
        <div className="flex gap-0 items-center" onClick={onClick} ref={ref}>
            <input 
            type="text" 
            value={value} 
            className='p-2 text-base w-[90%] h-[45px] rounded-none rounded-l-md' 
            placeholder='dd/mm/yyyy'
            ref={inputStartRef} 
            />
            <span 
            className="text-lg p-1  bg-white h-[45px] w-[10%] flex justify-center items-center rounded-r-md"
            >
                <AiOutlineCalendar/>
            </span>
        </div>
      </>
    ))

    ExampleDateContainer.displayName = 'ExampleDateContainer';


    const EndDateElement = forwardRef(({value, onClick}, ref) => (
      <>
        <label className='text-base font-semibold mb-2 text-[rgb(34,64,114)]'>End Date:</label>
        <div 
        className="flex gap-0 items-center" 
        onClick={()=> {
            // if(formInfo.startDates===''){           // on click of the div it first checks if the formInfo.startDates is an empty string,
            //     inputStartRef.current.focus()       // if true it will focus the ExampleDateContainer input, if not it will continue the program
            // }
            onClick()
        }} 
        ref={ref}>
            <input 
            type="text" 
            value={value} 
            className='p-2 text-base w-[90%] h-[45px] rounded-none rounded-l-md disabled:bg-white' 
            placeholder='dd/mm/yyyy' 
            // disabled={formInfo.startDates === '' ? true : false}
            />
            <span 
            className="text-lg p-1  bg-white h-[45px] w-[10%] flex justify-center items-center rounded-r-md"
            >
                <AiOutlineCalendar/>
            </span>
        </div>
      </>
    ))

    EndDateElement.displayName = 'EndDateElement';

  return (
    <div className='flex flex-col gap-y-4 w-[90%] mt-4'>
        <div className='flex gap-x-2'>
        <div>
            <label 
            htmlFor="returnBack" 
            className={ show === 'return' ?'border py-1 px-3 bgy-[rgb(34,64,114)] bg-[#384a59] text-white hover:rounded-md': 'border py-1 px-3 bg-white text-[rgb(34,64,114)] hover:rounded-md'}
            onClick={handleReturn}
            
            >
               Return
            </label>
            <input type="radio" name="return" id="returnBack"  className='hidden' value={show === 'return'} disabled={show === 'return'}/>
        </div>

        <div>
            <label 
            htmlFor="oneWay" 
            className={ show === 'oneway' ?'border py-1 px-3 bgy-[rgb(34,64,114)] bg-[#384a59] text-white hover:rounded-md' : 'border py-1 px-3 bg-white text-[rgb(34,64,114)] hover:rounded-md'}
            onClick={handleOneway}
            >
                One Way
            </label>
            <input type="radio" name="return" id="oneWay"  className='hidden' value={show === 'oneway'}/>
        </div>
       </div>

       {/* <div className='current-location flex flex-col gap-y-3'>
           <label className='uppercase font-semibold text-[rgb(34,64,114)]'>Start Date:</label>
           <input type="date"  className='px-2 py-2 rounded-lg text-base w-full border bg-white text-black' required/>
           <span className='text-red-600 text-[12px] mt-[-10px] hidden'>Please Enter A Start Date</span>
       </div> */}

        <DatePicker
            selected={startDate}
            onChange={(date) => {
                 setStartDate(date)
                //  setFormInfo({...formInfo, startDates:date})
                //  console.log(formInfo);
             }}
            customInput={<ExampleDateContainer />}
            minDate= {new Date()}
        />

       { returnDate &&
           <DatePicker 
            selected={endDates}
            onChange={(date) => {
                setEndDate(date)
                // setFormInfo({...formInfo, endDate:date})
            }}
            customInput={<EndDateElement />}
            // disabled={formInfo.startDates === '' ? true : false}
            // minDate= {formInfo.startDates} // The minimum start dates which is derived from the formInfo.startDates which saves the value of the input start date
           />  
        //   <div className='current-location flex flex-col gap-y-3'>
        //    <label className='uppercase font-semibold text-[rgb(34,64,114)]'>End Date:</label>
        //    <input type="date"  className='px-2 py-2 rounded-lg text-base w-full border bg-white text-black' required/>
        //    <span className='text-red-600 text-[12px] mt-[-10px] hidden'>Please Enter An End Date</span>
        //   </div>
       }
    </div>
  )
}


// FormOneDate.displayName = 'FormOneDate';

export default FormOneDate