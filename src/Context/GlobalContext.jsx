import { useContext,createContext, useState,useEffect,useRef, createRef} from 'react'

const GlobalContext = createContext()

export const GlobalProvider = ({children}) =>{
     const [bookNow, setBookNow] = useState(false)

     const handleBookNow = () => {
        setBookNow(!bookNow)
     }

     const [orderDetail, setOrderDetail] = useState("");

     const handleOrderDetails = (data) => {
         setOrderDetail(data)
     }

     const inputRef = createRef()
    

     const [formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        email:'',
        phoneNumber: '',
        pickUpLocation:'',
        dropOffLocation:'',
        startDates:'',
        endDate:'',
        carSelected:[]
     })

     const handleFormData = (e) => {
       setFormData({...formData, [e.target.name]: e.target.value})
     }

    //  const handleFormDate = (, value) => {
    //     setFormData({...formData, [`"${property}"`]:value})
    //  }

    const [nextForm, setNextForm] = useState(0)

    // const handleNextForm = () => {
    //     setNextForm(!nextForm)
    // }

    // const [ischecked, setIsChecked] = useState(false)


   
    return (
        <GlobalContext.Provider
        value={{
            bookNow,
            setBookNow,
            handleBookNow,
            formData,
            handleFormData,
            setFormData,
            nextForm,
            // handleNextForm,
            inputRef,
            setNextForm,
            orderDetail,
            handleOrderDetails
            // ischecked, 
            // setIsChecked
            // handleFormDate
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}