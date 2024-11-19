import { ADD_TO_CART, REMOVE_TO_CART } from "./constant";
const initialstate =[];
export const reducer =(state=initialstate,action)=>{ //do parameter atleast hone chahiye
    switch(action.type)
    {
        case ADD_TO_CART:
            return[
                ...state,
                action.data //ab ye data store ke ander add ho jayega
            ]
            case REMOVE_TO_CART:
                let result = state.filter(itm=>{
                    return itm.name != action.data
                })
                return [...result]
                
            default :
            return state;
    }
}
