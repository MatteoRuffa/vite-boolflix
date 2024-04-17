<template>
    <header>
        <div>
            <div class="logo">IMMAGINE-LOGO</div>
            <div class="search-bar">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
        
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',
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