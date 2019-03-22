import { default as API } from './base/api';
import { BASEURI, LOGIN } from '../config/apiConfig';
export const login = (params) => {
    const url = `${BASEURI}${LOGIN}`;
    return API.post(url, params);
};
export const logout = (params) => {
    const url = `${BASEURI}${LOGIN}`;
    return API.post(url, params);
}