import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./productcard.module.css"

export default function ProductsCard() {

    const products = useSelector(state => state.product.item)
    const navigate = useNavigate()

    const handlclick = (id) => {
        navigate(`/product/${id}`)
        console.log(id)
    }



    return (
        <>
            {products.map(product => (
                <div key={product.id} className={styles.card} onClick={() => handlclick(product.id)}>
                    <img src={product.image_url} alt="" />
                    <h3 className={styles.title}>{product.name}</h3>
                    <p className={styles.description}>{product.description}</p>

                    <p className={styles.price}>{product.price}</p>

                </div>
            ))}
        </>)
}