import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

    const { productId } = useParams();

    useEffect(() => {
        setLoading(true);

        const documentRef = doc(db, "products", productId);

        getDoc(documentRef)
            .then((queryDocumentSnapshot) => {
                const fields = queryDocumentSnapshot.data();
                const productAdapted = { id: queryDocumentSnapshot.id, ...fields };
                setProduct(productAdapted);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [productId]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product} />
        </>
    );
};

export default ItemDetailContainer;