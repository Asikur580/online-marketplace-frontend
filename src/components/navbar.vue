<script setup>
import { RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => { authStore.getUser(); });

</script>

<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <RouterLink :to="{ name: 'home' }" class="navbar-brand" href="#">Logo</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'home' }" class="nav-link" href="#">Home</RouterLink>
                    </li>
                    <li v-if="authStore.user" class="nav-item">
                        <RouterLink :to="{ name: 'category' }" class="nav-link" href="#">Categories</RouterLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                <form class="d-flex ms-auto">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
                <ul class="navbar-nav ms-auto">
                    <li  v-if="authStore.user" class="nav-item">
                        <a class="nav-link" href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']" /></a>
                    </li>
                    <li  v-if="authStore.user" class="nav-item">
                        <RouterLink :to="{ name: 'profile' }" class="nav-link" href="#"><i class="fas fa-user"></i>
                        </RouterLink>
                    </li>
                    <li  v-if="authStore.user" class="nav-item">
                        <form @submit.prevent="authStore.logout">
                            <button class="btn btn-danger ms-2">Logout</button>
                        </form>
                    </li>
                    <li  v-if="!authStore.user" class="nav-item">
                        <RouterLink :to="{ name: 'login' }" class="btn btn-outline-light ms-2" href="#">Login
                        </RouterLink>
                    </li>
                    <li v-if="!authStore.user" class="nav-item">
                        <RouterLink :to="{ name: 'register' }" class="btn btn-light ms-2" href="#">Register
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


</template>

<style scoped>
.navbar {
    background-color: #003366;
    /* Primary color */
}

.navbar-brand,
.nav-link,
.navbar-text {
    color: #ffffff;
    /* White color for text */
}

.navbar-brand:hover,
.nav-link:hover {
    color: #dddddd;
    /* Lighter hover color */
}

.form-inline input[type="search"] {
    width: 300px;
    /* Adjust the width as needed */
}

.btn-outline-light {
    border-color: #ffffff;
    color: #ffffff;
}

.btn-outline-light:hover {
    background-color: #ffffff;
    color: #003366;
}

.btn-light {
    background-color: #ffffff;
    color: #003366;
}

.btn-light:hover {
    background-color: #dddddd;
}
</style>