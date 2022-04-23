

export const reduce = (state , action) =>{
    switch (action.type) {
        case 'addTarea':
            return  [ action.payload ,...state ] ;
        
        case 'deleteTarea':
            return  state.filter(tarea => tarea.id !== action.payload)
    
        default:
            break;
    }
}