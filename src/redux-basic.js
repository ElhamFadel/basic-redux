import {createStore} from "redux"
const initialState = {
    count:0,
    todo:[]
}
const rootRedux = (state = initialState, action) => {
    switch (action.type) {
        case "INC_COUNTER":
           return {
               ...state,
                count:state.count+1,
            }
        case "ADD_TODO":
            return {
                 ...state,
                 todo:[...state.todo,action.value]
            }
        default:
            return state
    }
}
const store = createStore(rootRedux);
// to get the state
console.log(store.getState())

// to dispatch an action
store.dispatch({ type:"INC_COUNTER", value:12})
store.dispatch({ type:"ADD_TODO", value:"test"})
// subscrubtion 
store.subscribe(()=>{
    console.log(store.getState(),"Heyyyyyyyyyyyyy")
})