<script setup>
import { useAuthStore } from "@/stores/auth";
import { onMounted } from 'vue';

const authStore = useAuthStore();

onMounted(() => { authStore.getUser(); });

</script>

<template>

    <div class="container mt-5">
        <h3>Manage My Account</h3>

        <div v-if="authStore.message" class="alert alert-success" role="alert">
            {{ authStore.message }}
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="profile-card mb-3">
                    <div class="profile-section-title">
                        Personal Profile <RouterLink :to="{ name: 'profileUpdate' }" href="#"
                            class="text-decoration-none">EDIT</RouterLink>
                    </div>
                    <img src="https://via.placeholder.com/100" alt="Profile Picture" class="profile-picture">
                    <p v-if="authStore.user.data.profile"><strong>Name : </strong> {{
                        authStore.user.data.profile.first_name + ' '
                        +
                        authStore.user.data.profile.last_name }}</p>
                    <p v-if="authStore.user.data.email"><strong>Email : </strong> {{ authStore.user.data.email }}</p>
                    <p v-if="authStore.user.data.profile"><strong>Phone : </strong> {{ authStore.user.data.profile.phone
                        }}</p>
                    <div v-if="authStore.user.data.profile" class="profile-section-title">Bio :</div>
                    <p v-if="authStore.user.data.profile">{{ authStore.user.data.profile.bio }}</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="profile-card mb-3">
                    <div class="profile-section-title">
                        Address Book <a href="#" class="text-decoration-none">EDIT</a>
                    </div>
                    <p><strong>DEFAULT SHIPPING ADDRESS</strong></p>
                    <p>Asikur</p>
                    <p>
                        court<br />Rajshahi - Rajshahi - Rajshahi Court<br />(+880)
                        1824580580
                    </p>
                    <hr />
                    <p><strong>DEFAULT BILLING ADDRESS</strong></p>
                    <p>Asikur</p>
                    <p>
                        court<br />Rajshahi - Rajshahi - Rajshahi Court<br />(+880)
                        1824580580
                    </p>
                </div>
            </div>
        </div>

        <h5>Recent Orders</h5>

        <div class="order-card">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <p><strong>Order #:</strong> 640072681224178</p>
                    <p><strong>Placed On:</strong> 09/04/2023</p>
                </div>
                <div class="order-total">৳ 121</div>
                <a href="#" class="manage-link text-decoration-none">MANAGE</a>
            </div>
        </div>

        <div class="order-card">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <p><strong>Order #:</strong> 636163486724178</p>
                    <p><strong>Placed On:</strong> 18/12/2022</p>
                </div>
                <div class="order-total">৳ 409</div>
                <a href="#" class="manage-link text-decoration-none">MANAGE</a>
            </div>
        </div>

        <div class="order-card">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <p><strong>Order #:</strong> 626882445524178</p>
                    <p><strong>Placed On:</strong> 26/04/2022</p>
                </div>
                <div class="order-total">৳ 161</div>
                <a href="#" class="manage-link text-decoration-none">MANAGE</a>
            </div>
        </div>
    </div>

</template>

<style scoped>
.profile-card {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 5px;
    background-color: #f8f9fa;
}

.profile-section-title {
    font-weight: bold;
    margin-bottom: 10px;
}

.order-card {
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
    margin-bottom: 10px;
}

.order-total {
    font-weight: bold;
}

.manage-link {
    text-decoration: none;
}

.profile-picture {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}
</style>