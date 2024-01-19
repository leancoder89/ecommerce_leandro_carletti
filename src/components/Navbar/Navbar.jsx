import React from 'react'
import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import ReactImg2 from './assets/yerbamatestore.png'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav
            className={classes.container}
            style={{ display: "flex", justifyContent: "space-between" }}
        >
            <div className={classes.divlogo}>
                <img onClick={() => navigate("/")} src={ReactImg2} alt="" />
            </div>
            <section className={classes.categories}>
                <Link to="/category/yerbas" className={classes.button}>
                    YERBAS
                </Link>

                <Link to="/category/mates" className={classes.button}>
                    MATES
                </Link>

                <Link to="/category/bombillas" className={classes.button}>
                    BOMBILLAS
                </Link>

                <div className={classes.cartwidget} onClick={() => navigate("/cart")}>
                    <CartWidget />{" "}
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
