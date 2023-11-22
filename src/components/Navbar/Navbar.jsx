import classes from '../Navbar/Navbar.module.css'
import CartWidget from '../CartWidge/Cartwidget'

const Navbar = () => {
    return (
<nav className={classes.container} style={{display:'flex', justifyContent: 'space-around' }}>
    <h1>Yerba Mate Store</h1>
    <section className={classes.categorias}>
        <button className='btn btn-dark'>Yerba Mate</button>
        <button className='btn btn-dark'>Mates</button>
        <button className='btn btn-dark'>Bombillas</button>
    </section>
    <CartWidget />
</nav>
    )
    }

    export default Navbar