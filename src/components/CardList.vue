<template>
    <div class="row" >
        <div class="col-12 col-md-6 col-lg-4 col-xl-3" v-for="card in allShows" :key="card.id">
            <CardComponent :id="card.id" :title="card.title || card.name" :original_title="card.original_title" :original_language="card.original_language" 
            :vote_average="card.vote_average" :overview="card.overview"  :poster_path="card.poster_path"/>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardList',
        props: ['movies', 'tvShows'],
        components: {
            CardComponent
        },
        data() {
            return {
                store
            }
        },
        computed: {
            allShows() {
                return [...this.store.data.movies, ...this.store.data.tvShows];
            },
        },
        created() {
            //console.log('Movies:', this.movies);
            //console.log('TV Shows:', this.tvShows);
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
// .row {
//     .col-12, .col-md-6, .col-lg-4, .col-xl-3 {
//         padding: 10px;
//     }
// }

</style>