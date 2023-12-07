import { useReducer, useEffect } from "react";

const initialState = {
    items: JSON.parse(localStorage.getItem('todoList')) || [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter((item, index) => index !== action.payload)
            }
        default:
            return state
    }
}


const ToDoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addItem = (text) => {
        dispatch({ type: 'ADD_ITEM', payload: text })
    }
    const removeItem = (index) => {
        dispatch({ type: 'REMOVE_ITEM', payload: index })
    }

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(state.items));
    }, [state.items]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = e.target.task.value.trim();

        if (inputValue !== '') {
            addItem(inputValue);
            e.target.reset();
        }
    }

    return (
        <div>
            <h1>To Do</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder="enter name" />
                <button>Submit</button>
            </form>
            Lists
            {
                state.items.map((item, index) => (
                    <div key={index}>
                        <div>{item}</div>
                        <button onClick={() => removeItem(index)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ToDoList