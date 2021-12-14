import axios, { AxiosError, AxiosResponse } from 'axios';
import { baseUrl } from './Config';
import { setCookie, getCookie } from './Cookies';


const instance = axios.create({
    baseURL: baseUrl,
    timeout: 15000,
    headers: { "Content-Type": "application/json" },
})

const responseBody = (response: AxiosResponse) => response.data;

export const getTokens = (username: string, password: string) => {
    const tokens = instance.post('/login/token', {
        username: username,
        password: password,
    }).then(responseBody)
    .then((data) => {
        setCookie("access", data.access, 0.02);
        setCookie("refresh", data.refresh, 1);
    }).catch((err: AxiosError) => {
        //TODO all of this
        if (!err.response) {
            console.log(err);
        }
        else if (err.response.status === 401){ // Bad login info
            console.log(); // redirect to login?
        }
        else{
            console.log(err);
        }
    })
}

export const refreshToken = (): Promise<void> => {
    const refresh = getCookie("refresh");
    return instance.post('/login/token/refresh', {
        refresh: refresh
    }).then(responseBody)
    .then((data) => {
        setCookie("access", data.access, 0.02);
    });
}