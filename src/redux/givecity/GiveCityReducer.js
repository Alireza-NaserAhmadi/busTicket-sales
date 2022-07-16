import {CITY} from './GiveCityAction'

const initialState={
    city:[]
}

 const cityReducer=(state=initialState,action)=>{
    switch(action.type){
        case CITY:
            return{
                ...state,
                city:action.payload
            }
        default :
            return state    
    }
}

export default cityReducer;