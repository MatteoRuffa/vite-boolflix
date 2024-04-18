<template>
    <main>
        <div class="container">
            <CardList :movies="store.data.movies" :tvShows="store.data.tvShows"/>
        </div>
    </main>
</template>

<script>
import { store } from '../store.js';
// import CardListMovies from './CardListMovies.vue';
// import CardListTvShows from './CardLIstTvShows.vue';
import CardList from './CardList.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardList,
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
    .container {
        padding: 70px;
    }
}

</style>