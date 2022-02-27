import Api from "./Api";

const END_POINT = 'loginotp';
const headers = { "apikey": "3940679693961556", "secretkey": "39406796939615561","apistatus":true,"Accept":'application/json'};

export default {
    all() {

        return Api.get(END_POINT,{ headers });
    },
    show(id) {
        return Api.get(`${END_POINT}/${id}`,{ headers });
    },
    store(data) {
        return Api.post(END_POINT, data,{ headers });
    },
}
