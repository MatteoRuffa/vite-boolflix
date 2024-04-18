<template>
    <div v-for="(shows, type) in allShows" :key="type">
        <h2>{{ type }}</h2>
        <div class="row" :ref="`${type}-container`">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3"  v-for="card in shows" :key="card.id">
                <CardComponent :id="card.id" :title="card.title || card.name" :original_title="card.original_title" :original_language="card.original_language" 
                :vote_average="card.vote_average" :overview="card.overview"  :poster_path="card.poster_path"/>
            </div>
        </div>
        <i class="fa-solid fa-chevron-right" @click="scrollContent(type)"></i>
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
        methods: {
            scrollContent(type) {
                const elements = this.$refs[`${type}-container`];
                elements.forEach(element => {
                element.scrollBy({
                    left: -1200,  // Modifica questo valore in base alla larghezza delle tue immagini
                    behavior: "smooth",
                });
    });
            },
        },
        computed: {
            allShows() {
                return {
                    'Film': this.store.data.movies,
                    'TV Shows': this.store.data.tvShows
                };
            },
        },
        created() {
            //console.log('Movies:', this.movies);
            //console.log('TV Shows:', this.tvShows);
        },
        
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
div {
    position: relative;
    
    .row {
        display: flex;
        flex-wrap: nowrap;
        overflow: hidden;
        position: relative;
        h2 {
            position: absolute;
        }
    // .col-12, .col-md-6, .col-lg-4, .col-xl-3 {
        
    // }
    }
    .fa-solid, .fa-chevron-right {
        font-size: 4rem;
        color: $text-gray;
        position: absolute;
        z-index: 500;
        top: 50%;
        right: 0;
        cursor: pointer;
        &:hover {
            color: $text-light;
        }
    }
}
</style>