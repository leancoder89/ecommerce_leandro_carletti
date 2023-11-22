import classes from '../ItemListContainer/ItemListContainer.module.css'

const ItemListContainer = ({greeting}) =>{
return(
    <div>
        <h1 className={classes.titulo}>{greeting}</h1>
    </div>
)
}

export default ItemListContainer