import ReactImg from './assets/carrito.webp'
import classes from './CartWidget.module.css'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useCart();

    return (
        <div>
            <img className={classes.carrito} src={ReactImg} />
            {totalQuantity}
        </div>
    );
};

export default CartWidget;