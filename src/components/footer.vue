<script setup>


</script>

<template>

    <!-- Footer Section -->
    <footer class="footer py-5">
        <div class="container">
            <div class="row">
                <!-- Links to Policy Pages -->
                <div class="col-md-4 footer-links">
                    <h5 class="mb-4">Policies</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-decoration-none ">Privacy Policy</a></li>
                        <li><a href="#" class="text-decoration-none ">Terms of Service</a></li>
                        <li><a href="#" class="text-decoration-none ">Return Policy</a></li>
                    </ul>
                </div>

                <!-- Social Media Icons -->
                <div class="col-md-4 social-icons text-center">
                    <h5 class="mb-4">Follow Us</h5>
                    <a href="#" class=" me-3"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class=" me-3"><i class="fab fa-twitter"></i></a>
                    <a href="#" class=" me-3"><i class="fab fa-instagram"></i></a>
                    <a href="#" class=""><i class="fab fa-linkedin-in"></i></a>
                </div>

                <!-- Contact Information -->
                <div class="col-md-4 contact-info">
                    <h5 class="mb-4">Contact Us</h5>
                    <p class=" mb-1">Email: <a href="mailto:info@yourcompany.com"
                            class="text-decoration-none">info@yourcompany.com</a></p>
                    <p class=" mb-1">Phone: <a href="tel:+1234567890" class="text-decoration-none">(123)
                            456-7890</a></p>
                    <p class="">Address: 123 Your Street, City, Country</p>
                </div>
            </div>
            <div class="text-center mt-4">
                <p class=" mb-0">© 2024 Your Company. All rights reserved.</p>
            </div>
        </div>
    </footer>


</template>

<style scoped>
.footer {
    background-color: #333333;
    /* Background color */
    color: #ffffff;
    /* Text color */
    padding: 40px 0;
}

.footer a {
    color: #ffffff;
    text-decoration: none;
}

.footer a:hover {
    color: #ff6600;
    /* Hover color */
}

.footer .social-icons a {
    font-size: 1.5rem;
    margin-right: 15px;
}

.footer .social-icons a:hover {
    color: #ff6600;
    /* Hover color for social icons */
}

.footer .footer-links,
.footer .contact-info {
    margin-bottom: 20px;
}
</style>