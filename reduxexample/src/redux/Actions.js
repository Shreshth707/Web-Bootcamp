export const CREATE_NEW_CONTACT ="create_new_contact";
export const REMOVE_CONTACT ="remove_contact";

// action creators
// take data from view and return action object
export const createContact = (contact) => {
    return {
        type : CREATE_NEW_CONTACT,
        contact: contact
    }
}

export const deleteContact = (email) => {
    return {
        type: REMOVE_CONTACT,
        email: email
    }
}