// reducer for the root state

const initialState = {
    posts: [],
    todo: [],
    count: 0
}
const rootReducer = (state = initialState, action) => {
        switch (action.type) {
            case 'ADD_POST':
                return {
                    ...state,
                    posts: [...state.posts, action.post]
                }
                case 'ADD_TODO':
                    return {
                        ...state,
                        todo: [...state.todo, action.todo]
                    }
                    case 'INCRESE_COUNTER':
                        return {
                            ...state,
                            count: state.count + 1
                        }
                        default:
                            return state
        }
    }
        export default rootReducer