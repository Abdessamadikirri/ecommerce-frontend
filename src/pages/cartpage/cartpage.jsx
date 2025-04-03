import { useDispatch, useSelector } from "react-redux";
import styles from "./cartpage.module.css"
import { useEffect } from "react";
import { fetch_cart } from "../../redux/actions/cartAction";
import Loading from "../../components/loading/loading";
export default function Cartpage() {
    const cartitems = useSelector(state => state.cart.cartitems)
    console.log(cartitems)
    const dispatch = useDispatch()
    const isloading = useSelector(state => state.cart.isloading)
    useEffect(() => {
        dispatch(fetch_cart())
    }, [dispatch])
    return (
        <>{isloading ? <Loading /> : (<div className={styles.cartpage}>
            <div className={styles.items}>
                {cartitems.map(item => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.img}>
                            <img src={item.image_url} alt="" />
                        </div>
                        <div className={styles.left}>
                            <h3 >{item.name}</h3>
                            <p>{item.description}</p>

                            <p className={styles.price}><strong>{item.price}</strong></p>
                            <input type="number" name="quantity" min="1" />
                            <button>Update</button> <button>Delete</button>
                        </div>

                    </div>
                ))}
            </div>
            <div className={styles.checkout}></div>
        </div>)}</>
    );
}