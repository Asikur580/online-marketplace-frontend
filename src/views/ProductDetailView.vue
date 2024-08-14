<script setup>
import { useProductStore } from "@/stores/product";
import { onMounted, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const { getProduct } = useProductStore();

const product = ref(null);

onMounted(async () => (product.value = await getProduct(route.params.id)));
console.log(product)

</script>

<template>

    <div class="container my-5">
        <div class="row">
            <!-- Product Image & Carousel -->
            <div class="col-md-6 text-center">
                <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="" class="d-block w-100 product-image-large" alt="Product Image 1">
                        </div>
                        <div class="carousel-item">
                            <img src="" class="d-block w-100 product-image-large" alt="Product Image 2">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#productCarousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div class="carousel-thumbnails">
                    <img src="" data-bs-target="#productCarousel" data-bs-slide-to="0" class="active" alt="Thumbnail 1">
                    <img src="" data-bs-target="#productCarousel" data-bs-slide-to="1" alt="Thumbnail 2">
                </div>
            </div>

            <!-- Product Information -->
            <div v-if="product" class="col-md-6">
                <div class="product-info">
                    <h1 class="product-title">{{ product.name }}</h1>
                    <p class="product-price">{{ product.price }}</p>
                    <p class="product-description">
                        {{ product.description }}
                    </p>
                    <p class="product-availability">Availability: <span v-if="product.stock > 0" >In Stock</span> <span v-else>Out Of Stock</span></p>
                    <p class="product-seller"><strong>Seller:</strong> {{ product.seller.profile.first_name + ' ' +  product.seller.profile.last_name}}</p>
                </div>

                <!-- Add to Cart & Buy Now Buttons -->
                <div class="d-grid gap-2">
                    <button class="btn btn-primary btn-lg">Add to Cart</button>
                    <button class="btn btn-outline-primary btn-lg">Buy Now</button>
                </div>
            </div>
            <div v-else class="col-md-6">
                <h2 class="title">product not found!</h2>
            </div>


            <!-- Reviews Section -->
            <div class="reviews-section">
                <h2>Customer Reviews</h2>

                <div class="review-item">
                    <img src="" alt="User Avatar" class="review-avatar">
                    <div class="review-text">
                        <div class="star-rating">
                            ★★★★☆
                        </div>
                        <strong>User Name 1</strong>
                        <p>Review text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                            posuere erat a ante.</p>
                        <div class="review-images">
                            <img src="" alt="Review Image 1">
                            <img src="" alt="Review Image 2">
                        </div>
                    </div>
                </div>

                <div class="review-item">
                    <img src="" alt="User Avatar" class="review-avatar">
                    <div class="review-text">
                        <div class="star-rating">
                            ★★★★★
                        </div>
                        <strong>User Name 2</strong>
                        <p>Another review text. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
                        </p>
                    </div>
                </div>


                <!-- Related Products Section -->
                <div class="related-products">
                    <h2>Related Products</h2>
                    <div class="row">
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="product-item">
                                <img src="" alt="Related Product 1">
                                <h3 class="product-title">Product Title 1</h3>
                                <p class="product-price">$59.99</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="product-item">
                                <img src="" alt="Related Product 2">
                                <h3 class="product-title">Product Title 2</h3>
                                <p class="product-price">$79.99</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="product-item">
                                <img src="" alt="Related Product 3">
                                <h3 class="product-title">Product Title 3</h3>
                                <p class="product-price">$99.99</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4">
                            <div class="product-item">
                                <img src="" alt="Related Product 4">
                                <h3 class="product-title">Product Title 4</h3>
                                <p class="product-price">$49.99</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.product-image-large {
    width: 100%;
    height: auto;
    cursor: zoom-in;
}

.carousel-item img {
    object-fit: contain;
    width: 100%;
    height: 500px;
}

.carousel-thumbnails {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
}

.carousel-thumbnails img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    cursor: pointer;
    border: 2px solid transparent;
}

.carousel-thumbnails img.active {
    border-color: #007bff;
}
</style>