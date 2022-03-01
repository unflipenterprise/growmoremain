import axios from "axios";

const Api = axios.create({
    baseURL: 'http://172.105.55.38/api/v1'
});

export default Api;
