import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            user: null,
            errors: {},
            message:null,
            email:null,
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
                    console.log(data);
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

        // update user
        async userUpdate(updateUserData) {
            if (localStorage.getItem("token")) {   
                const res = await fetch("api/profile/update", {
                    method: 'post',
                    body: JSON.stringify(updateUserData),
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                const data = await res.json();
                
                if (res.ok) {
                    this.message = data.message;
                    this.router.push({ name: "profile" });
                    console.log(data.message);
                }
            }
        },

        // send otp

        async sendOtp(otpSend){
            const res = await fetch(`api/send-otp`, {
                method: 'post',
                body: JSON.stringify(otpSend),
            });

            const data = await res.json();
            console.log(data.message);
            if (data.status === "success") {                               
                this.message = data.message;
                this.email = otpSend.email;
                this.router.push({ name: "verifyOtp" });
                
            } else if(data.status === "failed"){
                this.message = data.message;
            }
        },

        async verifyOtp(otpVerify){
            const res = await fetch(`api/verify-otp`, {
                method: 'post',
                body: JSON.stringify(otpVerify),
            });

            const data = await res.json();
            console.log(data);
            if (data.status === "success") {
                this.message = data.message;
                this.email = otpVerify.email;
                localStorage.setItem("token", data.token);
                this.router.push({ name: "resetPassword" });   

            } else if(data.status === "failed"){                               
                this.message = data.message;
            }
        },

        async resetPassword(passwordReset){
            const res = await fetch(`api/reset-password`, {
                method: 'post',
                body: JSON.stringify(passwordReset),
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            const data = await res.json();
            console.log(data);
            if (data.errors) {
                this.errors = data.errors;
            }else if (data.status === "success") {
                this.message = data.message;
                this.email = null;                
                this.router.push({ name: "profile" });   

            }
        },



    },
});