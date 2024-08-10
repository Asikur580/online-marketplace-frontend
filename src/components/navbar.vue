<script setup>

</script>

<template>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Logo</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Categories</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                <form class="d-flex ms-auto">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fas fa-user"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><font-awesome-icon :icon="['fas', 'shopping-cart']" /></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<style scoped>
.navbar {
    background-color: #003366;
    /* Primary color */
}

.navbar-brand,
.nav-link,
.navbar-text {
    color: #ffffff;
    /* White color for text */
}

.navbar-brand:hover,
.nav-link:hover {
    color: #dddddd;
    /* Lighter hover color */
}

.form-inline input[type="search"] {
    width: 300px;
    /* Adjust the width as needed */
}
</style>