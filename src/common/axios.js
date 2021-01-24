import axios from "axios";

const instance = axios.create()

export const api = (method, url, data) => {
    return instance({
        method,
        url,
        data,
        params: {
            _limit: 10
        }
    })
}