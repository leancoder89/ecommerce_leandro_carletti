import classes from '../ItemListContainer/ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asyncMock'
import Itemlist from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
        .then(Response =>{
            setProducts(Response)
        })
    })
    
return(
    <div>
        <h1 className={classes.titulo}>{greeting}</h1>
        <Itemlist products={products} />
    </div>
)
}

export default ItemListContainer