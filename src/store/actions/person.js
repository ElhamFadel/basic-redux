import axios  from "axios"
import * as typeAction from "./actionTypes"

export const fetchUsersRequest = ()=>({
    type:typeAction.FETCH_USERS_REQUEST
})
export const fetchUsersSuccess = (data)=>({
    type:typeAction.FETCH_USERS_SUCCESS,
    payload:data
})
export const fetchUsersFailure = (error)=>({
    type:typeAction.FETCH_USERS_FAILURE,
    payload:error
})
export const fetchUsers = ()=>{
    return dispatch=>{
        dispatch(fetchUsersRequest)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            dispatch(fetchUsersSuccess(response.data))
        })
        .catch((err)=>{
            dispatch(fetchUsersFailure(err))
        })
    }
}