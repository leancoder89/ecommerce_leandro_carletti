import reactImg from './assets/carrito.png'
import classes from '../Navbar/Navbar.module.css'

const CartWidget = () =>{
    return(
        <button>
            <img className={classes.carrito} src={reactImg} />
            0
        </button>
    )
} 

export default CartWidget