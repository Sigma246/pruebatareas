import { useState } from "react"

const useForm = ( EstadoInicial ={} ) =>{

    const [values, setvalues] = useState(EstadoInicial);

    const reset = () =>{
        setvalues(EstadoInicial)
    }

    const handlerInputchange = ({target}) =>{
        setvalues({
            [target.name]: target.value
        })        
    }

    return [ values, handlerInputchange, reset ]
    
};

export default useForm;