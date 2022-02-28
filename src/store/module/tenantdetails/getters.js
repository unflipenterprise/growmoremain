export const tenantDetails = (state) => {
    if (state.tenantData) {
        if (state.tenantData.tenant_details) {
            let newTrack = JSON.stringify(state.tenantData.tenant_details);
           return state.tenantData.tenant_details[0];
        }
    }
};

export const sliders = (state) => {
    if (state.tenantData.tenant_promotional_type) {
        return state.tenantData.tenant_promotional_type[0].promotionItem;
    }
};

export const servicesImage = (state) => {
    if (state.tenantData.tenant_promotional_type) {
        return state.tenantData.tenant_promotional_type[1].promotionItem[0].promotion_image;
    }
};

export const categories = (state) => {
    if (state.tenantData.categories) {
        return state.tenantData.categories;
    }
};

//get single category by api
export const singleCategory = (state) => {
    console.log(state.categorySingleData.categories);
    if (state.categorySingleData.categories) {
        return state.categorySingleData.categories[0];
    }
}

export const categoryItemList = (state) => {
    if (state.categorySingleData.categories) {
        return state.categorySingleData.categories[0].items;
        return state.categorySingleData.categories[0].items;
    }
}

//Get Single Options
export const optionsItem = (state) => {
    if (state.itemsOptionData.optiongroups) {
        return state.itemsOptionData.optiongroups;
    }
}

//Cart Functionality
export const cartItemCount = (state) => {
    if (state.cart) {
        return state.cart.length;
    }else {
        return '';
    }
}

export const cartTotalPrice = (state) => {
    let total = 0;
    state.cart.forEach(item => {
        total += (item.item_sale_price/100) * item.qty;
    });
    return total;
}

export const cartTotalQuantity = (state) => {
    let total = 0;
    state.cart.forEach(item => {
        total += item.qty;
    })
    return total;
}

//Cart Functionality
export const cartListing = (state) => {
    if (state.cart) {
        return state.cart;
    }else {
        return '';
    }
}
