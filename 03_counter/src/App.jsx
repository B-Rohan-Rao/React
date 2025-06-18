import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0);

    const addCount = () => setCount(prev => prev + 1);
    const removeCount = () => setCount(prev=>prev - 1);
    const reset = () => setCount(0);


    return (
        <>
            <h1>Hello World</h1>
            <h2>Counter value: {count}</h2>
            <button onClick={addCount}>Add value</button>{" "}
            <button onClick={removeCount}>Remove value</button> {" "}
            <button onClick={reset}>Reset</button>
            <p>footer: {count}</p>
        </>
    )
}

export default App
