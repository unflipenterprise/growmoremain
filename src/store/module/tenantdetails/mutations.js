export const SET_TENANT_BASIC_INFO = (state, tenantInfo) => {
    state.tenantData = tenantInfo;
};

export const SET_SINGLE_CATEGORY = (state, categorySingle) => {
    state.categorySingleData = categorySingle;
}

export const SET_OPTIONS_INFO = (state, optionsData) => {
    state.itemsOptionData = optionsData;
}

export const SET_USER_RESPONSE = (state, userInfo) => {
    state.userInfo = userInfo;
};

export const PUSH_NOTIFICATION = (state, notification) => {
    state.notifications.push({
        ...notification,
        id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
    })
};

export const REMOVE_NOTIFICATION = (state, notificationToRemove) => {
    state.notifications = state.notifications.filter(notification => {
        return notification.id != notificationToRemove.id;
    })
};


export const ADD_TO_CART = (state, { product, quantity }) => {
    let productInCart = state.cart.find(item => {
        return item.product.item_id === product.item_id;
    });

    if (productInCart) {
        console.log(productInCart);

        productInCart.quantity += quantity;
        return;
    }

    state.cart.push({
        product,
        quantity
    });
};

export const SET_CART = (state, cartItems) => {
    state.cart = cartItems;
};

export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
    state.cart = state.cart.filter(item => {
        return item.product.id !== product.id;
    })
};

export const CLEAR_CART_ITEMS = (state) => {
    state.cart = [];
};
