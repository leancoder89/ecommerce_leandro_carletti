import { useState } from 'react'

const ItemCount = ({ initial = 0 , stock = 10, onadd}) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > 0) {
            setCount(prev => prev - 1)
        }
    }

    const increment = () => {
        if(count<stock)
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={() => onadd(count)}>Agregar al Carrito</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount