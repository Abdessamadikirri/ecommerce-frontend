import { useParams } from "react-router-dom"
import styles from "./productpage.module.css"
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function Productpage() {
    const { id } = useParams();
    const products = useSelector(state => state.product.item)

    const product = products.find(product => product.id === Number(id))
    const [inputdata, setinput] = useState({ quantity: 1, product_id: Number(id), price: product.price })


    const handlinput = (e) => {
        const { value } = e.target
        console.log(value)
        if (value > 0) {
            setinput(prevstate => ({
                ...prevstate,
                quantity: value

            }))
        }
    }

    const handclick = () => {
        try {
            const csrftoken = Cookies.get("XSRF-TOKEN")
            axios.post("http://localhost:8000/api/cartitem", inputdata, { headers: { "X-XSRF-TOKEN": csrftoken }, withCredentials: true })

        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className={styles.productpage}>

            <div className={styles.product}>
                <div className={
                    styles.image
                }>
                    <img src={product.image_url} alt="product image" />
                </div>
                <div className={styles.left}>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <input type="number" name="quantity" min="1" onChange={handlinput} />
                    <button onClick={handclick}>Add to cart</button>
                </div>
            </div>

        </div>
    )
} 