<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { onMounted, reactive } from "vue";

const { errors } = storeToRefs(useAuthStore());
const { authenticate } = useAuthStore();

const formData = reactive({
  email: "",
  password: "",
  password_confirmation: "",
});

onMounted(() => (errors.value = {}));

</script>

<template>
  <div class="container my-5">
    <div class="row">
      <h1 class="text-center mb-5">Register a new account</h1>

      <form @submit.prevent="authenticate('register', formData)" class="w-50 mx-auto">

        <div class="mb-3">
          <input type="text" class="form-control" placeholder="Email" v-model="formData.email" />
          <p v-if="errors.email" class="text-danger">{{ errors.email[0] }}</p>
        </div>

        <div class="mb-3">
          <input type="password" class="form-control" placeholder="Password" v-model="formData.password" />
          <p v-if="errors.password" class="text-danger">{{ errors.password[0] }}</p>
        </div>

        <div class="mb-3">
          <input type="password" class="form-control" placeholder="Confirm Password"
            v-model="formData.password_confirmation" />
        </div>

        <button class="btn btn-primary w-100">Register</button>
      </form>
    </div>
  </div>
</template>