import axios from "axios"

export const fetchProducts =()=>{
    return async(dispatch)=>{
       const response= await axios.get("http://localhost:8000/api/products")

       dispatch({
        type:"FETCH_PRODUCTS",
        payload:response.data
       })
    }
}