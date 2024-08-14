<script setup>
import { useAuthStore } from "@/stores/auth";
import { reactive } from "vue";

const authStore = useAuthStore();

const { verifyOtp } = useAuthStore();

const otpVerify = reactive({
    email: authStore.email,
    otp: "",
});

</script>

<template>

    <div class="container my-5">
        <div class="row">
            <h1 class="text-center mb-5">Verify Otp</h1>

            <div v-if="authStore.message" class="alert alert-success" role="alert">
                {{ authStore.message }}
            </div>

            <form @submit.prevent="verifyOtp(otpVerify)" class="w-50 mx-auto">

                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Enter your otp" v-model="otpVerify.otp" />                    
                </div>

                <button type="submit" class="btn btn-primary w-100">Verify Otp</button>
            </form>
        </div>
    </div>

</template>