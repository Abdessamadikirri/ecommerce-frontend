import axios from "axios"
import Cookies from "js-cookie"

export const fetch_cart=()=>{
    return async(dispatch)=>{
        try {
            const csrftoken=Cookies.get("XSRF-TOEKN")
            const response = await axios.get("http://localhost:8000/api/cart",{
            headers:{"X-XSRF-TOEKN":csrftoken},withCredentials:true})
             
            dispatch({
                type:"FETCHCAT_SUCCESSED",
                payload:response.data
            })
            
        } catch (error) {
            dispatch({
                type:"FETCHCART_FAILED",
                payload:error.response?.data?.message || error.message
            })
        }
    }
}