import classes from '../Navbar/Navbar.module.css'
import CartWidget from '../CartWidge/Cartwidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
 <nav className={classes.container}>
    <Link to='/'>Yerba Mate Store</Link>
    <section className={classes.categorias}>
        <Link to= '/category/yerbas' className = 'btn btn-dark'>Yerba Mate</Link>
        <Link to= '/category/mates' className='btn btn-dark'>Mates</Link>
        <Link to='category/bombillas' className='btn btn-dark'>Bombillas</Link>
    </section>
    <CartWidget />
</nav>
    )
    }

    export default Navbar