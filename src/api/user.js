import { API_URL, JSON_HEADERS } from "../constants";
import store from 'store';


export const fetchApiHome = () => {
    const headers = { ...JSON_HEADERS };
    // headers['Authorization'] = 'Bearer: ' + store.get('token');
    headers['Authorization'] = store.get('token');

    console.log(headers);

    return fetch(API_URL, {
        method: "GET",
        headers
    }).then(res => res.json())
}

export const SignUpUser = userData => {
    const url = `${API_URL}/user/sign-up`;
    
    return fetch(url, {
        method: "POST",
        JSON_HEADERS,
        body: JSON.stringify(userData)
    }).then(res => res.json())
}