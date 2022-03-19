import axios from "axios";

const Api = axios.create({
    baseURL: 'https://unflip.io/api/v1'
});

export default Api;
