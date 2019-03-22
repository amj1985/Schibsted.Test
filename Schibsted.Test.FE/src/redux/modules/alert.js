
export const alertConstants = {
    SUCCESS: 'ALERT_SUCCESS',
    ERROR: 'ALERT_ERROR',
    CLEAR: 'ALERT_CLEAR'
};



// define types 

export const ALERT_SUCCESS = 'ALERT_SUCCESS';
export const ALERT_FAIL = 'ALERT_FAIL';
export const ALERT_CLEAR = 'ALERT_CLEAR';


// reducer

export function alert(state = {}, action) {
    switch (action.type) {
        case ALERT_SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        case ALERT_FAIL:
            return {
                type: 'alert-danger',
                message: action.message
            };
        case ALERT_CLEAR:
            return {};
        default:
            return state
    }
}


export function success(message) {
    return { type: ALERT_SUCCESS, message };
}

export function error(message) {
    return { type: ALERT_FAIL, message };
}

export function clear() {
    return { type: ALERT_CLEAR };
}