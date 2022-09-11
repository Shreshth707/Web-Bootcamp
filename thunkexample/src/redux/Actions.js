export const FETCH_USERS_REQUEST = "fetch_users_request";
export const FETCH_USERS_SUCCESS = "fetch_users_success";
export const FETCH_USERS_FAILURE = "fetch_users_failure";

// action creators
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailuer = error => {
    return {
        type : FETCH_USERS_FAILURE,
        payload: error
    }
}