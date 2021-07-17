const initialState = {
    todo:[]
}
export default function todos(state=initialState,action){
    switch(action.type){
        case"ADD_THING":
        return {...state,todo:[...state.todo,action.todo]}
        case "REMOVE_THING":
            //you can use filter method 
            break;
            default:
                return state;
    }
}