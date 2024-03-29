import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { db } from '../../services/firebase/firebaseConfig'
import {addDoc, getDocs, collection, query, where, documentId, writeBatch} from 'firebase/firestore'
import { useForm } from 'react-hook-form'
import classes from './Checkout.module.css'

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);

    const { cart, total, clearCart } = useCart();

    const { register, handleSubmit } = useForm();

    const createOrder = async (data) => {
        try {
            setLoading(true);
            const objOrder = {
                buyer: {
                    name: data.name,
                    phone: data.phone,
                    email: data.email,
                },
                items: cart,
                total,
            };

            const batch = writeBatch(db);
            const outOfStock = [];

            const ids = cart.map((prod) => prod.id);

            const productsCollection = query(
                collection(db, "products"),
                where(documentId(), "in", ids)
            );

            const { docs } = await getDocs(productsCollection);

            docs.forEach((doc) => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productAddedToCart = cart.find((prod) => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                batch.commit();

                const ordersCollection = collection(db, "orders");

                const { id } = await addDoc(ordersCollection, objOrder);

                clearCart();
                setOrderId(id);
            }
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Se esta generando su orden...</h1>;
    }

    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>;
    }

    return (
        <>
            <h1>CHECKOUT</h1>

            <div className={classes.container}>
                <form className="form" onSubmit={handleSubmit(createOrder)}>
                    <input
                        className={classes.input}
                        type="text"
                        placeholder="Nombre"
                        {...register("name")}
                    />
                    <input
                        className={classes.input}
                        type="email"
                        placeholder="mate@gmail.com"
                        {...register("email")}
                    />
                    <input
                        className={classes.input}
                        type="tel"
                        placeholder="Teléfono"
                        {...register("phone")}
                    />

                    <button className={classes.button}>GENERAR ORDEN</button>
                </form>
            </div>
        </>
    );
};

export default Checkout;
