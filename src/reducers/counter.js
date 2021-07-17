const initialState = {
    count :0
}
export default function counterReducer (state=[initialState],action){
    switch (action.type) {
        case "INCREASE_COUNTER":
              return {...state,count:state.count+1}
        case 'DECREASE_COUNTER':
           break 
        default:
            return state
    }
}