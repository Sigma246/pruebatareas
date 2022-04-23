import useForm from '../hooks/useForm';

const AddTarea = ({addMensaje}) =>{

    const[values, handlerInputchange, reset ] = useForm({mensaje: ""});

    const handlerSubmit =(e)=>{
        e.preventDefault();

        !!values.mensaje && addMensaje({   
            id: Math.random(),
            mensaje: values.mensaje
        })

        reset()
    }

    return (
        <>
            <form onSubmit={handlerSubmit}>
                <input className='col-9' type="text" name="mensaje" placeholder="New homework" onChange={handlerInputchange} value={values.mensaje} />
                {/* <button className='btn btn-light btn-sm' type='submit' >Add</button> */}
            </form>
        </>
    )
}

export default AddTarea;