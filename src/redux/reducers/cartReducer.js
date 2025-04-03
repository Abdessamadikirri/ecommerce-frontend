 

const initialState={
    cartitems:[],
    isloading:true,
    message:''
}

const cartReducer =(state=initialState,action)=>{
    switch (action.type) {
        case "FETCHCAT_SUCCESSED":
            return{
                ...state,cartitems:action.payload,isloading:false
            }
             
        case "FETCHCART_FAILED":
            return{
                ...state,isloading:false,message:action.payload
            }   
    
        default:
            return state;
    }
} 

export default cartReducer