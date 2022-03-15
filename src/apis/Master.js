import Api from "./Api";

const END_POINT = 'master';

export default {
    all() {
        const headers = { "apikey": "3940679693961556", "secretkey": "39406796939615561","apistatus":true};
        return Api.get(END_POINT,{ headers });
    },
    show(id) {
        return Api.get(`${END_POINT}/${id}`);
    }
}
