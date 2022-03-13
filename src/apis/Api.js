import axios from "axios";

const Api = axios.create({
    baseURL: 'http://unflip.io/api/v1'
});

export default Api;
