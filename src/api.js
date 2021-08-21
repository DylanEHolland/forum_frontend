import { API_URL, headers } from "./constants";

export const fetchApiHome = () => {
    return fetch(API_URL, {
        method: "GET",
        headers
    }).then(res => res.json())
}

export const loginSignUpUser = userData => {

}