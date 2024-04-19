<template>
    <div class="card-container">
        <div class="mr-card">
            <div class="img-container">
                <div class="logo"><img src="/images/B-logo-boolflix.png" alt="" v-if="backdrop_path"></div>
                <img :src="store.imageUrl + backdrop_path" :alt="title" v-if="backdrop_path">
                <img src="/images/logo-boolflix.png" :alt="title" v-else>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
    export default {
        name: 'CardCarousel',
        props: ['id', 'title', 'original_title', 'original_language', 'vote_average', 'overview', 'backdrop_path'],
        data() {
            return {
                store,
                hover: false,
            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.card-container {
    position: relative;
    .mr-card {
        padding: 20px;
        .img-container {
            border-radius: 6px;
            width: 300px;
            .logo {
                position: absolute;
                top: 30px;
                left: 20px;
                width: 40px;
                height: 40px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            img {
                object-fit: contain;
                width: 100%;
                height: 100%;
                border-radius: 5px;
                
            }
        }
    }
}
</style>