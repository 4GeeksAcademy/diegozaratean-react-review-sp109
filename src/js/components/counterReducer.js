export function counterReducer(state,action){
    switch(action.type){
        case 'increment':
            return { count: state.count + 1, message: 'cambiaste que te paso???'}
         case 'decrement':
            return { count: state.count - 1, message: 'estas menopr que paso'}
        default: 
            throw new Error('no se encontor la accion')
    }
}
