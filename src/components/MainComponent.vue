<template>
    <main>
        <div class="wrapper" v-if="!this.store.dataLoaded">
            <video id="dune-trailer" class="fullscreen-video" autoplay muted>
                <source src="/public/videos/y2meta.net_dune-official-main-trailer.mp4" type="video/mp4">
            </video>
            <div class="background-fade"></div>
        </div>
        <div class="container">
            <CardsInitialList  class="cards-initial-list" :movies="store.data.movies" :tvShows="store.data.tvShows" v-if="!this.store.dataLoaded" />
            <CardList  :movies="store.data.movies" :tvShows="store.data.tvShows" v-else/>
        </div>
    </main>
</template>

<script>
import { store } from '../store.js';
// import CardListMovies from './CardListMovies.vue';
// import CardListTvShows from './CardLIstTvShows.vue';
import CardsInitialList from './CardsInitialList.vue';
import CardList from './CardList.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardList,
            CardsInitialList,
        },
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
main {
    color: $text-light;
    .wrapper{
        position: relative;
        .fullscreen-video {
            width: 100%;  
            height: 85vh; 
            object-fit: cover; 
            position: relative;
        }
        .background-fade {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 60vh;  
            background: linear-gradient(to top, $bg-dark 0%, rgba(0, 0, 0, 0) 100%);
        }
        .cards-initial-list {
            position: absolute;
            bottom: -100px!important;  
            width: 100%;  
        }
    }
    .container {
        padding: 70px;
        max-width: 1700px!important;
        
    }
}

</style>