import React, { useEffect, useMemo, useRef } from "react";
import { useState } from "react";
// import merc from '../../public/images/merc.png'
// import prado from '../../public/images/pradoland.png'
import { motion, AnimatePresence } from "framer-motion";
// import img1 from '../../public/images/pradoland.png'
// import { useAdminContext } from '../Context/Globalcontext'
import { useGlobalContext } from "../../Context/GlobalContext";
import { useFormDatum } from "../../Context/FormData";

const Carcards = ({ data }) => {
  const StoreValueRef = useRef();

  // const {formData, setFormData} = useGlobalContext()

  const { formDatum, setFormDatum } = useFormDatum();

  const [isdone, setIsDone] = useState(false);

  // useMemo(() => {

  // }, [isdone])

  const handleChange1 = () => {
    // setSelectedCar(prev => [...prev,data.name])
    // console.log(StoreValueRef.current.value);

    setIsDone(true);
    // handleCarData(data.name)
    StoreValueRef.current.value = true;
    setFormDatum({
      ...formDatum,
      carSelected: [
        ...formDatum.carSelected,
        { vehicle: data.name, quantity: 1 },
      ],
    });

    // setFormDatum({
    //   ...formDatum,
    //   carSelected: [...formDatum.carSelected, data.name],
    // });

    // if(ischecked){
    //   //  setFormInfo({...formInfo, [e.target.name]:[e.target.name[0].type.push(veh)]})
    //   setFormData({...formData,  carSelected: [...formData.carSelected, data.name]})
    //   } else {
    //    setFormData({...formData, carSelected:formData.carSelected.filter(veh => veh !== data.name)})
    //   }
  };

  const handleChange2 = () => {
    // console.log(StoreValueRef.current.value);
    setFormDatum({
      ...formDatum,
      carSelected: formDatum.carSelected.filter((veh) => veh.vehicle !== data.name),
    });
    // setSelectedCar(selectedCars.filter(cars => cars !== data.name))
    setIsDone(false);
    StoreValueRef.current.value = false;
    // setFormData({...formData, carSelected:formData.carSelected.filter(veh => veh !== data.name)})
    // if(ischecked){
    //   //  setFormInfo({...formInfo, [e.target.name]:[e.target.name[0].type.push(veh)]})
    //   setFormData({...formData,  carSelected: [...formData.carSelected, data.name]})
    //   } else {
    //    setFormData({...formData, carSelected:formData.carSelected.filter(veh => veh !== data.name)})
    //   }
  };

  useEffect(() => {
    formDatum.carSelected.length === 0
      ? null
      : formDatum.carSelected.map(x => x.vehicle).includes(data.name)
      ? setIsDone(true)
      : null;
  }, []);

  // useMemo(() => {
  //   if(ischecked){
  //   //  setFormInfo({...formInfo, [e.target.name]:[e.target.name[0].type.push(veh)]})
  //   setFormData({...formData,  carSelected: [...formData.carSelected, data.name]})
  //   }
  //   // else {
  //   //  setFormData({...formData, carSelected:formData.carSelected.filter(veh => veh !== data.name)})
  //   // }
  // },  [ischecked])

  // console.log(formDatum);

  return (
    <div
      className=" p-2 rounded-lg border h-[300px] bg-[rgba(1,14,37,0.8)y] bg-[#0D0D0D]r bg-[#D98E04]u bg-[#BFBDBA] min-w-[350px] relative"
      // className='strudf'
      // id='carcards'
    >
      <div
        className=" flex justify-center h-[70%] relative"
        id="carcard"
        data-descr={data.name}
      >
        <img src={data.img} alt="" className="h-[100%]" />
        <AnimatePresence>
          {isdone && (
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              // key={isdone}
              transition={{ duration: 0.4, delay: 0.1, type: "tween" }}
              exit={{ y: -50, opacity: 0, transition: { ease: "easeInOut" } }}
              className="absolute top-0 right-0 h-[100%] bg-[rgba(0,0,0,0.5)] z-30 rounded-md w-full flex justify-center items-center"
            >
              <p className="py-2 px-5 rounded-md bg-whitey bg-[#D98E04] font-semibold">
                Reserved
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="">
        <p className="hidden" ref={StoreValueRef}></p>
        <p className="pb-2 border-b-2 border-[rgba(255,255,255,0.2)] m-0 text-black font-semibold">
          {data.name}
          {/* Toyota LandCruiser */}
        </p>

        <div className="flex justify-between items-center py-2">
          <div className="flex gap-x-2 items-center text-white">
            <div>
              <input
                className="hidden"
                type="checkbox"
                name="selectedCar"
                id={data.id}
                value="reserved"
                checked={isdone}
                disabled={isdone}
                onChange={() => {
                  handleChange1();
                  // setFormData({...formData,  carSelected: [...formData.carSelected, data.name]})
                }}
              />
              <label
                htmlFor={data.id}
                className={`font-semibold px-4 py-1 border-2t rounded bg-black flex  labelCheckbox ${
                  isdone
                    ? "cursor-not-allowed bg-[rgba(0,0,0,0.39)] text-white"
                    : "cursor-pointer"
                }`}
                // onClick={()=> {
                //  handleChange1()

                // }}
                // onClick={()=>
                // {
                //   handleChange()
                //   setFormData({...formData,  carSelected: [...formData.carSelected, data.name]})
                // }}
              >
                Reserve
              </label>
            </div>

            {isdone && (
              <div>
                {/* <input 
                    className='hidden' 
                    type="checkbox" 
                    name="selectedCar" 
                    id={data.id + 33} 
                    value='cancelBooking'
                    checked={false} 
                    onChange={()=> {
                      handleChange()
                      setFormData({...formData, carSelected:formData.carSelected.filter(veh => veh !== data.name)})
                    }} 
                    /> */}
                <span
                  className="font-semibold px-4 py-1 border-2t rounded bg-black flex  labelCheckbox"
                  onClick={handleChange2}
                >
                  Cancel
                </span>
              </div>
            )}
          </div>

          <p className="text-black m-0 font-medium">
            {data.price}
            {/* $100 */}
            <span className="text-sm text-[rgba(255,255,255,0.7)]"> / Day</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carcards;

{
  /* <input className='hidden' type="radio" name="selectedCar" id={data.id} checked={ischecked} onChange={()=> handleChange()} />
                    <label htmlFor={data.id} className='font-semibold px-4 py-1 border-2t rounded bg-black flex  labelCheckbox'>
                      {!ischecked && 
                      <span 
                      className='w-0'
                      >
                        Click to
                      </span>}
                      {ischecked ? 'Reserved' : 'Book'}
                    </label> */
}
