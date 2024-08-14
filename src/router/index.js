import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProfileView from '@/views/ProfileView.vue';
import ProfileUpdatedView from '@/views/ProfileUpdatedView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';
import LoginView from '@/views/auth/LoginView.vue';
import CategoryView from '@/views/CategorysView.vue';
import { useAuthStore } from "@/stores/auth";
import SendOtpView from '@/views/auth/SendOtpView.vue';
import VerifyOtpView from '@/views/auth/VerifyOtpView.vue';
import ResetPasswordView from '@/views/auth/ResetPasswordView.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },        
        {
            path: '/register',
            name: 'register',
            component: RegisterView,
            meta: { guest: true },
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: { guest: true },
        },
        {
            path: '/sendOtp',
            name: 'sendOtp',
            component: SendOtpView,
            meta: { guest: true },
        },
        {
            path: '/verifyOtp',
            name: 'verifyOtp',
            component: VerifyOtpView,
            meta: { otp: true },
        },
        {
            path: '/resetPassword',
            name: 'resetPassword',
            component: ResetPasswordView,
            meta: { reset: true },
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfileView,
            meta: { auth: true },
        },
        {
            path: '/profileUpdate',
            name: 'profileUpdate',
            component: ProfileUpdatedView,
            meta: { auth: true },
        },
        {
            path: '/category',
            name: 'category',
            component: CategoryView,
            meta: { auth: true },
        },
        {
            path: '/productDetails/:id',
            name: 'productDetails',
            component: ProductDetailView,            
        },

    ]
});

router.beforeEach(async (to, from) => {
    const authStore = useAuthStore();
    await authStore.getUser();

    if (authStore.user && to.meta.guest) {
        return { name: "home" };
    }

    if (!authStore.user && to.meta.auth) {
        return { name: "login" };
    }
      

});

export default router;