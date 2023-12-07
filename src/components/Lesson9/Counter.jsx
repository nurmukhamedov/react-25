import { useReducer } from 'react'
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 }
        case 'DECREMENT':
            return { count: state.count - 1 }
        default:
            break;
    }
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        </div >
    )
}

export default Counter