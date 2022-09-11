import axios from "axios";
import {fetchUsersRequest, fetchUsersSuccess, fetchUsersFailuer} from '../Actions'
// view calls thunk function
export const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest()); 
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            dispatch(fetchUsersSuccess(response.data))
        })
        .catch(error => {
            dispatch(fetchUsersFailuer(error));
        })
    }
}