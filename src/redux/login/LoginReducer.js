import { SEND_INFO ,DELETE } from "./LoginAction";

const initialState={
    user:{}
}

const sentPhoneReducer=(state=initialState ,action)=>{
    switch(action.type){
        case SEND_INFO:
            return{
                ...state,
                user:action.payload
            }
        case DELETE :
            return{
                ...state,
                user:{}
            }    
        default :
            return state    
    }
}


export default sentPhoneReducer;