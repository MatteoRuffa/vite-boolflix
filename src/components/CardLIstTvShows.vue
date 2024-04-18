<template>
    <div class="row">
        <h2>Serie TV</h2>
        <div class="col-12 col-md-6 col-lg-4 col-xl-3" v-for="card in store.tvShows" :key="card.id">
            <CardComponent :id="card.id" :title="card.name" :original_title="card.original_name" :original_language="card.original_language" 
            :vote_average="card.vote_average" :overview="card.overview" :poster_path="card.poster_path"/>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardListTvShows',
        components: {
            CardComponent,
        },
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>
// .row {
//     .col-12, .col-md-6, .col-lg-4, .col-xl-3 {
//         padding: 10px;
//     }
// }
</style>
