const initialState ={
    user:null,
    isauth:false,
    isloading:true,
    message:''
}


  const    userReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "REGISTER_SUCCESS":
            
            return {
                ...state,user:action.payload, isauth:true, isloading:false,
            }
        case "REGISTER_FAIL":
            return{
                ...state,isloading:false,message:action.payload
            }
        case "LOGIN_SUCCESS":
            return{
                ...state,user:action.payload,isauth:true,isloading:false,message:''
            }
        case "LOGIN_FAIL":
            return {
                ...state,isloading:false,message:action.payload
            }
        case "LOGOUT_SUCCESS":
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