/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const Axios = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_API_URL,
    timeout: 50000,
    headers: {
        "Content-Type": "application/json"
    }
})

Axios.interceptors.request.use((config: any) => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers["Authorization"] = `Token ${token ? token : " "}`
    }
    return config
})

Axios.interceptors.response.use((response: any) => response,
    (error) => {
        if (error?.response && error?.response?.status === 401 && error?.response?.statusText === "Unauthorized") {
            localStorage.removeItem("isAuthenticated")
            localStorage.removeItem("permissions")
            localStorage.removeItem("token")
            localStorage.removeItem("userData")
            window.location.href = "/"
        }
        return Promise.reject(error)
    }
)

class HttpClient {
    async get(url: string, params?: any) {
        const reponse = Axios.get(url, { params })
        return reponse
    }
    async post(url: string, data: any, params?: any) {
        const response = Axios.post(url, data, { params })
        return response
    }
    async patch(url: string, data: any) {
        const response = Axios.patch(url, data)
        return response
    }
    async delete(url: string) {
        const response = Axios.delete(url)
        return response
    }
    async uploadFile(url: string, data: any) {
        const response = Axios.post(url, data, { headers: { "Content-Type": "multipart/form-data" } })
        return response
    }
}

export default new HttpClient()