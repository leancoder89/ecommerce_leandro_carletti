import classes from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {
    return (
        <section>
            <div className={classes.card}>
                <img src={img} style={{ width: 250 }} />
                <h2>{name}</h2>

                <h3>Precio ${price}</h3>

                <Link className={classes.link} to={`/detail/${id}`}>
                    Ver Detalle
                </Link>
            </div>
        </section>
    );
};

export default Item;