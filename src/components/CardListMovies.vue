<template>
    <div class="row">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3" v-for="card in store.movies" :key="card.id">
                <CardComponent :id="card.id" :title="card.title" :original_title="card.original_title" :original_language="card.original_language" :vote_average="card.vote_average"/>
            </div>
        </div>
</template>

<script>
import { store } from '../store.js';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardListMovies',
        components: {
            CardComponent
        },
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>