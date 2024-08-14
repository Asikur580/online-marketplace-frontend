<script setup>
import { useAuthStore } from "@/stores/auth";
import { onMounted, reactive } from "vue";

const authStore = useAuthStore();
const { sendOtp } = useAuthStore();

const otpSend = reactive({
    email: "",
});



</script>

<template>

    <div class="container my-5">
        <div class="row">
            <h1 class="text-center mb-5">Forgot Password</h1>

            <div v-if="authStore.message" class="alert alert-success" role="alert">
                {{ authStore.message }}
            </div>

            <form @submit.prevent="sendOtp(otpSend)" class="w-50 mx-auto">
                <div class="mb-3">
                    <input type="email" class="form-control" placeholder="Enter your email" v-model="otpSend.email" />                    
                </div>

                <button type="submit" class="btn btn-primary w-100">Send Otp</button>
            </form>
        </div>
    </div>

</template>