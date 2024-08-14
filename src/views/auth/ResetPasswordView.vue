<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { onMounted, reactive } from "vue";

const { errors } = storeToRefs(useAuthStore());
const { resetPassword } = useAuthStore();

const authStore = useAuthStore();

const passwordReset = reactive({
    email: authStore.email,
    password: "",
    password_confirmation: "",
});

onMounted(() => (errors.value = {}));

</script>

<template>

    <div class="container my-5">
        <div class="row">
            <h1 class="text-center mb-5">Verify Otp</h1>

            <div v-if="authStore.message" class="alert alert-success" role="alert">
                {{ authStore.message }}
            </div>

            <form @submit.prevent="resetPassword(passwordReset)" class="w-50 mx-auto">

                <div class="mb-3">
                    <input type="password" class="form-control" placeholder="Password" v-model="passwordReset.password" />
                    <p v-if="errors.password" class="text-danger">{{ errors.password[0] }}</p>
                </div>

                <div class="mb-3">
                    <input type="password" class="form-control" placeholder="Confirm Password"
                        v-model="passwordReset.password_confirmation" />
                </div>

                <button type="submit" class="btn btn-primary w-100">Reset Password</button>
            </form>
        </div>
    </div>

</template>