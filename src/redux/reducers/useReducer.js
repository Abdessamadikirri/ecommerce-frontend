const initialState ={
    user:  JSON.parse(localStorage.getItem("user"))|| null,
    isauth:JSON.parse(localStorage.getItem("isauth")) || false,
    isloading:true,
    message:''
}

console.log(initialState.user)
  const    userReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "REGISTER_SUCCESS":
            localStorage.setItem("user",JSON.stringify(action.payload));
            localStorage.setItem("isauth",JSON.stringify(true))
            return {
                ...state,user:action.payload, isauth:true, isloading:false,
            }
        case "REGISTER_FAIL":
            return{
                ...state,isloading:false,message:action.payload
            }
        case "LOGIN_SUCCESS":
            localStorage.setItem("user",JSON.stringify(action.payload));
            localStorage.setItem("isauth",JSON.stringify(true))
            return{
                ...state,user:action.payload,isauth:true,isloading:false,message:''
            }
        case "LOGIN_FAIL":
            return {
                ...state,isloading:false,message:action.payload
            }
        case "LOGOUT_SUCCESS":
            localStorage.removeItem("user")
            localStorage.removeItem("isauth")  
            return {
                ...state,user:null, isloading:false ,isauth:false 
            }
        case "LOGOUT_FAIL":
              
            return{
                ...state,isloading:false,message:action.payload
            }
        default:
            return state;
    }
 
}

export default userReducer