import { defineStore } from "pinia";

export const useCategoryStore = defineStore('categoryStore', {
    state: () => {
        return {
            errors: {},
        };
    },

    actions: {
        // get all category

        async getAllCategories() {
            const res = await fetch("/api/category");
            const data = await res.json();

            return data;
        },

    }
});