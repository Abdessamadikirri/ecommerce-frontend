import { useSelector } from "react-redux";
import styles from "./productcard.module.css"

export default function ProductsCard() {
    const products = useSelector(state => state.product.item)
    console.log(products)
    return (
        <>
            {products.map(product => (
                <div key={product.id} className={styles.card}>
                    <img src={product.image_url} alt="" />
                    <h3 className={styles.title}>{product.name}</h3>
                    <p className={styles.description}>{product.description}</p>

                    <p className={styles.price}>{product.price}</p>
                </div>
            ))}
        </>)
}