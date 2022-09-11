import {CREATE_NEW_CONTACT, REMOVE_CONTACT} from '../Actions'

export default (state=[], action) => {
    switch(action.type) {
        case CREATE_NEW_CONTACT:
            return [
                ...state,
                {...action.contact}
            ]
        case REMOVE_CONTACT:
            return state.filter(c => c.email !== action.email)
        default:
            return state
    }
}

//first action.type ===> @@INIT