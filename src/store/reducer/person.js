import * as typeAction from "../actions/actionTypes"
import { updateObject } from "../utils"
const initialState = {
    users:[],
    error:null,
    loading:false,
}
const reducer = (state=initialState,action)=>{
    switch(action.type){
        case typeAction.FETCH_USERS_REQUEST:
            return updateObject(state,{loading:true})
        case typeAction.FETCH_USERS_SUCCESS:
            return updateObject(state,{loading:false,users:action.payload})
        case typeAction.FETCH_USERS_FAILURE:
            return updateObject(state,{loading:false, error:action.payload})
         default:
             return state
    }   
}
export default reducer