import {
    getUser as getUserApi,
    getUsers as getUsersApi,
    addUser as addUserApi,
    removeUser as removeUserApi,
    updateUser as updateUserApi
} from '../../modules/userApi';


const initialState = {
    users: [],
    user: {},    
    selectedUser: {},
    error: undefined,
    message: undefined
};



// define types

export const GET_USERS = 'user/GET_USERS';
export const GET_USERS_SUCCESS = "user/GET_USERS_SUCCESS";
export const GET_USERS_FAIL = "user/GET_USERS_FAIL";

export const GET_USER = 'user/GET_USER';
export const GET_USER_SUCCESS = "user/GET_USER_SUCCESS";
export const GET_USER_FAIL = "user/GET_USER_FAIL";

export const ADD_USER = 'user/ADD_USER';
export const ADD_USER_SUCCESS = 'user/ADD_USER_SUCCESS';
export const ADD_USER_FAIL = 'user/ADD_USER_FAIL';

export const REMOVE_USER = 'user/REMOVE_USER';
export const REMOVE_USER_SUCCESS = 'user/REMOVE_USER_SUCCESS';
export const REMOVE_USER_FAIL = 'user/REMOVE_USER_FAIL';

export const UPDATE_USER = 'user/UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'user/UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAIL = 'user/UPDATE_USER_FAIL';

// reducer

export default function reducer(state = initialState, action = {}) {
    const {
        type
    } = action;
    switch (type) {
        case GET_USERS_SUCCESS:
            return { ...state, users: action.result }
        case GET_USERS_FAIL:
            return { ...state, users: undefined, error: action.error }
        case GET_USER_SUCCESS:
            return { ...state, user: action.result }
        case GET_USER_FAIL:
            return { ...state, user: undefined, error: action.error }
        case ADD_USER_SUCCESS:
            return { ...state, message: action.result }
        case ADD_USER_FAIL:
            return { ...state, error: action.error }
        case REMOVE_USER_SUCCESS:
            return { ...state, message: action.result, users: state.users.filter(e => e.id !== action.result), selectedUser: state.users.filter(e => e.id === action.result) }
        case REMOVE_USER_FAIL:
            return { ...state, error: action.error }
        case UPDATE_USER_SUCCESS:
            return { ...state, message: action.result }
        case UPDATE_USER_FAIL:
            return { ...state, error: action.error }
        default: {
            return { ...state };
        }
    }
}
// actions
export function getUsers() {
    return {
        types: [GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAIL],
        promise: () => getUsersApi(),
    };
}
export function getUser(id) {
    return {
        types: [GET_USER, GET_USERS_SUCCESS, GET_USER_FAIL],
        promise: () => getUserApi(id),
    };
}
export function addUser(user) {
    return {
        types: [ADD_USER_SUCCES, ADD_USER_SUCCESS, ADD_USER_FAIL],
        promise: () => addUserApi(user),  
    }
}
export function updateUser(user) {
    return {
        types: [UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL],
        promise: () => updateUserApi(user),  
    }
}
export function removeUser(id) {
    return {
        types: [REMOVE_USER, REMOVE_USER_SUCCESS, REMOVE_USER_FAIL],
        promise: () => removeUserApi(id),  
    }
}