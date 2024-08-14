<script setup>
import { useProductStore } from "@/stores/product";
import { onMounted, ref, computed } from "vue";
import { RouterLink } from "vue-router";

const { getAllProducts } = useProductStore();
const products = ref([]);
const currentPage = ref(1);
const perPage = 12; // Number of items per page

// Fetch the categories on component mount
onMounted(async () => {
    products.value = await getAllProducts();
});

// Computed property to calculate the total number of pages
const totalPages = computed(() => {
    return Math.ceil(products.value.length / perPage);
});

// Computed property to get the categories for the current page
const paginatedProduts = computed(() => {
    const start = (currentPage.value - 1) * perPage;
    const end = start + perPage;
    return products.value.slice(start, end);
});

// Method to change the current page
const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

</script>

<template>


    <section class="featured-products py-5">
        <div class="container">
            <h2 class="text-center mb-5">Featured Products</h2>
            <div v-if="paginatedProduts.length > 0" class="row g-4">
                <div v-for="product in paginatedProduts" :key="product.id" class="col-md-4 product-item text-center">
                    <img src="" alt="Product 1" class="img-fluid mb-3" />
                    <h4 class="h5">{{ product.name }}</h4>
                    <p class="text-muted">{{ product.price }}</p>
                    <RouterLink :to="{ name: 'productDetails', params: { id: product.id } }" href="#" class="btn btn-primary btn-sm">View Product</RouterLink>
                </div>     
            </div>
            <div v-else>
                <h2 class="title">There are no products</h2>
            </div>
            <nav v-if="totalPages > 1" class="mt-4">
                <ul class="pagination justify-content-center">
                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                        <button class="page-link" @click="changePage(currentPage - 1)" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    <li class="page-item" v-for="page in totalPages" :key="page"
                        :class="{ active: currentPage === page }">
                        <button class="page-link" @click="changePage(page)">{{ page }}</button>
                    </li>
                    <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                        <button class="page-link" @click="changePage(currentPage + 1)" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    </section>


</template>

<style scoped>
.featured-products {
    padding: 60px 0;
    background-color: #f9f9f9;
    /* Background color */
}

.product-item {
    text-align: center;
    margin-bottom: 30px;
}

.product-item img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
}

.product-item h4 {
    margin-top: 15px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333333;
    /* Text color */
}

.product-item p {
    font-size: 1.2rem;
    color: #555555;
    /* Text color for price */
    margin-top: 10px;
}

.product-item .btn {
    margin-top: 15px;
    background-color: #007bff;
    color: #ffffff;
}

.product-item .btn:hover {
    background-color: #0056b3;
}
</style>