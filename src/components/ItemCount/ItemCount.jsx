import { useState } from "react";
import classes from "./ItemCount.module.css";

const ItemCount = ({ incrementBy, onAdd }) => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        if(count > 0) {
            setCount(prev => prev - incrementBy)
        }
    }

    const increment = () => {
        setCount(prev => prev + incrementBy)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className={classes.button1} onClick={decrement}> - </button>
            <button className={classes.button} onClick={() => onAdd(count)}> Agregar al carrito </button>
            <button onClick={increment}> + </button>
        </div>
    )
}

export default ItemCount