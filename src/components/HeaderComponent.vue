<template>
    <header :class="{ 'scrolled': scrolled }">
        <div class="mr-container">
            <div class="logo-container">
                <div class="logo">IMMAGINE-LOGO</div>
                <div>
                    <ul class="nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Serie TV</a></li>
                        <li><a href="#">Film</a></li>
                        <li><a href="#">Nuovi e popolari</a></li>
                        <li><a href="#">La mia lista</a></li>
                        <li><a href="#">Sfoglia per lingua</a></li>
                    </ul>
                </div>
            </div>
            <div class="search-bar">
                <form class="d-flex" role="search" @submit.prevent="$emit('submit')">
                    <input class="form-control me-2" type="search" placeholder="Search" :value="searchQuery" @input="$emit('searchQuery', 
                    $event.target.value)" @keyup.enter="$emit('submit')">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        props: ['searchQuery'],
        data() {
            return {
                scrolled: false
            }
        },
        methods: {
            handleScroll() {
                this.scrolled = window.scrollY > 0;
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
header {
    color: $text-red;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 600;
    transition: background-color 0.3s ease;
    background-color: transparent;
    &.scrolled {
        background-color: $bg-black;
    }
    .mr-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        .logo-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .logo {
                text-transform: uppercase;
                font-size: 2rem;
                padding: 0 20px;
            }
            ul {
                li{
                    padding: 0 20px;
                    a {
                    text-decoration: none;
                    color: $text-gray;
                    }
                }
            }
        }
        .search-bar {
            .form-control {
                border-radius: 0px;
            }
            .btn-outline-success {
                color: $text-red;
                border-color: $text-red;
                border-radius: 0px;
                &:hover {
                    background-color: $text-red;
                    color: $bg-black;
                }
            }
        }
        
    }
}

</style>