import Api from "./Api";

const END_POINT = 'cart';
const END_POINT_ADDED_CART = 'cart/cart_item';
const END_POINT_DELETED_CART = 'cart/delete_cart_item';

export default {
    getCartInfo(data) {
        let headers = { "apikey": "3940679693961556", "secretkey": "39406796939615561","apistatus":true,"Accept":'application/json'};
        if (localStorage.getItem("userToken")){
            headers = {"apikey": "3940679693961556", "secretkey": "39406796939615561","apistatus":true,"Accept":'application/json',"Authorization":'Bearer '+localStorage.getItem("userToken")};
        }
        return Api.post(END_POINT, data,{headers});
    },
    store(data) {
        let headers = { "apikey": "3940679693961556", "secretkey": "39406796939615561","apistatus":true,"Accept":'application/json'};
        if (localStorage.getItem("userToken")){
            headers = {"apikey": "3940679693961556", "secretkey": "39406796939615561","apistatus":true,"Accept":'application/json',"Authorization":'Bearer '+localStorage.getItem("userToken")};
        }
        return Api.post(END_POINT_ADDED_CART, data,{headers});
    },

    delete(id) {
        return Api.post(`${END_POINT_DELETED_CART}/${id}`);
    },

    deleteAll() {
        return Api.delete(END_POINT);
    }
}
