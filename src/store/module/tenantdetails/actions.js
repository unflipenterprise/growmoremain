import masterTenantApi from "../../../apis/Master";
import masterCategoryApi from "../../../apis/Category";
import masterItemOptionsApi from "../../../apis/ItemOptions";
import masterUserApi from "../../../apis/Users";
import masterUserLoginOtpApi from "../../../apis/UserLoginOtp";
import masterCartApi from "../../../apis/Cart";
import masterOrderApi from "../../../apis/Orders";
import {LocalStorage} from "quasar";

export const getTenantInformations = ({ commit }) => {
    masterTenantApi.all().then(response => {
        if (response) {
            localStorage.setItem('currency_code', response.data.tenant_details[0].currency_symbol);
            commit('SET_TENANT_BASIC_INFO', response.data);
        }
    })
};

export const getCategoryData = ({ commit }, categoryId) => {
    masterCategoryApi.show(categoryId).then(response => {
        commit('SET_SINGLE_CATEGORY', response.data);
    })
};

export const getOptionsData = ({ commit }, itemId) => {
    masterItemOptionsApi.show(itemId).then(response => {
        commit('SET_OPTIONS_INFO', response.data);
    })
};


/*------get cart items-----------*/
export const getCartItmes = ({ commit }) => {
    if (!localStorage.getItem("userToken")){
        masterCartApi.getCartInfo({
            guest_id:(localStorage.getItem("guestId"))?localStorage.getItem("guestId"):'',
            device_id:(localStorage.getItem("deviceId"))?localStorage.getItem("deviceId"):'',
        }).then(response => {
           commit('SET_CART', response.data.cart_list);
        });
    }else {
        masterCartApi.getCartInfo().then(response => {
           commit('SET_CART', response.data.cart_list);
        });
    }
};

/*------Add cart items-----------*/
export const addItemToCart = ({ commit, dispatch }, { product, quantity,options }) => {
    if (!localStorage.getItem("userToken")){
        masterCartApi.store({
            guest_id:(localStorage.getItem("guestId"))?localStorage.getItem("guestId"):'',
            device_id:(localStorage.getItem("deviceId"))?localStorage.getItem("deviceId"):'',
            item_id:product.item_id,
            qty:quantity,
            options:(options)?options:[],
        });
    }else {
        masterCartApi.store({
            item_id:product.item_id,
            qty:quantity,
            options:(options)?options:[],
        });
    }
}

export const removeCart = ({ commit, dispatch },itemId) => {
    masterCartApi.delete(itemId);
}

export const addNotification = ({ commit }, notification) => {
    commit('PUSH_NOTIFICATION', notification);
}

export const removeNotification = ({ commit }, notification) => {
    commit('REMOVE_NOTIFICATION', notification);
}

//Sing In / Sign Up
export const addUser = ({ commit, dispatch }, { name, phone }) => {
    let responseData=0;
    masterUserApi.store({
        name,
        phone
    }).then(response => {
        if (response.status==200){
            responseData=1;
        }
    });
    return responseData;
}

//Veryfied User OTP
export const VeryfiedUsersByOtp = ({ commit, dispatch }, { phone, phone_otp }) => {
    masterUserLoginOtpApi.store({
        phone,
        phone_otp
    }).then(response => {
        return response;
    });
}


//Address Create
export const addAddressData = ({ commit, dispatch }, {formData }) => {
    var selectAddressTop=formData.city+'-'+formData.pincode;
    var selectedAdressBottom=formData.house_no+','+formData.street_address+','+formData.locality;
    let responseData=0;

    localStorage.setItem('selectedAdressTop',selectAddressTop);
    localStorage.setItem('selectedAdressBottom',selectedAdressBottom);

    masterUserApi.storeAddress(formData).then(response => {
        if (response.data){
            localStorage.setItem('selectedDefaultAddressID',response.data[0].id);
        }
    });
}


export const getUserAddressList= ({ commit }) => {
    masterUserApi.allAddress().then(response => {
        if (response) {
            commit('USER_STREET_ADDRESS', response.data);
        }
    })
};

export const getCartOptionsData = ({ commit }, itemId) => {
    masterItemOptionsApi.showCartOption(itemId).then(response => {
      commit('SET_OPTIONS_INFO', response.data);
    })
};

export const getOrderHistory = ({ commit }, itemId) => {
    masterItemOptionsApi.getOrderHistory(itemId).then(response => {
      commit('SET_USER_ORDER', response.data.order_list);
    })
};
