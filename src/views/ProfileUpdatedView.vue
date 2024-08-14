<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { onMounted, reactive, ref } from "vue";

const { errors } = storeToRefs(useAuthStore());
const authStore = useAuthStore();
const { userUpdate } = useAuthStore();
onMounted(() => { authStore.getUser(); });
onMounted(() => (errors.value = {}));

const updateUserData = reactive({
    first_name: authStore.user.data.profile.first_name,
    last_name: authStore.user.data.profile.last_name,
    phone: authStore.user.data.profile.phone,
    bio: authStore.user.data.profile.bio,
    profile_picture: null,
});

</script>

<template>

    <div class="container my-5">
        <h3 class="text-center">Edit Profile</h3>        

        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="edit-profile-card">
                    <form @submit.prevent="userUpdate(updateUserData)">
                        <!-- Profile Picture -->
                        <div class="mb-3 text-center">
                            <img src="https://via.placeholder.com/100" alt="Profile Picture"
                                class="profile-picture-preview" id="profilePicturePreview" />
                            <div>
                                <input type="file" class="form-control" id="profile_picture" />
                            </div>
                        </div>

                        <!-- First Name -->
                        <div class="mb-3 row">
                            <label for="firstName" class="col-sm-3 col-form-label">First Name</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="firstName"
                                    v-model="updateUserData.first_name" />
                            </div>
                        </div>

                        <!-- Last Name -->
                        <div class="mb-3 row">
                            <label for="lastName" class="col-sm-3 col-form-label">Last Name</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="lastName"
                                    v-model="updateUserData.last_name" />
                            </div>
                        </div>

                        <!-- Mobile -->
                        <div class="mb-3 row">
                            <label for="mobile" class="col-sm-3 col-form-label">Mobile</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="mobile" v-model="updateUserData.phone" />
                            </div>
                        </div>

                        <!-- Bio -->
                        <div class="mb-3 row">
                            <label for="bio" class="col-sm-3 col-form-label">Bio</label>
                            <div class="col-sm-9">
                                <textarea class="form-control" id="bio" rows="3"
                                    v-model="updateUserData.bio"></textarea>
                            </div>
                        </div>

                        <div class="text-center">
                            <button type="submit" class="btn save-changes-btn">
                                SAVE CHANGES
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.edit-profile-card {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    background-color: #f8f9fa;
}

.edit-profile-section-title {
    font-weight: bold;
    margin-bottom: 20px;
}

.form-control-plaintext {
    padding-left: 0;
    font-weight: bold;
}

.save-changes-btn {
    background-color: #f36e21;
    color: white;
    border: none;
}

.save-changes-btn:hover {
    background-color: #e65c10;
}

.profile-picture-preview {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}
</style>