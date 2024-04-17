<template>
    <header>
        <div>
            <div class="logo">IMMAGINE-LOGO</div>
            <div class="search-bar">
                <form class="d-flex" role="search" @submit.prevent="$emit('submit')">
                    <input class="form-control me-2" type="search" placeholder="Search" :value="searchQuery" @input="$emit('searchQuery', $event.target.value)" @keyup.enter="$emit('submit')">
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
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
header {
    background-color: $bg-black;
    color: $text-red;
    div {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        .logo {
            text-transform: uppercase;
            font-size: 2rem;
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