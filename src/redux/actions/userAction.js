import axios from "axios"
import Cookies from "js-cookie"
export const register = (formdata)=>{
    return async(dispatch) =>{
        try {
            await axios.get("http://localhost:8000/sanctum/csrf-cookie",{withCredentials:true})
            const csrftoken=Cookies.get("XSRF-TOKEN")
            
            const response = await axios.post("http://localhost:8000/api/register",formdata,{
                headers:{"X-XSRF-TOKEN":csrftoken},
                withCredentials:true})
            dispatch({
                type:"REGISTER_SUCCESS",
                payload:response.data.user
            })
        } catch (error) {
            dispatch({
                type:"REGISTER_FAIL",
                payload:error.response?.data?.message || error.message
            })
        }
    }
}

export const login =(formdata) =>{
    return async (dispatch) =>{

        try {
        await axios.get("http://localhost:8000/sanctum/csrf-cookie",{withCredentials:true})
        const csrftoken=Cookies.get("XSRF-TOKEN")
 
        const response = await axios.post("http://localhost:8000/api/login",formdata,{
            headers:{"X-XSRF-TOKEN":csrftoken},
            withCredentials:true})
            
        dispatch({
            type:"LOGIN_SUCCESS",
            payload:response.data.user
        })
            
        } catch (error) {
            dispatch({
                type:"LOGIN_FAIL",
                payload:error.response?.data?.message || error.message
            })
        }
    }
}

export const logout = ()=>{
    return async (dispatch) =>{
        try {
            await axios.get("http://localhost:8000/sanctum/csrf-cookie",{withCredentials:true})
            const csrftoken=Cookies.get("XSRF-TOKEN")

            const response = await axios.post("http://localhost:8000/api/logout",{},{
                headers:{"X-XSRF-TOKEN":csrftoken},
                withCredentials:true})
               
            dispatch({
                type:"LOGOUT_SUCCESS",
                payload:response.data.message
            })
        } catch (error) {
            dispatch({
                type:"LOGOUT_FAIL",
                payload:error.response?.data?.message || error.message
            })
        }
    }
}