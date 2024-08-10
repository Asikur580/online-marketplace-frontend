<script setup>


</script>

<template>


    <section class="featured-products py-5">
        <div class="container">
            <h2 class="text-center mb-5">Featured Products</h2>
            <div class="row g-4">
                <div class="col-md-3 product-item text-center">
                    <img src="" alt="Product 1" class="img-fluid mb-3" />
                    <h4 class="h5">Product Name 1</h4>
                    <p class="text-muted">$19.99</p>
                    <a href="#" class="btn btn-primary btn-sm">View Product</a>
                </div>
                <div class="col-md-3 product-item text-center">
                    <img src="" alt="Product 2" class="img-fluid mb-3" />
                    <h4 class="h5">Product Name 2</h4>
                    <p class="text-muted">$29.99</p>
                    <a href="#" class="btn btn-primary btn-sm">View Product</a>
                </div>
                <div class="col-md-3 product-item text-center">
                    <img src="" alt="Product 3" class="img-fluid mb-3" />
                    <h4 class="h5">Product Name 3</h4>
                    <p class="text-muted">$39.99</p>
                    <a href="#" class="btn btn-primary btn-sm">View Product</a>
                </div>
                <div class="col-md-3 product-item text-center">
                    <img src="" alt="Product 4" class="img-fluid mb-3" />
                    <h4 class="h5">Product Name 4</h4>
                    <p class="text-muted">$49.99</p>
                    <a href="#" class="btn btn-primary btn-sm">View Product</a>
                </div>
            </div>
            <div class="row g-4 mt-4">
                <div class="col-md-3 product-item text-center">
                    <img src="" alt="Product 5" class="img-fluid mb-3" />
                    <h4 class="h5">Product Name 5</h4>
                    <p class="text-muted">$59.99</p>
                    <a href="#" class="btn btn-primary btn-sm">View Product</a>
                </div>
                <div class="col-md-3 product-item text-center">
                    <img src="" alt="Product 6" class="img-fluid mb-3" />
                    <h4 class="h5">Product Name 6</h4>
                    <p class="text-muted">$69.99</p>
                    <a href="#" class="btn btn-primary btn-sm">View Product</a>
                </div>
                <div class="col-md-3 product-item text-center">
                    <img src="" alt="Product 7" class="img-fluid mb-3" />
                    <h4 class="h5">Product Name 7</h4>
                    <p class="text-muted">$79.99</p>
                    <a href="#" class="btn btn-primary btn-sm">View Product</a>
                </div>
                <div class="col-md-3 product-item text-center">
                    <img src="" alt="Product 8" class="img-fluid mb-3" />
                    <h4 class="h5">Product Name 8</h4>
                    <p class="text-muted">$89.99</p>
                    <a href="#" class="btn btn-primary btn-sm">View Product</a>
                </div>
            </div>
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