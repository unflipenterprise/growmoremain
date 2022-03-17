import Api from "./Api";

const END_POINT = 'login';
const END_POINT_GET_ADDRESS = 'customers/address';
const END_POINT_POST_ADDRESS = 'customers/addressStore';

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
    allAddress() {
        let headers = { "apikey": "3940679693961556", "secretkey": "39406796939615561","apistatus":true,"Accept":'application/json'};
        if (localStorage.getItem("userToken")){
            headers = {"apikey": "3940679693961556", "secretkey": "39406796939615561","apistatus":true,"Accept":'application/json',"Authorization":'Bearer '+localStorage.getItem("userToken")};
        }
        return Api.get(END_POINT_GET_ADDRESS,{ headers });
    },
    storeAddress(data) {
        let headers = { "apikey": "3940679693961556", "secretkey": "39406796939615561","apistatus":true,"Accept":'application/json'};
        if (localStorage.getItem("userToken")){
            headers = {"apikey": "3940679693961556", "secretkey": "39406796939615561","apistatus":true,"Accept":'application/json',"Authorization":'Bearer '+localStorage.getItem("userToken")};
        }
        return Api.post(END_POINT_POST_ADDRESS, data,{headers});
    }
}
