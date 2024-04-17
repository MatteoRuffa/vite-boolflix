<template>
    <main>
        <div class="container">
            <CardListMovies />
            <CardListTvShows />
        </div>
    </main>
</template>

<script>
import { store } from '../store.js';
import CardListMovies from './CardListMovies.vue';
import CardListTvShows from './CardLIstTvShows.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardListMovies,
            CardListTvShows,
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
    background-color: $bg-dark;
    color: $text-light;
}

</style>