import {
    login as loginApi,
    logout as logoutApi,
} from '../../modules/userApi';

const initialState = {
    user: {},
    error: undefined,
    loggedIn: false
};

export const LOGIN = 'login/LOGIN';
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'login/LOGIN_FAIL';

export const LOGOUT = 'logout/LOGOUT';
export const LOGOUT_SUCCESS = 'logout/LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'logout/LOGOUT_FAIL';

export default function reducer(state = initialState, action = {}) {
    const {
        type
    } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return { ...state, loggedIn: true, user: action.result }
        case LOGIN_FAIL:
            return { ...state, user: {}, loggedIn: false, error: action.error }
        case LOGOUT_SUCCESS:
            return { ...state, user: {}, loggedIn: false }
        case LOGOUT_FAIL:
            return { ...state, user: undefined, error: action.error }
        default: {
            return { ...state };
        }
    }
}

export function login(params) {
    return {
        types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
        promise: () => loginApi(params),
    };
}

export function logout(email) {
    return {
        types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
        promise: () => logoutApi(email),
    };
}

