<script setup>


</script>

<template>


    <section class="categories-section py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-md-4 category-item">
                    <a href="#" class="text-decoration-none text-center d-block">
                        <img src="" alt="Category 1" class="img-fluid mb-3" />
                        <h4 class="h5">Category 1</h4>
                    </a>
                </div>
                <div class="col-md-4 category-item">
                    <a href="#" class="text-decoration-none text-center d-block">
                        <img src="" alt="Category 2" class="img-fluid mb-3" />
                        <h4 class="h5">Category 2</h4>
                    </a>
                </div>
                <div class="col-md-4 category-item">
                    <a href="#" class="text-decoration-none text-center d-block">
                        <img src="" alt="Category 3" class="img-fluid mb-3" />
                        <h4 class="h5">Category 3</h4>
                    </a>
                </div>
            </div>
            <div class="row g-4 mt-4">
                <div class="col-md-4 category-item">
                    <a href="#" class="text-decoration-none text-center d-block">
                        <img src="" alt="Category 4" class="img-fluid mb-3" />
                        <h4 class="h5">Category 4</h4>
                    </a>
                </div>
                <div class="col-md-4 category-item">
                    <a href="#" class="text-decoration-none text-center d-block">
                        <img src="" alt="Category 5" class="img-fluid mb-3" />
                        <h4 class="h5">Category 5</h4>
                    </a>
                </div>
                <div class="col-md-4 category-item">
                    <a href="#" class="text-decoration-none text-center d-block">
                        <img src="" alt="Category 6" class="img-fluid mb-3" />
                        <h4 class="h5">Category 6</h4>
                    </a>
                </div>
            </div>
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