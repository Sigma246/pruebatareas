import '../style.css'
import ListTarea from './Tarea';
import { useReducer, useEffect } from 'react';
import { reduce } from '../reducer/tareas_reducer';
import AddTarea from './AddTarea';
import logo from '../logo.png';


const init =()=>{
    return JSON.parse(localStorage.getItem('tareas')) || [];
}

const Home = () =>{

    const [tareas, dispatch] = useReducer(reduce, [], init);

    useEffect( ()=> {
        localStorage.setItem('tareas', JSON.stringify( tareas ) );
    }, [tareas]);

    const addMensaje = (addnew) =>{
        dispatch({
            type: 'addTarea',
            payload: addnew
        });
    }

    const handlerDelete = (id) =>{
        dispatch({
            type: 'deleteTarea',
            payload: id
        });
    }

   
    return (
        <div className='col-12'>
            <div className='col-6 offset-3 text-center'>
                <img className='col-10' src={logo} alt='logo' />
                <h1>Programming Languages</h1>
                <AddTarea addMensaje={addMensaje} />
                <ListTarea tareas={ tareas } handlerDelete={handlerDelete} />
            </div>
        </ div>
    )
    
};

export default Home;