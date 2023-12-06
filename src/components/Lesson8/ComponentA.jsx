import { MemoizedComponentB } from "../ComponentB";
import { useState } from "react";

const ComponentA = () => {
    const [state, setstate] = useState(0);

    console.log('Component A rendered');

    const handleChange = () => {
        setstate(state + 1);
    }
    return (
        <div>
            {state}

            <button onClick={handleChange}>+</button>
            <MemoizedComponentB />
        </div>
    )
}

export default ComponentA