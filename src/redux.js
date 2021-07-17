import { createStore } from "redux";
const initialState = {
    todos:[],
    posts:[]
}
const myReducer = (state = initialState , action)=>{
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos:[...state.todos,action.todo]
            }
        case 'remove_TODO':
            
            break;

    
        default:
            break;
    }
}
const store = createStore(myReducer);
const todoAction = {type:'ADD_TODO',todo:'upload image'};// new action 
//when any update in state 
store.subscribe(()=>{
    console.log('update state')
    console.log(store.getState())
})
store.dispatch(todoAction)

