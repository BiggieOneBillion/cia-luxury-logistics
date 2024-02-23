import { FormContextProvider } from "@/Context/FormData";


export default function FormDataProvider({children}) {
   return (
    <FormContextProvider>
        {children}
    </FormContextProvider>
   )
}
