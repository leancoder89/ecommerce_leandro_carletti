import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    console.log(products);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products");

        getDocs(collectionRef)
            .then((querySnapshot) => {
                console.log(querySnapshot);

                const productsAdapted = querySnapshot.docs.map((doc) => {
                    const fields = doc.data();
                    return { id: doc.id, ...fields };
                });

                setProducts(productsAdapted);
            })

            .catch((error) => {
                console.log(error);
            })

            .finally(() => {
                setLoading(false);
            });

    }, [categoryId]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;