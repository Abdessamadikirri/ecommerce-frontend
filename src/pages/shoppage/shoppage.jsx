import styles from "./shoppage.module.css"

import Loading from "../../components/loading/loading";
import { fetchProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductsCard from "../../components/productCard/productcard";
export default function Shoppage() {
    const dispatch = useDispatch()
    const isloading = useSelector(state => state.product.isloading)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    return (
        <div className={styles.shoppage}>

            <div className={styles.middleconten}>
                {isloading ? <Loading /> : <ProductsCard />}
            </div>

        </div>
    );
}