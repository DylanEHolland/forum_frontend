import { API_URL, headers } from "../constants";

export const fetchApiHome = () => {
    return fetch(API_URL, {
        method: "GET",
        headers
    }).then(res => res.json())
}

export const SignUpUser = userData => {
    const url = `${API_URL}/user/sign-up`;
    
    return fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(userData)
    }).then(res => res.json())
}