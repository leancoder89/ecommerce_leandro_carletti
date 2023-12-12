import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, category, img, stock, price, description}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>categoria: {category}</p>
            <img src={img} />
            <h3>${price}</h3>
            <p>descripcion:c{description}</p>
            <ItemCount stock = {stock} />
        </div>
    )
}

export default ItemDetail