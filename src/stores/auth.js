import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            user: null,
            errors: {},
        }
    },
    // getters: {
    //     userAge: (state) => `${state.user} is 25`
    // }

    actions: {

        // Get authenticated user
        async getUser() {
            if (localStorage.getItem("token")) {
                const res = await fetch("api/user", {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                const data = await res.json();
                if (res.ok) {
                    this.user = data;
                }
            }
        },

        // login and register user

        async authenticate(apiRoute, formData) {
            const res = await fetch(`api/${apiRoute}`, {
                method: 'post',
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (data.errors) {
                this.errors = data.errors;
            } else {
                this.errors = {};
                localStorage.setItem("token", data.access_token);
                this.user = data.message;
                this.router.push({ name: "home" });
            }

        },

        /******************* Logout user *******************/
        async logout() {
            const res = await fetch("/api/logout", {
                method: "post",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            const data = await res.json();

            if (res.ok) {
                this.user = null;
                this.errors = {};
                localStorage.removeItem("token");
                this.router.push({ name: "home" });
            }
        },
    },
});