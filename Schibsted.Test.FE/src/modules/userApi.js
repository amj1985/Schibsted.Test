import { default as API } from './base/api';
import { BASEURI, USER, LOGIN, LOGOUT } from '../config/apiConfig';

export const getUsers = () => {
    const url = `${BASEURI}${USER}/getall`;
    return API.get(url);
};
export const getUser = (id) => {
    const url = `${BASEURI}${USER}/${id}`;
    return API.get(url);
};
export const addUser = (user) => {
    const url = `${BASEURI}${USER}`;
    return API.post(url, user);
};
export const removeUser = (id) => {
    const url = `${BASEURI}${USER}/${id}`;
    return API.delete(url).then(() => Promise.resolve(id));
};
export const updateUser = (user) => {
    const url = `${BASEURI}${USER}`;
    return API.put(url, user);
};
export const login = (params) => {
    const url = `${BASEURI}${LOGIN}`;
    return API.post(url, params);
};
export const logout = (mail) => {
    const url = `${BASEURI}${LOGOUT}/${mail}`;
    return API.get(url);
}
