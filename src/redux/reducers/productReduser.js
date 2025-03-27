const initialState ={
    item:[],
    isloading:true
}

const productReduser = (state=initialState,action)=>{
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return{
                ...state,item:action.payload,isloading:false

            }
        default:
            return state
    }
}
export default productReduser