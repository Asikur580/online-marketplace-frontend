import { defineStore } from "pinia";

export const useProductStore = defineStore('productStore', {
    state: () => {
        return {
            errors: {},
        };
    },

    actions: {
        // get all products

        async getAllProducts() {
            const res = await fetch("/api/product");
            const data = await res.json();

            return data;
        },

        /******************* Get a product *******************/
        async getProduct(product) {
            const res = await fetch(`/api/product/${product}`);
            const data = await res.json();            
            return data.product;
        },

    }
});