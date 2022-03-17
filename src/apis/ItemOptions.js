import Api from "./Api";

const END_POINT = 'item_option';
const END_POINT_CART_ITEM_OPTIONS = 'cart_item_option';
const END_POINT_ORDER_HISTORY    = 'customers/orderHistory';
const headers = { "apikey": "3940679693961556", "secretkey": "39406796939615561","apistatus":true};

export default {
    all() {
        return Api.get(END_POINT,{ headers });
    },
    show(id) {
        return Api.get(`${END_POINT}/${id}`,{headers});
    },
    showCartOption(cartId) {
        let  headers = {"apikey": "3940679693961556", "secretkey": "39406796939615561","apistatus":true,"Accept":'application/json',"Authorization":'Bearer '+localStorage.getItem("userToken")};
        return Api.post(`${END_POINT_CART_ITEM_OPTIONS}/${cartId}`,[],{headers});
    },
    getOrderHistory() {
        let  headers = {"apikey": "3940679693961556", "secretkey": "39406796939615561","apistatus":true,"Accept":'application/json',"Authorization":'Bearer '+localStorage.getItem("userToken")};
        return Api.post(END_POINT_ORDER_HISTORY,[],{headers});
    }
}
