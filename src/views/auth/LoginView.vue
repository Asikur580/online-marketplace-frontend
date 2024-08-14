<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { onMounted, reactive } from "vue";

const { errors } = storeToRefs(useAuthStore());
const { authenticate } = useAuthStore();

const formData = reactive({
  email: "",
  password: "",
});

onMounted(() => (errors.value = {}));

</script>

<template>
  <div class="container my-5">
    <div class="row">
      <h1 class="text-center mb-5">Login to your account</h1>

      <form @submit.prevent="authenticate('login', formData)" class="w-50 mx-auto">
        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Email" v-model="formData.email" />
          <p v-if="errors.email" class="text-danger">{{ errors.email[0] }}</p>
        </div>

        <div class="mb-3">
          <input type="password" class="form-control" placeholder="Password" v-model="formData.password" />
          <p v-if="errors.password" class="text-danger">{{ errors.password[0] }}</p>
        </div>

        <div class="mb-3 text-end">
          <RouterLink :to="{ name: 'sendOtp' }" href="" class="icon-link icon-link-hover" style="--bs-link-hover-color-rgb: 25, 135, 84;">Forgot Password?</RouterLink>
        </div>

        <button class="btn btn-primary w-100">Login</button>
      </form>
    </div>
  </div>

</template>