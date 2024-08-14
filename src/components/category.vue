<script setup>
import { useCategoryStore } from "@/stores/category";
import { onMounted, ref, computed } from "vue";

const { getAllCategories } = useCategoryStore();
const categories = ref([]);
const currentPage = ref(1);
const perPage = 6; // Number of items per page

// Fetch the categories on component mount
onMounted(async () => {
    categories.value = await getAllCategories();
});

// Computed property to calculate the total number of pages
const totalPages = computed(() => {
    return Math.ceil(categories.value.length / perPage);
});

// Computed property to get the categories for the current page
const paginatedCategories = computed(() => {
    const start = (currentPage.value - 1) * perPage;
    const end = start + perPage;
    return categories.value.slice(start, end);
});

// Method to change the current page
const changePage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};
</script>

<template>
    <section class="categories-section py-5">
        <div class="container">
            <div v-if="paginatedCategories.length > 0" class="row g-4 flex-row">
                <div v-for="category in paginatedCategories" :key="category.id" class="col-md-4 category-item">
                    <a href="#" class="text-decoration-none text-center d-block">
                        <img :src="category.image" :alt="category.name" class="img-fluid mb-3" />
                        <h4 class="h5">{{ category.name }}</h4>
                    </a>
                </div>
            </div>
            <div v-else>
                <h2 class="title">There are no categories</h2>
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
.categories-section {
    padding: 60px 0;
}

.category-item {
    text-align: center;
    margin-bottom: 30px;
}

.category-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
}

.category-item h4 {
    margin-top: 15px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333333;
    /* Text color */
}

.category-item:hover img {
    transform: scale(1.05);
    transition: transform 0.3s ease;
}
</style>