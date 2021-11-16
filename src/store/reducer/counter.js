import * as typeAction from "../actions/actionTypes"
import { updateObject } from "../utils"
const initialState = {
    counter:0
}
const reducer = (state=initialState,action)=>{
    switch(action.type){
     case typeAction.INCREMENT:
         return updateObject(state,{counter:state.counter+1})
    case typeAction.DECREMENT :
        return updateObject(state,{counter:state.counter-1})
         default:
             return state
    }   
}
export default reducer