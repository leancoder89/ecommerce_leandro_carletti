import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import classes from './ItemDetail.module.css'

const InputCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial);

    const handleChange = (e) => {
        if (e.target.value <= stock) {
            setCount(e.target.value);
        }
    };

    return (
        <div>
            <input type="number" onChange={handleChange} value={count} />
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
};

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial);

    const increase = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrease = () => {
        if(count > 0) {
        setCount(count - 1);
    }};

    return (
        <div>
            <p className={classes.pCount}>{count}</p>
            <button className={classes.decrease} onClick={decrease}> - </button>

            <button className={classes.add} onClick={() => onAdd(count)}> Agregar al carrito </button>

            <button className={classes.increase} onClick={increase}> + </button>
        </div>
    );
};

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
    const [inputType] = useState("button");

    const { addItem, isInCart } = useCart();

    const ItemCount = inputType === "input" ? InputCount : ButtonCount;

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id,
            name,
            price,
            quantity,
        };
        addItem(objProductToAdd);
        console.log("agregue al carrito: ", quantity);
    };

    return (
        <section>
            <div className={classes.card}>
                <h2>{name}</h2>

                <img src={img} alt={name} style={{ width: 500 }} />

                <p>Categoria: {category}</p>
                <p>Descripción: {description}</p>
                <p>Precio: ${price}</p>
                {!isInCart(id) ? (
                    <ItemCount onAdd={handleOnAdd} stock={stock} />
                ) : (
                    <Link className={classes.link} to="/cart">
                        Finalizar compra
                    </Link>
                )}
            </div>
        </section>
    );
};

export default ItemDetail;