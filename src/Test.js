import React,{useReducer} from 'react'
const initialState ={
    name:"elham",
    age:20
}
const reducer = ( state,action)=>{
    switch (action.type) {
        case "changeName":
            return {...state,name:action.value};
         case "changeAge":
            return {...state,age:action.value}
        default:
            return state;
    }
}
const handleSubmit = (e)=>{
    return e.preventDefault();
}
function Test() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <form onSubmit={e=>handleSubmit()}>
              <input type="text" name="name"  placeholder="enter name :" onChange={e=>dispatch({type:"changeName",value:e.target.value})}/>
              <input type="number" name="age"  placeholder="enter name :" onChange={e=>dispatch({type:"changeAge",value:e.target.value})}/>
            </form>
            {state.name }{state.age}
        </div>
    )
}

export default Test
