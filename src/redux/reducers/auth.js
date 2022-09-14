import ActionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
    error : null ,
    isLogin : null, 
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        default :
            return state ;
    }
}