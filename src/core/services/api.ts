// src/services/api.ts
import axios, {AxiosError, AxiosInstance, AxiosResponse} from "axios";
import {apiURL} from "../resources.ts";

const api: AxiosInstance = axios.create({
    baseURL: apiURL,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});

// Intercepteurs pour la gestion globale des erreurs
api.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error: AxiosError) => {
        console.error('API Error:', error.message);
        throw error;
    }
);

export default api;