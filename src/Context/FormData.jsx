import React,{createContext,useState,useEffect,useContext} from "react";


export const formContext = createContext()

export const FormContextProvider = ({children}) => {
    // when false it displays the formInfo but if true that means the user has finished filling the form and submitted successfully 
    const [showCongratulation, setShowCongratulation] = useState(false);

    const handleShowCongratulation = () =>{
        setShowCongratulation(!showCongratulation)
    }

    const [formDatum, setFormDatum] = useState({
        firstname:'',
        lastname:'',
        email:'',
        pickUpLocation:'',
        dropOffLocation:'',
        startDates:'',
        endDate:'',
        carSelected:[]
     })

     const handleFormDatum = (e) => {
        setFormDatum({...formDatum, [e.target.name]: e.target.value})
      }

      const handleReset = () => {
        setFormDatum({
        firstname:'',
        lastname:'',
        email:'',
        pickUpLocation:'',
        dropOffLocation:'',
        startDates:'',
        endDate:'',
        carSelected:[] 
        })
      }
    return(
        <formContext.Provider value={{
            formDatum, setFormDatum,handleFormDatum,handleReset,showCongratulation, handleShowCongratulation
        }}>
            {children}
        </formContext.Provider>
    )
}

export const useFormDatum = () => {
    return useContext(formContext)
}
