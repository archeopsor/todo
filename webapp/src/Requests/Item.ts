import axios, { AxiosResponse } from 'axios';
import { baseUrl } from './Config';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { refreshToken } from './Login';

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 15000,
})

const responseBody = (response: AxiosResponse) => response.data;

// Instantiate automatic interceptor for 401 (not authenticated) errors
createAuthRefreshInterceptor(instance, refreshToken);

const requests = {
    get: (url: string) => instance.get(url).then(responseBody),
    post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
    put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
    delete: (url: string) => instance.delete(url).then(responseBody),
}

export const Item = {
    getAllItems: (): Promise<ItemType[]> => requests.get('items'),
    getItem: (id: number): Promise<ItemType> => requests.get(`items/${id}`),
    createItem: (item: ItemType): Promise<ItemType> => requests.post('items', item),
    updateItem: (id: number, item: ItemType): Promise<ItemType> => requests.put(`items/${id}`, item),
    deleteItem: (id: number): Promise<void> => requests.delete(`items/${id}`),
}