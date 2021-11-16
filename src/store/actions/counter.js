import * as typeAction from "./actionTypes"
export const increment = ()=>({
    type:typeAction.INCREMENT
})
export const decrement = ()=>({
    type:typeAction.DECREMENT
})
export const incrementAsync = ()=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(increment())
        },1000)
    }}