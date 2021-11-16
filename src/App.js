import React from 'react'
import * as creators from "./store/actions"
import {connect} from "react-redux"
function App({count,onIncrement,onDecrement,onIncrementAsync,onGetUser,users,loading}) {
    return (
        <div>
            {count}
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrementAsync}>+Async</button>
            <button onClick={onGetUser}>Fetch User</button>
            {
                loading?"Loading ...":users.map(user=>{
                    return <div>{user.name}</div>
                })
            }
        </div>
    )
}
const mapStateToProps = (state)=>({
    count:state.counter.counter,
    users:state.person.users,
    loading:state.person.loading,
    error:state.person.error
})
const mapDispatchToProps = dispatch=>({
    onIncrement:()=>dispatch(creators.increment()),
    onDecrement:()=>dispatch(creators.decrement()),
    onIncrementAsync:()=>dispatch(creators.incrementAsync()),
    onGetUser:()=>dispatch(creators.fetchUsers())
})
export default connect(mapStateToProps,mapDispatchToProps)(App)


