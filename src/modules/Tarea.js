
const ListTarea = ({tareas, handlerDelete}) =>{

    return(
        
        <ul className='mt-3 d-flex flex-row'>
        {
            tareas.map(tarea => 
                <li className='d-flex flex-row m-2' key={tarea.id}>
                    <p>{tarea.mensaje}</p>
                    <button className="btn btn-danger btn-sm" onClick={ ()=> handlerDelete(tarea.id) } >Delete</button>
                </li> 
            )
        }
        </ul>

       
    )
}

export default ListTarea;

