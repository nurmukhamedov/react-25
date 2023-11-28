import { useState, useEffect } from "react"
const ComponentC = () => {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');


    const handleChange = (event) => {
        setValue(event.target.value);

        console.log(event.target.value)
    }
    const increment = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log('calling')
    }, [count]);



    return (
        <div>
            <h3>{count}</h3>
            <button onClick={increment}>+</button>

            <input value={value} onChange={handleChange} placeholder='enter name' />
        </div>
    )
}

export default ComponentC