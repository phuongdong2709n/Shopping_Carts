import * as mess from '../constants/messages'
import { CHANGE_NOTIFY } from '../constants/actionType'

//initial state
const initialState = mess.MSG_READY


//reducer
const notify =(state=initialState, action)=>{
    switch (action.type) {
        case CHANGE_NOTIFY:
            state=action.content // cập nhập state mới
            return state ;
        default:
            return state ;
    }
}

export default notify;