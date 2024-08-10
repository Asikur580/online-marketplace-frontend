<script setup>


</script>

<template>
    <section class="hero-section py-5">
        <div class="container text-center">
            <h1 class="display-4 fw-bold">Featured Products & Promotions</h1>
            <p class="lead">Explore our latest deals and offers on top-quality products</p>
            <a href="../productList/productList.html" class="btn btn-primary btn-lg">Shop Now</a>
        </div>
    </section>

</template>

<style scoped>

.hero-section {
    background-image: url("hero-banner.jpg");
    /* Replace with your actual banner image */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: black;
    color: #ffffff;
    /* Text color */
    padding: 150px 0;
    /* Adjust padding to fit your design */
    text-align: center;
}

.hero-section h1 {
    font-size: 3rem;
    /* Adjust font size */
    font-weight: bold;
}

.hero-section p {
    font-size: 1.5rem;
    /* Adjust font size */
    margin-bottom: 30px;
}

.hero-section .btn-primary {
    background-color: #ff6600;
    /* Button color */
    border: none;
    padding: 15px 30px;
    font-size: 1.2rem;
}

.hero-section .btn-primary:hover {
    background-color: #cc5200;
    /* Darker shade on hover */
}
</style>